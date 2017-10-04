import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default (props) => (
  <App>

    <Header pathname={props.url.pathname} />
    <p>Test Team Page</p>
    <Footer pathname={props.url.pathname}/>
    <style jsx>{`
      `}
    </style>
  </App>
)
