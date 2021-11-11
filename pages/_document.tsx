import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'
import { isDev } from 'lib/config'

const basePath = isDev ? '' : '/me'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href={`${basePath}/favicon.png`} />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href={`${basePath}/apple-touch-icon.png`}
            />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href={`${basePath}/favicon-96x96.png`}
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href={`${basePath}/favicon-32x32.png`}
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href={`${basePath}/favicon-16x16.png`}
            />

            <link rel='manifest' href={`${basePath}/manifest.json`} />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
