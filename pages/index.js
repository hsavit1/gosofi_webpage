import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default (props) => (
  <App>
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
