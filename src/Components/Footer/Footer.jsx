import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import QrCode from './../../../public/images/QrCode.png';
import playStore from './../../../public/images/GooglePlay.png';
import Appstore from './../../../public/images/AppStore.png';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h2 className="font-bold text-lg">Exclusive</h2>
          <p className="mt-2">Subscribe</p>
          <p className="text-sm text-gray-400">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 mt-2 p-2 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400"
            />
            <button className="text-white">➝</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-lg">Support</h2>
          <p className="mt-2 text-sm text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm text-gray-400">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="font-bold text-lg">Account</h2>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-lg">Quick Link</h2>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="font-bold text-lg">Download App</h2>
          <p className="mt-2 text-sm text-gray-400">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-2 mt-2">
            <img src={QrCode} alt="QR Code" className="w-14" />
            <div className="flex flex-col space-y-1">
              <img src={playStore} alt="Google Play" className="w-24" />
              <img src={Appstore} alt="App Store" className="w-24" />
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-400">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        &copy; Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
