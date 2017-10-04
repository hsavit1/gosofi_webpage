import Link from 'next/link'
import Head from 'next/head'


export default ({ pathname }) => (

<header>
<Head>
     <title>My page title</title>
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
   </Head>

<div className="Header">
    <div className="LogoContainer">
      <Link prefetch href='/'>
        <a className={pathname === '/'}><img  className="Logo"src="../static/go-sofi-tag.png" /></a>
      </Link>
    </div>
    <div className="RightJustifiedMenu">
      <Link prefetch href='/about'>
        <a className={pathname === '/about' && 'is-active'}>About</a>
      </Link>

      <Link prefetch href='/team'>
        <a className={pathname === '/team' && 'is-active'}>Team</a>
      </Link>
      <Link prefetch href='/blog'>
        <a className={pathname === '/blog' && 'is-active'}>Blog</a>
      </Link>
      <Link prefetch href='/donate'>
        <a className={pathname === '/donate' && 'is-active'}>Donate</a>
      </Link>



    </div>
    </div>

<style jsx>{`
  header {
    position: fixed;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 60px;
    background-color: rgb(32, 35, 42);
  }
  .Header{
    height: 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-right: 29px;
    // margin-left: 74px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .RightJustifiedMenu a{
    margin-right: 45px;

  }
  .LogoContainer{
    padding-left: 45px;
  }
  .Logo{
    max-height: 40px;
    padding-top: 15px;

  }
  a {
    font-size: 16px;
    text-decoration: none;
    color: white;
    padding-bottom: 18px;
    font-weight: 300;
    font-style: normal;
  }
  a:hover{
    color: #0099ff;
  }
  .rightJustified{
    justify-content: flex-end;
  }
  .is-active {
    border-bottom: 3px solid #0099ff;
    color: #0099ff;
  }
`}</style>


</header>


)
