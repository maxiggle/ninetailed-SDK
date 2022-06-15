import '../styles/globals.css'
import {
  NinetailedProvider
} from '@ninetailed/experience.js-next'


function MyApp({ Component, pageProps }) {
  return <NinetailedProvider clientId='fa3ab8ec-95ae-44dc-b7ae-96cd5a50f219'>
     <Component {...pageProps} />
  </NinetailedProvider>
  // fa3ab8ec-95ae-44dc-b7ae-96cd5a50f219
}
export default MyApp


