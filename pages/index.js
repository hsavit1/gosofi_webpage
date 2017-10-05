import App from '../App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

export default (props) => (
  <App>
  <Head>
    <title>goSOFI</title>
  </Head>
    <Header pathname={props.url.pathname} />
    <div className="testing">
    <p>Hello World!</p>
    </div>
    <Footer pathname={props.url.pathname}/>
    <style jsx>{`
      .testing{

        height: 200vh;
        margin-top: 60px;
      }
    `}</style>

  </App>

)
