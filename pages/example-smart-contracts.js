import Navbar from '../components/Navbar'
import { CopyBlock, zenburn} from "react-code-blocks";


function exampleContracts() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <br />
        <main className="flex w-full flex-1 flex-col   px-20 ">
        <h1 className="text-6xl font-bold text-white">
          Example Smart Contracts
        </h1>

        <p className="mt-3 text-2xl text-white">
          View some examples of our Smart Contracts below.
        </p>

        <br />

        <div class="max-w-6xl mx-auto bg-black p-16 rounded">

	<div id="accordion-collapse" data-accordion="collapse">
		<h2 id="accordion-collapse-heading-1">
			<button type="button" class="flex  focus:ring-4 focus:ring-gray-200 dark:focus:ring-dark-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Hello World</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
		</h2>
		<div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
			<div class="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
      <h1 className="text-2xl font-bold text-white">Hello World Example Smart Contract</h1>
      <CopyBlock
        text={`
        // SPDX-License-Identifier: MIT
        // compiler version must be greater than or equal to 0.8.13 and less than 0.9.0
        pragma solidity ^0.8.13;

        contract HelloWorld {
            string public greet = "Hello World!";
        }
        `}
        language="java"
        showLineNumbers={false}
        theme={zenburn}
      />
        


			
			</div>
		</div>
		<h2 id="accordion-collapse-heading-2">
			<button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>ERC20 Token</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
		</h2>
		<div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
			<div class="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
        <h1 className="text-2xl font-bold text-white">ERC20 Token Example Smart Contract</h1>
        <CopyBlock
          text={`
          // SPDX-License-Identifier: MIT
          pragma solidity ^0.8.13;

          import "./IERC20.sol";

          contract ERC20 is IERC20 {
              uint public totalSupply;
              mapping(address => uint) public balanceOf;
              mapping(address => mapping(address => uint)) public allowance;
              string public name = "SolidityRocket";
              string public symbol = "SOLROCK";
              uint8 public decimals = 18;

              function transfer(address recipient, uint amount) external returns (bool) {
                  balanceOf[msg.sender] -= amount;
                  balanceOf[recipient] += amount;
                  emit Transfer(msg.sender, recipient, amount);
                  return true;
              }

              function approve(address spender, uint amount) external returns (bool) {
                  allowance[msg.sender][spender] = amount;
                  emit Approval(msg.sender, spender, amount);
                  return true;
              }

              function transferFrom(
                  address sender,
                  address recipient,
                  uint amount
              ) external returns (bool) {
                  allowance[sender][msg.sender] -= amount;
                  balanceOf[sender] -= amount;
                  balanceOf[recipient] += amount;
                  emit Transfer(sender, recipient, amount);
                  return true;
              }

              function mint(uint amount) external {
                  balanceOf[msg.sender] += amount;
                  totalSupply += amount;
                  emit Transfer(address(0), msg.sender, amount);
              }

              function burn(uint amount) external {
                  balanceOf[msg.sender] -= amount;
                  totalSupply -= amount;
                  emit Transfer(msg.sender, address(0), amount);
              }
          }
          `}
          language="java"
          showLineNumbers={false}
          theme={zenburn}
        />
			</div>
		</div>
		<h2 id="accordion-collapse-heading-3">
			<button type="button" class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Creating your own ERC721 Token on Polygon Chain</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
		</h2>
		<div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
			<div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
        <h1 className="text-2xl font-bold text-white">What are the differences between Flowbite and Tailwind UI?</h1>
				
			</div>
		</div>
	</div>

	<p class="mt-5 text-white">This accordion component is part of a larger, open-source library of Tailwind CSS components. Learn
		more
		by going to the official <a class="text-blue-600 hover:underline"
			href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
	</p>
	<script src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"></script>
</div>
          


      </main>
      
    </div>
  )
}

export default exampleContracts