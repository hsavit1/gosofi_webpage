import App from '../App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { fundVault } from '.././services/blockChainService'
// import { fundVault } from '../App'

export default class Home extends React.Component {

fundV() {
  return fundVault();
}

    render() {

return (
  <App>
    <Head>
      <title>goSOFI</title>
    </Head>
      <Header pathname={this.props.url.pathname} />
      <div className="testing">
      <p>Hello World!</p>
      <h3>Fund Left</h3>
      <div id="fund-left"></div>

  <br />
  <div className="col-sm-10">
      <input id="fund-amount" type="number" className="form-control" />
  </div>
  <button className="btn btn-primary col-sm-2" onClick={() => this.fundV() }>Fund Vault</button>

      </div>
      <Footer pathname={this.props.url.pathname}/>
      <style jsx>{`
        .testing{

          height: 200vh;
          margin-top: 60px;
        }
      `}</style>
  </App>

);

}

}
