
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="font-semibold text-lg mb-4">PANAKJESTATE</h3>
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#press" className="hover:underline">Press</a>
              </li>
              <li className="mb-2">
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#help" className="hover:underline">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="hover:underline">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#returns" className="hover:underline">Returns</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#facebook" className="hover:text-blue-500">Facebook</a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-blue-400">Twitter</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-pink-500">Instagram</a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-blue-700">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <form>
              <div className="flex items-center border-b border-gray-500 py-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-5 mt-5 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pankaj Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
