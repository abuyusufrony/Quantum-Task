import React, { useState } from "react";
import {
    FaEye,
    FaEyeSlash,
    FaFacebookF,
    FaApple,
    FaXTwitter,
    FaEnvelope,
    FaLock,

} from "react-icons/fa6";
import hero from "../assets/hero.jpeg";
import { Link } from "react-router";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl flex bg-black relative">
                {/* Close Button */}
                <button className="absolute top-4 right-4 bg-green-700 hover:bg-green-600 text-white rounded-full p-2 z-20">

                </button>

                {/* Left Side */}
                <div className="w-1/2 flex flex-col justify-center items-center px-10 py-12 bg-gradient-to-br from-black to-green-900 text-white">
                    <div className="w-full max-w-md z-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">Open your account</h2>
                            <p className="text-green-300 text-sm">
                                Already have an account?{" "}
                                <Link to={'/signin'} className="underline text-green-400 hover:text-green-300">
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5">
                            {/* Email */}
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full py-3 pl-12 pr-4 bg-transparent border border-green-500 rounded-full text-white placeholder-green-400 focus:outline-none focus:border-green-300"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full py-3 pl-12 pr-12 bg-transparent border border-green-500 rounded-full text-white placeholder-green-400 focus:outline-none focus:border-green-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full py-3 pl-12 pr-12 bg-transparent border border-green-500 rounded-full text-white placeholder-green-400 focus:outline-none focus:border-green-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 rounded-full transition"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center justify-center">
                            <div className="flex-1 h-px bg-green-600" />
                            <span className="px-4 text-green-300 text-sm">or</span>
                            <div className="flex-1 h-px bg-green-600" />
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-4">
                            <button className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full">
                                <FaFacebookF className="text-white" />
                            </button>
                            <button className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full">
                                <FaApple className="text-white" />
                            </button>
                            <button className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full">
                                <FaXTwitter className="text-white" />
                            </button>
                        </div>

                        {/* Terms */}
                        <p className="mt-6 text-green-300 text-xs text-center leading-relaxed">
                            By joining, you agree to the Fiverr{" "}
                            <a href="#" className="underline text-green-400 hover:text-green-300">
                                Terms of Service
                            </a>{" "}
                            and to occasionally receive emails from us. Please read our{" "}
                            <a href="#" className="underline text-green-400 hover:text-green-300">
                                Privacy Policy
                            </a>{" "}
                            to learn how we use your personal data.
                        </p>
                    </div>
                </div>

                {/* Right Side - Hero Image */}
                <div className="w-1/2 relative">
                    <img
                        src={hero}
                        alt="Team working together"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
