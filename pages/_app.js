import { AuthProvider } from '../components/Context/AuthContext'
import '../styles/root.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<AuthProvider><Component {...pageProps} /></AuthProvider>)
}
