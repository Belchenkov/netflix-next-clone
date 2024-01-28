import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DevSupport } from '@react-buddy/ide-toolbox';

export default function App({Component, pageProps}: AppProps) {
    return <DevSupport>
        <Component {...pageProps} />
    </DevSupport>;
}
