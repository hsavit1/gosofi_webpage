import App from '../App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

export default (props) => (
  <App>
    <Head>
      <title>About | goSOFI</title>
    </Head>
    <Header pathname={props.url.pathname} />
    <p>Test About Page</p>

    <Footer pathname={props.url.pathname}/>
    <style jsx>{`
      `}
    </style>
  </App>
)
