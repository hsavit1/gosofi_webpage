import Link from 'next/link'

export default ({ pathname }) => (
  <header>
<div>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>GoSOFI</a>
    </Link>
    </div>
    <div>
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
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 25px;
        text-decoration: none;
      }
      a:hover{
        color: rgba(34, 186, 217, .75);
      }
      .rightJustified{
      justify-content: flex-end;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)
