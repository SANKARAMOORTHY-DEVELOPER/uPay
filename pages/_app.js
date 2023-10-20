import '@suiet/wallet-kit/style.css';
import ConnectionProvider from './Provider';
import '../styles/globals.css'
import { StateContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <ConnectionProvider>
    <StateContextProvider>
    <Component {...pageProps} />
    </StateContextProvider>
    </ConnectionProvider>
  )
}

export default MyApp