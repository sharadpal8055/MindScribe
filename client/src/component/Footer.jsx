import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <img
            src='logo.png'
            alt="MindScribe"
            className="h-12 w-auto"
          />

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
            MindScribe is an AI-powered blogging platform that helps creators
            write, discover, and share high-quality content with intelligent
            writing assistance.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="/" className="transition hover:text-black">
            Home
          </a>

          <a href="#" className="transition hover:text-black">
            Blogs
          </a>

          <a href="#" className="transition hover:text-black">
            About
          </a>

          <a href="#" className="transition hover:text-black">
            Contact
          </a>
          <a href="https://sharadpal-portfolio-eta.vercel.app/" className="transition hover:text-black">
            Developer
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} MindScribe. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-black">
              Privacy
            </a>

            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;