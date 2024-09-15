import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[90%] flex flex-col justify-between mt-28 mx-auto">
      {/* Newsletter Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8">
        <div className="flex flex-col justify-center items-center lg:items-start gap-2">
          <h1 className="lg:hedertext text-2xl text-black font-bold">
            DoWell Newsletter
          </h1>
          <div className="flex flex-col justify-center items-center lg:items-start mt-5 border-l-2 border-slate-400 pl-3">
            <p className="text-slate-600 fotn-semibold">+1 (2345) 678-90-12</p>
            <a href="mailto:dwelsupport@gamil.com" className="text-slate-600">
              dwelsupport@gamil.com
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col justify-center items-center lg:items-end gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-2 border-slate-400 rounded-md p-2 w-80"
            />
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-10 border-slate-400" />

      {/* Useful Links and Social Media Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 py-10">
        {/* Useful Links */}
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black text-4xl hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-black text-4xl hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-black text-4xl hover:text-pink-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* License Section */}
      <hr className="my-4 border-gray-700" />
      <div className="text-center text-gray-400 text-sm">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        <p>
          Licensed under{" "}
          <a href="#" className="text-gray-300 hover:underline">
            MIT License
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
