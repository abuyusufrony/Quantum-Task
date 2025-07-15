import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <h2>this page are show footer </h2>


            <div className="bg-[#0a1a0a] text-white">
                {/* Main content section */}
                <div className="px-8 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            {/* Left side - Heading */}
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                    Reach Your Requirement Goals Right on Schedule
                                </h1>
                            </div>

                            {/* Right side - Description and button */}
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with
                                    clients to get hired.
                                </p>
                                <div>
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer links section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {/* Logo */}
                            <div className="lg:col-span-1">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">QUANTUMEDGE</div>
                                        <div className="text-white font-bold text-lg">SOFTWARE</div>
                                    </div>
                                    <div className="w-8 h-4 bg-green-500"></div>
                                </div>
                            </div>

                            {/* About */}
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-6">About</h3>
                                <ul className="space-y-4">
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become Seller</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ProProJobs</a></li>
                                </ul>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-6">Categories</h3>
                                <ul className="space-y-4">
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Design & Creative</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Development & IT</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Music & Audio</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Programming & Tech</a></li>
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
                                <ul className="space-y-4">
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help & Support</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Services</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Popular Posts Section */}
                        <div className="mb-12">
                            <h3 className="text-white font-semibold text-lg mb-6">Our Popular Post</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Post 1 */}
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                        <img
                                            src="/placeholder.svg?height=64&width=64"
                                            alt="Handshake"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">November 7, 2024</p>
                                        <h4 className="text-white font-medium leading-tight">Unveils the Best Canadian Cities for Biking</h4>
                                    </div>
                                </div>

                                {/* Post 2 */}
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                        <img
                                            src="/placeholder.svg?height=64&width=64"
                                            alt="Handshake"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">November 7, 2024</p>
                                        <h4 className="text-white font-medium leading-tight">Unveils the Best Canadian Cities for Biking</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social icons and copyright */}
                        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
                            <div className="flex gap-4 mb-4 md:mb-0">
                                <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                                    <FaFacebookF className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                    <FaInstagram className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                    <FaTwitter className="w-5 h-5 text-white" />
                                </a>
                            </div>

                            <p className="text-gray-400 text-sm">© QuantumEdge Software INC. 2025. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;