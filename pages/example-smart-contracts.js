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
        <h1 className="text-2xl font-bold text-white">There are 2 Smart Contracts utilized in this. One for the NFT (ERC721), and another for the Marketplace.</h1>
        <br/>
        <p className="text-white">For the NFT:</p>
        <CopyBlock
          text={`
          // SPDX-License-Identifier: MIT
          pragma solidity ^0.8.4;

          import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
          import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
          import "@openzeppelin/contracts/utils/Counters.sol";

          contract NFT is ERC721URIStorage {
              using Counters for Counters.Counter;
              Counters.Counter private _tokenIds;
              address contractAddress;

              constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
                  contractAddress = marketplaceAddress;
              }

              function createToken(string memory tokenURI) public returns (uint256) {
                  _tokenIds.increment();
                  uint256 newItemId = _tokenIds.current();

                  _mint(msg.sender, newItemId);
                  _setTokenURI(newItemId, tokenURI);
                  setApprovalForAll(contractAddress, true);
                  return newItemId;
              }
          }
          `}
          language="java"
          showLineNumbers={false}
          theme={zenburn}
        />
        <br/>
        <p className="text-white">For the Marketplace:</p>
        <CopyBlock
          text={`
          // SPDX-License-Identifier: MIT
          pragma solidity ^0.8.4;

          import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
          import "@openzeppelin/contracts/utils/Counters.sol";
          import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

          contract NFTMarket is ReentrancyGuard {
              using Counters for Counters.Counter;
              Counters.Counter private _itemIds;
              Counters.Counter private _itemsSold;

              address payable owner;
              uint256 listingPrice = 0.000001 ether;

              constructor() {
                  owner = payable(msg.sender);
              }

              struct MarketItem {
                  uint256 itemId;
                  address nftContract;
                  uint256 tokenId;
                  address payable seller;
                  address payable owner;
                  uint256 price;
                  bool sold;
              }

              mapping(uint256 => MarketItem) private idToMarketItem;

              event MarketItemCreated(
                  uint256 indexed itemId,
                  address indexed nftContract,
                  uint256 indexed tokenId,
                  address seller,
                  address owner,
                  uint256 price,
                  bool sold
              );

              function getListingPrice() public view returns (uint256) {
                  return listingPrice;
              }

              function createMarketItem(
                  address nftContract,
                  uint256 tokenId,
                  uint256 price
              ) public payable nonReentrant {
                  require(price > 0, "Price must be at least 1 wei");
                  require(
                      msg.value == listingPrice,
                      "Price must be equal to listing price"
                  );

                  _itemIds.increment();
                  uint256 itemId = _itemIds.current();

                  idToMarketItem[itemId] = MarketItem(
                      itemId,
                      nftContract,
                      tokenId,
                      payable(msg.sender),
                      payable(address(0)),
                      price,
                      false
                  );

                  IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

                  emit MarketItemCreated(
                      itemId,
                      nftContract,
                      tokenId,
                      msg.sender,
                      address(0),
                      price,
                      false
                  );
              }

              function createMarketSale(address nftContract, uint256 itemId)
                  public
                  payable
                  nonReentrant
              {
                  uint256 price = idToMarketItem[itemId].price;
                  uint256 tokenId = idToMarketItem[itemId].tokenId;
                  require(
                      msg.value == price,
                      "Please submit the asking price in order to complete the purchase"
                  );

                  idToMarketItem[itemId].seller.transfer(msg.value);
                  IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
                  idToMarketItem[itemId].owner = payable(msg.sender);
                  idToMarketItem[itemId].sold = true;
                  _itemsSold.increment();
                  payable(owner).transfer(listingPrice);
              }

              function fetchMarketItems() public view returns (MarketItem[] memory) {
                  uint256 itemCount = _itemIds.current();
                  uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
                  uint256 currentIndex = 0;

                  MarketItem[] memory items = new MarketItem[](unsoldItemCount);
                  for (uint256 i = 0; i < itemCount; i++) {
                      if (idToMarketItem[i + 1].owner == address(0)) {
                          uint256 currentId = idToMarketItem[i + 1].itemId;
                          MarketItem storage currentItem = idToMarketItem[currentId];
                          items[currentIndex] = currentItem;
                          currentIndex += 1;
                      }
                  }
                  return items;
              }

              function fetchMyNFTs() public view returns (MarketItem[] memory) {
                  uint256 totalItemCount = _itemIds.current();
                  uint256 itemCount = 0;
                  uint256 currentIndex = 0;

                  for (uint256 i = 0; i < totalItemCount; i++) {
                      if (idToMarketItem[i + 1].owner == msg.sender) {
                          itemCount += 1;
                      }
                  }

                  MarketItem[] memory items = new MarketItem[](itemCount);
                  for (uint256 i = 0; i < totalItemCount; i++) {
                      if (idToMarketItem[i + 1].owner == msg.sender) {
                          uint256 currentId = idToMarketItem[i + 1].itemId;
                          MarketItem storage currentItem = idToMarketItem[currentId];
                          items[currentIndex] = currentItem;
                          currentIndex += 1;
                      }
                  }
                  return items;
              }

              function fetchItemsCreated() public view returns (MarketItem[] memory) {
                  uint256 totalItemCount = _itemIds.current();
                  uint256 itemCount = 0;
                  uint256 currentIndex = 0;

                  for (uint256 i = 0; i < totalItemCount; i++) {
                      if (idToMarketItem[i + 1].seller == msg.sender) {
                          itemCount += 1;
                      }
                  }

                  MarketItem[] memory items = new MarketItem[](itemCount);
                  for (uint256 i = 0; i < totalItemCount; i++) {
                      if (idToMarketItem[i + 1].seller == msg.sender) {
                          uint256 currentId = idToMarketItem[i + 1].itemId;
                          MarketItem storage currentItem = idToMarketItem[currentId];
                          items[currentIndex] = currentItem;
                          currentIndex += 1;
                      }
                  }
                  return items;
              }
          }
          `}
          language="java"
          showLineNumbers={false}
          theme={zenburn}
        />


				
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