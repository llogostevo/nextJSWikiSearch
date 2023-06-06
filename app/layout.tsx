import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wikirockets!',
  description: 'Rockets that are wicked!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800`}>
        {/* navbar comes at the top of every page */}
        <Navbar />
        {/* children appear next */}
        {children}
        </body>
    </html>
  )
}
