import React from 'react';

const Footer = () => {
  return (
    <footer className='c-space py-7 border-t border-gray-700 flex justify-between items-center flex-wrap gap-5'>
      {/* Terms & Privacy */}
      <div className="text-gray-400 flex gap-3 text-sm">
        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        <span>|</span>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon group">
          <img
            src="/assets/github.svg"
            alt="github"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon group">
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon group">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className='text-gray-400 text-sm'>
        &copy; 2024 Maarij. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
