import Link from 'next/link'

export default ({pathname}) => (
<footer>
  <div className="FooterContainer">
<div>
<p>hello</p>
</div>
<div>
<p>hello</p>
</div>
<div>
<p>hello</p>
</div>

  </div>
  <style jsx>{`
    footer{
      bottom: 0;
      position: absolute;
      right: 0;
      left: 0;
    }
    .FooterContainer{
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-sizing: border-box;
      width: 100%;
      // padding: 25px;
      margin-left: auto;
      margin-right: auto;
      background-color: rgb(32, 35, 42)

    }

  `}</style>
</footer>

)
