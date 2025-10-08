import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        

    <footer className="footer p-10 bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-500 text-white">
        <div className="sm:flex sm:justify-between w-full">
            {/* Services */}
            <nav className="mb-6 sm:mb-0">
                <h6 className="footer-title text-lg font-bold mb-4">Services</h6>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Branding</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Design</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Marketing</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Advertisement</a>
            </nav>

            {/* Company */}
            <nav className="mb-6 sm:mb-0">
                <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">About us</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Contact</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Jobs</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Press kit</a>
            </nav>

            {/* Legal */}
            <nav className="mb-6 sm:mb-0">
                <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Terms of use</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Privacy policy</a>
                <a className="link link-hover block mb-2 hover:text-yellow-300 transition-colors">Cookie policy</a>
            </nav>

            {/* Social Links */}
            <div className="mb-6 sm:mb-0">
                <h6 className="footer-title text-lg font-bold mb-4">Follow Us</h6>
                <div className="flex gap-4 text-xl">
                    <a href="#" className="hover:text-yellow-300 transition-colors"><FaFacebookF /></a>
                    <a href="#" className="hover:text-yellow-300 transition-colors"><FaTwitter /></a>
                    <a href="#" className="hover:text-yellow-300 transition-colors"><FaInstagram /></a>
                    <a href="https://github.com/emon35410" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><FaGithub /></a>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center border-t border-white/20 pt-6 text-sm text-white/70">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
    </footer>

    );
};

export default Footer;