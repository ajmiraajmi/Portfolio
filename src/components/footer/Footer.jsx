import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (

        <footer className="bg-black text-white py-12 border-t border-t-emerald-700">
    
          <div className="container mx-auto flex justify-between items-center">
            <div className="footer-left ml-72 text-xl">
            <h3 className="text-xl font-semibold" >Ajmira Khatun</h3>
              <p>Email: <a href="" className="text-blue-400 hover:underline">azmira.aktar16@gmail.com</a></p>
              <p>Phone: <a href="" className="text-blue-400 hover:underline">+880 01842637700</a></p>
            </div>
    
  
            <div className="footer-right flex space-x-6 mr-60">
              <Link to="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF className="text-2xl" />
              </Link>
              <Link to="https://github.com/ajmiraajmi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaGithub className="text-2xl" />
              </Link>
              <Link to="https://www.linkedin.com/in/azmira-khatun-9241302a3/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <FaLinkedinIn className="text-2xl" />
              </Link>
            </div>
          </div>
         
        </footer>
       
  )
}

export default Footer