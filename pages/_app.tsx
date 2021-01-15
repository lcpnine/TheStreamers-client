import type { AppProps } from 'next/app';
import { FC } from 'react';
import Nav from '../components/Nav';
import '../styles/channelCards.scss';
import '../styles/global.scss';
import '../styles/containers.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Nav />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
