import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <p>Test About Page</p>
    <style jsx>{`
      p{
        margin-top: 50px;
      }
      `}
    </style>
  </App>
)
