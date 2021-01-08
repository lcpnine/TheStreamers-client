import type { AppProps } from 'next/app';
import { FC } from 'react';
import '../styles/global.scss';
import '../styles/containers.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component className="page" {...pageProps} />;
};

export default MyApp;
