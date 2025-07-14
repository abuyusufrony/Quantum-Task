
import './App.css'

function App() {


  return (
    <>
      <div><h2 className='text-2xl' >Failure is the piller of the success </h2></div>

      <div className='flex text-white'>

        <div className="w-1/4 bg-[#05AF2B] p-10">
          <img src="path-to-your-logo.png" alt="QuantumEdge Software Logo" className="h-10 mb-8" />
        </div>

        {/* Right side with dark background */}
        <div className="w-3/4 bg-green-900 p-10">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl mb-4">Reach Your Requirement Goals Right on Schedule</h3>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>

            <div className="flex justify-around mb-8">
              <div>
                <h4 className="text-lg mb-4">About</h4>
                <ul>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">Become Seller</a></li>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">ProProJobs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg mb-4">Categories</h4>
                <ul>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">Design & Creative</a></li>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">Development & IT</a></li>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">Music & Audio</a></li>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">Programming & Tech</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg mb-4">Support</h4>
                <ul>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">Help & Support</a></li>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">FAQ</a></li>
                  <li className="mb-2"><a href="#" className="text-green-200 hover:text-white">Contact Us</a></li>
                  <li className="mb-2 "><a href="#" className="text-green-200 hover:text-white">Terms & Services</a></li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <h4 className="text-lg mb-4">Our Popular Post</h4>
              <div className="flex justify-center space-x-4">
                <div>
                  <img src="path-to-your-image1.jpg" alt="Post 1" className="h-20" />
                  <p>November 7, 2024</p>
                  <p>Unveils the Best Canadian Cities for Biking</p>
                </div>
                <div>
                  <img src="path-to-your-image2.jpg" alt="Post 2" className="h-20" />
                  <p>November 7, 2024</p>
                  <p>Unveils the Best Canadian Cities for Biking</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            </div>

            <div className="text-center">
              <p>© QuantumEdge Software INC, 2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
