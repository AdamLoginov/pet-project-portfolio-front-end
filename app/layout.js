import Script from 'next/script'
import { Tektur } from 'next/font/google'
import './globals.css'



const tektur = Tektur({ subsets: ['cyrillic'] })

export const metadata = {
  title: "Michail's developer portfolio",
  description: 'Hi i am Michail',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tektur.className}>
        <div className="movie-bg"></div>
        {children}
      </body>
    </html>
  )
}
