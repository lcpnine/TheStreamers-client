import { FC } from 'react';
import { useRouter } from 'next/router';

const Nav: FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const useEnglish = () => router.push(pathname, pathname, { locale: 'en-US' });
  const useKorean = () => router.push(pathname, pathname, { locale: 'ko-KR' });

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src="https://user-images.githubusercontent.com/52521363/104655176-a680af80-5700-11eb-850d-585556d072b6.png" />
      </div>
      <div className="nav__info">
        <div className="langs">
          <div className="btn langs-option" onClick={useEnglish}>
            English
          </div>
          <div className="btn langs-option" onClick={useKorean}>
            한국어
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
