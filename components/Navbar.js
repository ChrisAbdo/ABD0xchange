import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex w-full items-center justify-between border-b bg-black px-4 py-2">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="cursor-pointer text-4xl font-bold text-white">
            ABD0xchange🚀
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <ConnectButton />
      </div>
    </div>
  )
}

export default Navbar
