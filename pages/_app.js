import React from 'react'
import App from 'next/app'
import Head from 'next/head'


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>

                <Head>
                    <title>Agalios</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Component {...pageProps} />

                <style global jsx>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        position: relative;
                        height: 100vh;
                        width: 100vw;
                        background: #141e30  ; /* fallback for old browsers */
                        background: linear-gradient(to bottom, #141e30  , #243b55);
                        color: #fff;
                    }
            
                    * {
                        box-sizing: border-box;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default MyApp;