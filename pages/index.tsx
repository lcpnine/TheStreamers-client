import { GetStaticProps } from 'next';
import { useState, FC } from 'react';

const SignIn: FC = () => {
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

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
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
            <div className="modal-input modal-link-button">Find Password</div>
            <div className="modal-input modal-link-button">Sign Up</div>
          </div>
          <input
            className="modal-input"
            type="submit"
            value="Sign In"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default SignIn;
