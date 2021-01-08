import { useState, FC } from 'react';

const FindPassword: FC = () => {
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
            <button name="email validation" className="input-validation-button">
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
            <button name="email validation" className="input-validation-button">
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
            <div className="modal-input modal-link-button">Sign In</div>
            <div className="modal-input modal-link-button">Sign Up</div>
          </div>
          <input
            className="modal-input"
            type="submit"
            value="Change Password"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
