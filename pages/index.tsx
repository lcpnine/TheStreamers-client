import { useState, FC } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import myAxios from '../utils/myAxios';

interface Props {
  locale: 'en-US' | 'ko-KR';
}

const text = {
  'en-US': {
    header: 'Sign In',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    changePassword: 'Change Password',
  },
  'ko-KR': {
    header: '로그인',
    emailPlaceholder: '이메일',
    passwordPlaceholder: '비밀번호',
    signIn: '로그인',
    signUp: '회원가입',
    changePassword: '비밀번호 변경',
  },
};

const SignIn: FC<Props> = ({ locale }: Props) => {
  const router = useRouter();
  const pushRouter = (href: string) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    router.push(href);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const result = await myAxios.post('auth/signin', {
      email,
      password,
    });
    const { status } = result;
    if (status === 200) {
      router.push('/main');
    }
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <div className="auth-modal">
        <div className="modal-header">{text[locale].header}</div>
        <div className="modal-content">
          <input
            name="email"
            placeholder={text[locale].emailPlaceholder}
            type="text"
            value={email}
            onChange={handleInputChange}
            className="modal-input"
          />
          <input
            name="password"
            placeholder={text[locale].passwordPlaceholder}
            type="password"
            value={password}
            onChange={handleInputChange}
            className="modal-input"
          />
          <div className="modal-link">
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/change-password')}
            >
              {text[locale].changePassword}
            </button>
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/signup')}
            >
              {text[locale].signUp}
            </button>
          </div>
          <button
            className="btn modal-input modal-submit-btn"
            onClick={handleSubmit}
          >
            {text[locale].signIn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

export const getStaticProps: GetStaticProps = async (props) => {
  const { locale } = props;

  return {
    props: {
      locale,
    },
  };
};
