import React from "react";
import { FiGlobe, FiMail } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 py-16 flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex justify-between text-xs tracking-[0.3em] text-gray-500">
        <span>ABDELGHANI BENSALEH</span>
        <span>PORTFOLIO</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 mt-10">
        {/* LEFT */}
        <div className="flex-1 max-w-xl">
          {/* Title */}
          <h2 className="text-[clamp(3rem,7vw,5rem)] font-light leading-tight mb-12">
            <span className="text-[#C8A96A]">Get in</span> <br />
            <span className="text-white">Touch</span>
          </h2>

          {/* Contact List */}
          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                <FiMail size={16} style={{ color: "#C8A96A" }} />
              </span>
              <a
                href="mailto:abdelghanibensalih@email.com"
                className="hover:text-white underline"
              >
                abdelghanibensalih@email.com
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                <FaLinkedin size={16} style={{ color: "#0A66C2" }} />
              </span>
              <a
                href="https://linkedin.com/in/a-bensalih"
                className="hover:text-white underline"
              >
                linkedin.com/in/a-bensalih
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                <FaInstagram size={16} style={{ color: "#E1306C" }} />
              </span>
              <a
                href="https://instagram.com/rouni.dev"
                className="hover:text-white underline"
              >
                instagram.com/rouni.dev
              </a>
            </div>

            

            <div className="flex items-center gap-4">
              <span className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                <FaTwitter size={16} style={{ color: "#1DA1F2" }} />
              </span>
              <a
                href="https://x.com/a_bensalih"
                className="hover:text-white underline"
              >
                https://x.com/a_bensalih
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/images/contact/image.png"
            alt="workspace"
            className="w-full max-w-md h-[500px] object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
