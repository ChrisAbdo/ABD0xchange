import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex w-full justify-between items-center px-4 py-2 bg-black">
        <div className="flex items-center">
            <Link href="/">
                <h1 className="text-4xl text-white cursor-pointer font-bold">SolidityRocket🚀</h1>
            </Link>
        </div>
        <div className="flex items-center">
            <ConnectButton />
        </div>
    </div>
  )
}

export default Navbar