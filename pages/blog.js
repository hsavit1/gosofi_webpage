import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <p>Test Blog Page</p>
    <style jsx>{`
    p{
        margin-top: 50px;
      }
      `}
    </style>
  </App>

)
