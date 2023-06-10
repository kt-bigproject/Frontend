import globalStyles from "../src/commons/styles/globalStyle"
import { Global } from '@emotion/react'
import LayoutPage from "../src/commons/layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles}/>
      <LayoutPage>
      <Component {...pageProps} />
      </LayoutPage>
    </>
  )
}
