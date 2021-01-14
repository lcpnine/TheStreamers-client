import type { AppProps } from 'next/app';
import { FC } from 'react';
import Nav from '../components/Nav';
import '../styles/global.scss';
import '../styles/containers.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Nav />
      <Component className="page" {...pageProps} />
    </div>
  );
};

export default MyApp;
