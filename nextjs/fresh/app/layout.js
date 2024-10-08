import './globals.css'
import Link from "next/link"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 내브바 */}
        <div className="nav">
          <nav className="global-nav">
            <div className="global-nav-links">
              <Link className="global-nav-item" href="#">MENU</Link>
              <Link className="global-nav-item" href="/test">Test</Link>
              <Link className="global-nav-item" href="/event">Event</Link>
              <Link className="global-nav-item" href="/cart">Cart</Link>
            </div>
          </nav>
          <nav className="local-nav">
            <div className="local-nav-links">
              <Link href="/" className="product-name">HANNA FRESH</Link>
              <Link href="#">개요</Link>
              <Link href="/list">제품</Link>
              <Link href="/cart/payment">구입</Link>
            </div>
          </nav>
        </div>

        {/* 메인 */}
        <div className='main'>
          {children}

          {/* 맨위로버튼 */}
          <button href="#header"><img className="img-arrow-up" src="/arrow-up.png" alt="arrow-up"></img></button>
        </div>
      </body>
    </html>
  )
}
