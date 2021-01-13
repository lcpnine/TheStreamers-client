import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import myAxios from '../utils/myAxios';
import Timer from '../components/timer';

const SignUp: FC = () => {
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
        <div className="modal-header">Sign Up</div>
        <div className="modal-content">
          <div className="modal-input validation-input-div">
            <input
              name="email"
              placeholder="Email - Email has to be unique"
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
              {isCodeSent ? <Timer maxSec={600} /> : 'Send Code'}
            </button>
          </div>
          <div className="modal-input validation-input-div">
            <input
              name="code"
              placeholder="Code"
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
              {isCodeChecked ? 'Checked' : 'Check Code'}
            </button>
          </div>
          <input
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleInputChange}
            className="modal-input"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handleInputChange}
            className="modal-input"
          />
          <input
            name="checkPassword"
            placeholder="Check Password"
            type="password"
            value={checkPassword}
            onChange={handleInputChange}
            className="modal-input"
          />
          <div className="modal-link">
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/change-password')}
            >
              Change Password
            </button>
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/')}
            >
              Sign In
            </button>
          </div>
          <button
            className="btn modal-input modal-submit-btn"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
