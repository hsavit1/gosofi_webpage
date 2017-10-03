import App from '../components/App'
import Header from '../components/Header'


export default (props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <div className="testing">
    <p>Hello World!</p>
    </div>
    <style jsx>{`
      .testing{
        margin-top:50px;
        height: 200vh;
        margin-bottom: 20px;
      }
    `}</style>
  </App>

)
