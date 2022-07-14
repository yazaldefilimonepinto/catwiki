import { AppProps } from 'next/app';
import '@/styles/base/styles.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
