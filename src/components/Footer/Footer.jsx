import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-50">
      <div className="w-full max-w-10/12 mx-auto pt-16 flex flex-col gap-10">
        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {/* About */}
          <div className="col-span-2 flex flex-col gap-2 ">
            {/* Footer brand */}
            <a className="text-3xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DigiTools
            </a>
            <p className="text-gray-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-col">
            <li className="text-xl font-semibold">
              <a href="#" className="hover:underline">
                Product
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Templates
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Integrations
              </a>
            </li>
          </ul>

          {/* Links */}
          <ul className="flex flex-col">
            <li className="text-xl font-semibold">
              <a href="3" className="hover:underline">
                Company
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
          </ul>

          {/* Links */}
          <ul className="flex flex-col">
            <li className="text-xl font-semibold">
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Documentation
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
            <li className="text-gray-300">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          {/* Social links */}
          <div className="flex flex-col gap-2 ">
            <h1 className="text-xl font-semibold">Social Links</h1>

            <ul className="flex gap-2">
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between  items-center gap-4 text-sm text-gray-400 border-t border-gray-700 py-6">
          <p>© 2026 Digitools. All rights reserved.</p>

          <ul className="flex gap-4">
            <li>
              <a href="#" className="underline hover:text-gray-100">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="underline hover:text-gray-100">
                Terms of Service
              </a>
            </li>

            <li>
              <a href="#" className="underline hover:text-gray-100">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
