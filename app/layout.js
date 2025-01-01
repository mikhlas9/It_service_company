import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Binary Bastions - Your Stronghold for Digital Solutions',
  description: 'Transform your digital presence with our playful and professional IT services',
  icons: {
    icon: "/favicon.png",
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${outfit.className} bg-[#F8FAFC]`}>{children}</body>
    </html>
  )
}
