import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hanna Forum',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <div className="navbar"> 
          <Link href="/" className="logo">Hanna Forum</Link>
          <Link href="/list">List</Link> 
        </div> 
        {children}
      </body>
    </html>
  )
}
