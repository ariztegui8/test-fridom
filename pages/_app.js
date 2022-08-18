import { MuroProvider } from '../context/MuroProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <MuroProvider>
      <Component {...pageProps} />
    </MuroProvider>
  ) 
}

export default MyApp
