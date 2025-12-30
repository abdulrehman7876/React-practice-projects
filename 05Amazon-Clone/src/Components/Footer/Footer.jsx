export const Footer = () => {
  return (
    <>
      <footer className="w-full ">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="w-full bg-[#38475a] p-[15px_0] block text-center text-xs font-semibold text-white cursor-pointer hover:bg-[#4e617a]"
        >
          Back to top
        </button>
        <div className="grid grid-cols-[repeat(2,max-content)] sm:grid-cols-[repeat(2,max-content)] lg:grid-cols-[repeat(4,max-content)] p-[30px_0] text-sm w-full bg-[#222f3d] text-white justify-center gap-10 sm:gap-30">
          <div className="flex flex-col gap-2">
            <span className="text-white text-lg font-bold">Get to Know Us</span>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Devices</a>
            <a>Amazon Science</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white text-sm font-bold">
              Make Money with Us
            </span>
            <a>Sell products on Amazon</a>
            <a>Sell on Amazon Business</a>
            <a>Sell apps on Amazon</a>
            <a>Become an Affiliate</a>
            <a>Advertise Your Products</a>
            <a>Self-Publish with Us</a>
            <a>Host an Amazon Hub</a>
            <a>
              ›See More Make Money <br />
              with Us
            </a>
          </div>
          <div className="sm:flex flex-col gap-2 hidden">
            <span className="text-white text-sm font-bold">
              Amazon Payment Products
            </span>
            <a>Amazon Business Card</a>
            <a>Shop with Points</a>
            <a>Reload Your Balance</a>
            <a>Amazon Currency Converter</a>
          </div>
          <div className="sm:flex flex-col gap-2 hidden">
            <span className="text-white text-sm font-bold">
              Let Us Help You
            </span>
            <a>
              Amazon and COVID-
              <br />
              19
            </a>
            <a>Your Account</a>
            <a>Your Orders</a>
            <a>
              Shipping Rates &<br />
              Policies
            </a>
            <a>
              Returns &<br />
              Replacements
            </a>
            <a>
              Manage Your
              <br />
              Content and Devicess
            </a>
            <a>Help</a>
          </div>
        </div>
        <div className="hidden h-25 bg-[#222f3d] border-t-[0.1px] border-gray-600 sm:flex items-center justify-center gap-2">
          <a href="" className="mr-20">
            <img className="h-15" src="/amazon_logo.png" alt="" />
          </a>
          <select
            name=""
            id=""
            className="p-[6px_50px_8px_10px] border-gray-500 border-1 rounded text-white text-sm"
          >
            <option value="">English</option>
          </select>
          <div className="p-[6px_50px_8px_10px] border-gray-500 border-1 rounded text-white text-sm">
            $ USD - U.S.Dollar
          </div>
          <div className="p-[6px_50px_8px_10px] border-gray-500 border-1 rounded text-white text-sm">
            United States
          </div>
        </div>
        <div className="hidden sm:flex justify-center w-full bg-[#131a22] text-gray-400 text-xs p-10">
          <ul className="grid grid-cols-[repeat(5,122px)] auto-rows-auto lg:grid-cols-[repeat(7,122px)] lg:grid-rows-[repeat(4,67px)] justify-center gap-x-5">
            <li>
              <h5 className="text-white ">Amazon Music</h5>
              <span>
                Stream millions
                <br /> of songs
              </span>
            </li>
            <li>
              <h5 className="text-white ">Amazon Ads</h5>
              <span>Reach customers wherever they spend their time</span>
            </li>
            <li>
              <h5 className="text-white ">6pm</h5>
              <span>Score deals on fashion brands</span>
            </li>
            <li>
              <h5 className="text-white ">AbeBooks</h5>
              <span>Books, art & collectibles</span>
            </li>
            <li>
              <h5 className="text-white ">ACX</h5>
              <span>Audiobook Publishing Made Easy</span>
            </li>
            <li>
              <h5 className="text-white ">Sell on Amazon</h5>
              <span>Start a Selling Account</span>
            </li>
            <li>
              <h5 className="text-white ">Veeqo</h5>
              <span>Shipping Software Inventory Management</span>
            </li>
            <li>
              <h5 className="text-white ">Amazon Business</h5>
              <span>Everything For Your Business</span>
            </li>
            <li>
              <h5 className="text-white ">AmazonGlobal</h5>
              <span>Ship Orders Internationally</span>
            </li>
            <li>
              <h5 className="text-white ">Amazon Web Services</h5>
              <span>Scalable Cloud Computing Services</span>
            </li>
            <li>
              <h5 className="text-white ">Audible</h5>
              <span>Listen to Books & Original Audio Performances</span>
            </li>
            <li>
              <h5 className="text-white ">Box Office Mojo</h5>
              <span>Find Movie Box Office Data</span>
            </li>
            <li>
              <h5 className="text-white ">Goodreads</h5>
              <span>Book reviews & recommendations</span>
            </li>
            <li>
              <h5 className="text-white ">IMDb</h5>
              <span>Movies, TV & Celebrities</span>
            </li>
            <li>
              <h5 className="text-white ">IMDbPro</h5>
              <span>Get Info Entertainment Professionals Need</span>
            </li>
            <li>
              <h5 className="text-white ">Kindle Direct Publishing</h5>
              <span>Indie Digital & Print Publishing Made Easy</span>
            </li>
            <li>
              <h5 className="text-white ">Prime Video Direct</h5>
              <span>Video Distribution Made Easy</span>
            </li>
            <li>
              <h5 className="text-white ">Shopbop</h5>
              <span>Designer Fashion Brands</span>
            </li>
            <li>
              <h5 className="text-white ">Woot!</h5>
              <span>Deals and Shenanigans</span>
            </li>
            <li>
              <h5 className="text-white ">Zappos</h5>
              <span>Shoes & Clothing</span>
            </li>
            <li>
              <h5 className="text-white ">Ring</h5>
              <span>Smart Home Security Systems</span>
            </li>
            <li></li>
            <li>
              <h5 className="text-white ">eero WiFi</h5>
              <span>Stream 4K Video in Every Room</span>
            </li>
            <li>
              <h5 className="text-white ">Blink</h5>
              <span>Smart Security for Every Home</span>
            </li>
            <li>
              <h5 className="text-white ">Neighbors App</h5>
              <span>Real-Time Crime & Safety Alerts</span>
            </li>
            <li>
              <h5 className="text-white ">Amazon Subscription Boxes</h5>
              <span>Top subscription boxes – right to your door</span>
            </li>
            <li>
              <h5 className="text-white ">PillPack</h5>
              <span>Pharmacy Simplified</span>
            </li>
            <li></li>
          </ul>
        </div>
      </footer>
    </>
  );
};
