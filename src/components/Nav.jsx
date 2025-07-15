import React from 'react';
import logo from '../assets/image 2.png';
import bgGlow from '../assets/Ellipse 5.png';
import { Link } from 'react-router';

const Nav = () => {
    return (
        <div className="relative bg-[#071400] text-white h-[236px] overflow-hidden">
            {/* Background Glow */}
            <img
                src={bgGlow}
                alt="Glow Background"
                className="absolute top-0 left-0 w-[317px] h-[288px] z-0"
            />

            {/* Main Navbar */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-6 pt-6 gap-4 ">

                {/* Logo and Categories */}
                <div className="flex items-center gap-4 lg:gap-6 lg:ml-32">
                    <img src={logo} alt="Quantumedge Logo" className="h-10 relative z-10" />
                    <button className="border border-green-500 text-green-500 px-3 py-1 rounded-full text-sm hover:bg-green-500 hover:text-black transition whitespace-nowrap">
                        📁 Categories
                    </button>
                </div>

                {/* Dropdown */}
                <div className="w-full lg:w-auto">
                    <select className="bg-[#1a1f16] text-white px-3 py-1 rounded-md text-sm w-full lg:w-auto focus:outline-none">
                        <option>Freelancer</option>
                        <option>Agency</option>
                    </select>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-green-500 text-sm font-medium hover:underline">
                        BECAME A SELLER
                    </a>
                    <Link to={'/signin'} className="text-sm hover:underline">LOGIN</Link>
                    <button className="bg-green-500 text-black px-4 py-1 rounded-full text-sm hover:bg-green-400 whitespace-nowrap">
                        <Link to={'/signup'}> Registration</Link>
                    </button>
                </div>
            </div>
            <div className="absolute top-[80px] left-[150px] w-[1400px] h-[2px]  bg-white/6 rounded-[8px]"></div>





            {/* Search Section */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 px-4 lg:px-6 mt-4 lg:mt-10 lg:ml-32">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#1a1f16] rounded-md overflow-hidden w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search your needs"
                        className="bg-transparent px-4 py-2 text-sm text-white outline-none placeholder-gray-400 w-full sm:w-60"
                    />
                    <select className="bg-transparent text-white text-sm px-4 py-2 focus:outline-none border-t sm:border-t-0 sm:border-l border-gray-700">
                        <option>Web Developer</option>
                        <option>Graphic Designer</option>
                    </select>
                    <button className="bg-green-600 px-4 py-2 hover:bg-green-500">
                        🔍
                    </button>
                </div>

                <button className="bg-green-500 text-black px-4 py-2 rounded-full text-sm hover:bg-green-400">
                    Advanced search
                </button>
            </div>
        </div>

    );
};

export default Nav;