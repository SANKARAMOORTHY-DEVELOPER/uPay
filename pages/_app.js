import '@suiet/wallet-kit/style.css';
import ConnectionProvider from './Provider';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ConnectionProvider>
      <Component {...pageProps} />
    </ConnectionProvider>
  )
}

export default MyApp