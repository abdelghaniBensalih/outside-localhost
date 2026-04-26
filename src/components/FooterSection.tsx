import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-4 px-4 md:px-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-700">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Abdelghani</h3>
          <p className="text-gray-400">
            Building bridges between development localhost and community outside
            localhost.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-[#C8A96A]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className="text-gray-400 hover:text-white transition"
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                href="#workshops"
                className="text-gray-400 hover:text-white transition"
              >
                Workshops
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#C8A96A]">Connect</h4>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/a_bensalih"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-[#1DA1F2] rounded-full transition"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com/in/a-bensalih"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-[#0A66C2] rounded-full transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://instagram.com/rouni.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-[#E1306C] rounded-full transition"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://github.com/abdelghaniBensalih"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-white hover:text-black rounded-full transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {currentYear} Abdelghani Bensaleh. All rights reserved.</p>
      </div>
    </footer>
  );
}
