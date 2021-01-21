import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Nav: FC = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { streamer } = query;

  const useEnglish = () => {
    if (streamer) {
      // for dynamic routing
      return router.push(`/channels/${streamer}`, `/channels/${streamer}`, {
        locale: 'en-US',
      });
    }
    return router.push(pathname, pathname, { locale: 'en-US' });
  };
  const useKorean = () => {
    if (streamer) {
      return router.push(`/channels/${streamer}`, `/channels/${streamer}`, {
        locale: 'ko-KR',
      });
    }
    return router.push(pathname, pathname, { locale: 'ko-KR' });
  };

  return (
    <div className="nav">
      <Link href="/channels">
        <div className="btn nav__logo">
          <img src="https://user-images.githubusercontent.com/52521363/104655176-a680af80-5700-11eb-850d-585556d072b6.png" />
        </div>
      </Link>
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
