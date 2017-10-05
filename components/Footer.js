import Link from 'next/link'
import Head from 'next/head'

export default ({pathname}) => (
<footer>
  <Head>
    <link href="/static/css/Footer.css" rel="stylesheet" />
  </Head>
  <div className="FooterSpacer">
    <div className="FooterContainer">
        <div className="FooterLinks">
          <div className="Mini-Col">
            <div className="Title">Lorem</div>
            <a href="">Enter</a>
            <a href="">Links</a>
            <a href="">In</a>
            <a href="">Here</a>
          </div>
          <div className="Mini-Col">
            <div className="Title">Community</div>

            <a href="">Forums</a>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
          </div>
          <div className="Mini-Col">
            <div className="Title">Resources</div>
            <a href="">Videos</a>
            <a href="">Examples</a>
            <a href="">Tools</a>
          </div>
          <div className="Mini-Col">
            <div className="Title">More</div>
            <a href="">Blog</a>
            <a href="">Github</a>
            <a href="">Anything</a>
            <a href="">Lorem</a>
          </div>

        </div>
        <section>
          <img className="FooterLogo" src="../static/go-sofi-tag.png"/>
          <p>Copyright © 2017 goSOFI</p>
        </section>
      </div>
  </div>
</footer>

)
