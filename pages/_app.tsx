import type { AppProps } from 'next/app';
import { FC } from 'react';
import '../styles/global.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
