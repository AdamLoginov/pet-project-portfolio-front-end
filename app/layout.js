import Script from 'next/script'
import { Tektur } from 'next/font/google'
import './globals.css'

import YandexMetrika from './components/YandexMetrika'



const tektur = Tektur({ subsets: ['cyrillic'] })

export const metadata = {
  title: "Michail's developer portfolio",
  description: 'Hi i am Michail',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tektur.className}>
        <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(95859492, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
            }
        </Script>
        <YandexMetrika/>
        <div className="movie-bg"></div>
        {children}
      </body>
    </html>
  )
}
