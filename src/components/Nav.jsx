import React from 'react';
import logo from '../assets/image 2.png';
import bgGlow from '../assets/Ellipse 5.png';
import { Link, useLocation } from 'react-router';
import { FiSearch, FiChevronDown } from "react-icons/fi"
import box from '../assets/bx_category.png'
import star from '../assets/Star 2.png'

const Nav = () => {

    const location = useLocation();
    const pathname = location.pathname;
    return (
        <div className="relative bg-[#071400] text-white p-4 overflow-hidden">
            {/* Background Glow */}
            <img
                src={bgGlow}
                alt="Glow Background"
                className="absolute top-0 left-0 w-[317px] h-[288px] z-0"
            />

            {/* Main Navbar */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-6 pt-6 gap-4  ">

                {/* Logo and Categories */}
                <div className="flex items-center gap-4 lg:gap-6 lg:ml-32">
                    <Link to={'/'} ><img src={logo} alt="Quantumedge Logo" className="h-10 relative z-10 " /></Link>
                    <div className='flex items-center  justify-center relative z-10 border border-green-500 rounded-full px-3 py-1  text-sm  hover:text-black transition whitespace-nowrap '>
                        <div><img src={box} alt="" /></div>
                        <button className=" text-[#05AF2B] text-shadow-md text-medium font-semibold">
                            Categories
                        </button>
                    </div>
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
                    <button className="bg-green-500 text-white px-4 py-1 rounded-full text-sm hover:bg-green-400 whitespace-nowrap">
                        <Link to={'/signup'}> Registration</Link>
                    </button>
                </div>
            </div>
            <div className="absolute top-[80px] left-[169px] w-[1400px] h-[2px]  bg-white/6 rounded-[8px] "></div>





            {/* Search Section */}
            {/* <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 px-4 lg:px-6 mt-4 lg:mt-10 lg:ml-32">
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
            </div> */}

            {pathname === "/" && (
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
                        <button className="bg-green-500 hover:bg-green-600 p-3 transition-colors rounded-full m-1.5">
                            <FiSearch className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    <button className="bg-green-500 text-white px-4 p-3.5 py-2 rounded-full text-sm font-semibold hover:bg-green-400">
                        Advanced search
                    </button>
                    <div>
                        <img className='ml-64' src={star} alt="" />
                    </div>
                </div>
            )}

        </div>

    );
};

export default Nav;