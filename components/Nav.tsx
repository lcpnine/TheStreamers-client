import { FC } from 'react';

const Nav: FC = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src="https://user-images.githubusercontent.com/52521363/104655176-a680af80-5700-11eb-850d-585556d072b6.png" />
      </div>
      <div className="nav__info">
        <div className="langs">
          <div className="btn langs-option">English</div>
          <div className="btn langs-option">한국어</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
