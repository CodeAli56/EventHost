import '../styles/globals.css'
import '../styles/general.sass'

import MainLayout from "../src/components/layout/MainLayout"

function MyApp({ Component, pageProps }) {
  return (
  <MainLayout>
    <Component {...pageProps} />
 </MainLayout>
  )
}

export default MyApp
