import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default function about() {
    return (
        <div>
            <Head>
                <Header/>
            </Head>
            <h1>About</h1>
        </div>
    )
}
