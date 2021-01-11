import { useState, FC } from 'react';
import { useRouter } from 'next/router';

const SignIn: FC = () => {
  const router = useRouter();
  const pushRouter = (href: string) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    router.push(href);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    if (target.name === 'username') {
      setUsername(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert(`username : ${username} \npassword : ${password}`);
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <div className="auth-modal">
        <div className="modal-header">Sign In</div>
        <div className="modal-content">
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
          <div className="modal-link">
            <button
              className="btn modal-input modal-link-btn"
              onClick={pushRouter('/find-password')}
            >
              Find Password
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
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
