import Link from 'next/link'

export default ({pathname}) => (
<footer>
<div className="FooterSpacer">
  <div className="FooterContainer">
      <div className="FooterLinks">
        <div className="Mini-Col">
          <div>Resources</div>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
        </div>
        <div className="Mini-Col">
          <div>Resources</div>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
        </div>
        <div className="Mini-Col">
          <div>Resources</div>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
        </div>
        <div className="Mini-Col">
          <div>Resources</div>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
          <a href="">hello</a>
        </div>

      </div>
      <section>
        <img className="Logo" src="../static/go-sofi-tag.png"/>
        <p>Copyright © 2017 goSOFI</p>
      </section>
    </div>
  </div>
  <style jsx>{`
    footer{
      padding-top:10px;
      padding-bottom: 50px;
      bottom: 0;
      position: absolute;
      right: 0;
      left: 0;
      background-color: rgb(32, 35, 42)
    }
    .FooterSpacer{
      padding-left: 20px;
      padding-right: 20px;
      margin-left: auto;
      margin-right: auto;
    }
    .FooterContainer{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-sizing: border-box;
    }
    .FooterLinks{
      display: flex;
      flex-wrap: wrap;
    }
    .Logo{
      max-height: 50px;

    }
    section{
      padding-top: 40px;
      order: -1;
      color: #A9A9A9;
        margin-left: 20px;
    }
    div {
      color: #A9A9A9;
    }
  `}</style>
</footer>

)
