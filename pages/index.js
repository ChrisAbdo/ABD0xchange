import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import '../styles/index.module.css'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Head>
        <title>ABD0xchange🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2 text-white"
          href="/"
        >
          ABD0xchange🚀
        </a>
      </footer>
    </div>
  )
}

export default Home
