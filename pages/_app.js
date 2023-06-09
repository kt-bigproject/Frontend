import globalStyles from "../src/commons/styles/globalStyle"
import { Global } from '@emotion/react'
import Layout from "../src/commons/layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}
