import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  let location = useLocation();
  const [hide, setHide] = useState(false);
  return (

    <nav className="bg-transparent z-10 fixed w-full border-gray-200  dark:bg-gray-900">
      <div className=" flex flex-wrap items-start justify-between p-4">
        <Link to="#" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="HackTheSpace Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HackTheSpace</span>
          <div className="">
          
          </div>
        </Link>
        <button data-collapse-toggle="navbar-default" onClick={()=>setHide(!hide)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`${hide?"":"hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="#About" className={`block py-2 pl-3 pr-4 text-white ${location.hash === "#About" ? "active" : ""} md:border-0 md:hover:text-blue-700`}>About</Link>
            </li>
            <li>
              <Link to="#Tracks" className={`block py-2 pl-3 pr-4 text-white ${location.hash === "#Tracks" ? "active" : ""} md:border-0 md:hover:text-blue-700`}>Tracks</Link>
            </li>
            <li>
              <Link to="#Prizes" className={`block py-2 pl-3 pr-4 text-white ${location.hash === "#Prizes" ? "active" : ""} md:border-0 md:hover:text-blue-700`}>Prizes</Link>
            </li>
            <li>
              <Link to="#Speakers" className={`block py-2 pl-3 pr-4 text-white ${location.hash === "#Speakers" ? "active" : ""} md:border-0 md:hover:text-blue-700`}>Speakers</Link>
            </li>
            <li>
              <Link to="#FAQs" className={`block py-2 pl-3 pr-4 text-white ${location.hash === "#FAQs" ? "active" : ""} md:border-0 md:hover:text-blue-700`}>FAQs</Link>
            </li>
          </ul>

        </div>
        <div className="MLH MLH2">
        <Link id="mlh-trust-badge" to="https://mlh.io/apac?utm_source=apac-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2023-season&amp;utm_content=white" target="_blank">
          <img id="img--mlh" style={{ height: "150px" }} src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" />
        </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
