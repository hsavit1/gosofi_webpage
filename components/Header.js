import Link from 'next/link'
import Head from 'next/head'


export default ({ pathname }) => (

<header>
  <Head>
    <link href="/static/css/Header.css" rel="stylesheet" />
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
`}</style>


</header>


)
