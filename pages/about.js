import Navbar from '../components/Navbar'

function about() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black">
        <Navbar />
        <br />
        <main className="flex w-full flex-1 flex-col items-center  px-20 text-center">
        <h1 className="text-6xl font-bold text-white">
          About SolidityRocket
        </h1>

        <p className="mt-3 text-2xl text-white">
          This is a platform for developers to create and deploy smart contracts using a no-code service.
        </p>

        <ul className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <li className="mt-6 w-96 rounded-xl border p-6 text-left">
                <h3 className="text-2xl font-bold text-white">
                    Create Smart Contracts
                </h3>
                <p className="mt-4 text-xl text-white">
                    Create your own smart contracts and deploy them to any network.
                </p>
            </li>
            <li className="mt-6 w-96 rounded-xl border p-6 text-left">
                <h3 className="text-2xl font-bold text-white">
                    View Smart Contracts
                </h3>
                <p className="mt-4 text-xl text-white">
                    View the smart contracts that have been deployed to the platform.
                </p>
            </li>
        </ul>

        <br />
        <p className="mt-3 text-2xl text-white">
          No one likes writing Solidity contracts. Save your time by generating a smart contract for your project in less than 5 minutes.
        </p>

      </main>
      
    </div>
  )
}

export default about