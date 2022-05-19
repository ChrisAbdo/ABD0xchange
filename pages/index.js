import  { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Head>
        <title>SolidityRocket🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-white">
          Welcome to SolidityRocket🚀
        </h1>

        <p className="mt-3 text-2xl text-white">
          Get started by learning about the platform.
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/about"
            className="mt-6 w-96 rounded-xl border p-6 text-left"
          >
            <h3 className="text-2xl font-bold text-white">About &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              Learn about SolidityRocket and the platforms goals.
            </p>
          </a>

          <a
            href="/example-smart-contracts"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white"
          >
            <h3 className="text-2xl font-bold text-white">Example Smart Contracts &rarr;</h3>
            <p className="mt-4 text-xl">
              View our collection of Solidity Smart Contracts to see if you like them.
            </p>
          </a>

          <a
            href="/generate-contract"
            className="mt-6 w-96 rounded-xl border p-6 text-left"
          >
            <h3 className="text-2xl font-bold text-white">Generate Contract &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              Create your own Smart Contract catered to your project.
            </p>
          </a>

          <a
            href="/questions"
            className="mt-6 w-96 rounded-xl border p-6 text-left text-white"
          >
            <h3 className="text-2xl font-bold text-white">Questions? &rarr;</h3>
            <p className="mt-4 text-xl">
              View this tab to solve any problems or find more information.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2 text-white"
          href="/"
        >
          SolidityRocket🚀
        </a>
      </footer>
    </div>
  )
}

export default Home
