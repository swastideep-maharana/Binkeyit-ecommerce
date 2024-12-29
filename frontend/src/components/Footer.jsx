import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="container mx-auto p-4 flex flex-col lg:flex-row lg:justify-between items-center gap-2">
        <p className="text-center">© All Rights Reserved 2025</p>
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="https://www.instagram.com/swastideep__/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-100"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/swastideep_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-100"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/swastideep-maharana-090158280/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
