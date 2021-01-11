import { useState, FC } from 'react';
import { useRouter } from 'next/router';

const FindPassword: FC = () => {
  const router = useRouter();
  const pushRouter = (href: string) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    router.push(href);
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

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

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    alert(
      `username : ${username} \npassword : ${password} \ncheck password : ${checkPassword}`
    );
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <div className="auth-modal">
        <div className="modal-header">Find Password</div>
        <div className="modal-content">
          <input
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleInputChange}
            className="modal-input"
          />
          <div className="modal-input validation-input-div">
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleInputChange}
              className="validation-input"
            />
            <button
              name="email validation"
              className="btn input-validation-btn"
            >
              Send Code
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
            />
            <button
              name="email validation"
              className="btn input-validation-btn"
            >
              Check Code
            </button>
          </div>
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
              onClick={pushRouter('/')}
            >
              Sign In
            </button>
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/signup')}
            >
              Sign Up
            </button>
          </div>
          <button
            className="btn modal-input modal-submit-btn"
            onClick={handleSubmit}
          >
            Find Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
