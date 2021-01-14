import { useState, FC } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import myAxios from '../utils/myAxios';
import Timer from '../components/Timer';

interface Props {
  locale: 'en-US' | 'ko-KR';
}

const text = {
  'en-US': {
    header: 'Sign Up',
    emailPlaceholder: 'Email - Email has to be unique',
    emailCheck: 'Send Code',
    codePlaceholder: 'Enter Code',
    checkCode: 'Check Code',
    checked: 'Checked',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password',
    passwordCheckPlaceholder: 'Check Password',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    changePassword: 'Change Password',
  },
  'ko-KR': {
    header: '회원가입',
    emailPlaceholder: '이메일 - 중복되는 이메일은 사용할 수 없습니다',
    codePlaceholder: '코드 입력',
    emailCheck: '코드 전송',
    checkCode: '코드 확인',
    checked: '확인됨',
    usernamePlaceholder: '유저명',
    passwordPlaceholder: '비밀번호',
    passwordCheckPlaceholder: '비밀번호 확인',
    signIn: '로그인',
    signUp: '회원가입',
    changePassword: '비밀번호 변경',
  },
};

const SignUp: FC<Props> = ({ locale }: Props) => {
  const router = useRouter();
  const pushRouter = (href: string) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    router.push(href);
  };

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeChecked, setIsCodeChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    if (target.name === 'username') {
      setUsername(target.value);
    }
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'code') {
      setCode(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
    if (target.name === 'checkPassword') {
      setCheckPassword(target.value);
    }
  };

  const handleSendCode = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response = await myAxios.post('auth/sendcode', { email });
    const { status } = response;
    if (status === 200) {
      setIsCodeSent(true);
    } else {
      alert('Please try again with valid email format');
    }
  };

  const handleCheckCode = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response = await myAxios.post('auth/checkcode', { email, code });
    const { status } = response;
    if (status === 200) {
      setIsCodeChecked(true);
    } else if (status === 400) {
      alert('Code is not valid');
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const result = await myAxios.put('auth/signup', {
      email,
      username,
      password,
    });
    const { status } = result;
    if (status === 201) {
      alert('Signed up successfully');
      router.push('/');
    }
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <div className="auth-modal">
        <div className="modal-header">{text[locale].header}</div>
        <div className="modal-content">
          <div className="modal-input validation-input-div">
            <input
              name="email"
              placeholder={text[locale].emailPlaceholder}
              type="email"
              value={email}
              onChange={handleInputChange}
              className="validation-input"
              readOnly={isCodeChecked}
            />
            <button
              name="email validation"
              className="btn input-validation-btn"
              onClick={handleSendCode}
            >
              {isCodeSent ? <Timer maxSec={600} /> : text[locale].emailCheck}
            </button>
          </div>
          <div className="modal-input validation-input-div">
            <input
              name="code"
              placeholder={text[locale].codePlaceholder}
              type="text"
              value={code}
              onChange={handleInputChange}
              className="validation-input"
              readOnly={isCodeChecked}
            />
            <button
              name="email validation"
              className="btn input-validation-btn"
              onClick={handleCheckCode}
            >
              {isCodeChecked ? text[locale].checked : text[locale].checkCode}
            </button>
          </div>
          <input
            name="username"
            placeholder={text[locale].usernamePlaceholder}
            type="text"
            value={username}
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
          <input
            name="checkPassword"
            placeholder={text[locale].passwordCheckPlaceholder}
            type="password"
            value={checkPassword}
            onChange={handleInputChange}
            className="modal-input"
          />
          <div className="modal-link">
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/')}
            >
              {text[locale].signIn}
            </button>
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/change-password')}
            >
              {text[locale].changePassword}
            </button>
          </div>
          <button
            className="btn modal-input modal-submit-btn"
            onClick={handleSubmit}
          >
            {text[locale].signUp}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

export const getStaticProps: GetStaticProps = async (props) => {
  const { locale } = props;

  return {
    props: {
      locale,
    },
  };
};
