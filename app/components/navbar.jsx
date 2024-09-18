// @flow strict
"use client"
import Link from "next/link";
import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const handleAboutClick = () => {
      const heart = `
         *     *  
       *   *  *   *
        *    *    *
         *      * 
           *  *   
             *
      
      `;
      const modifiedHeart = heart.replaceAll('*', '❤️')
      console.log(modifiedHeart);
      console.log("HIRE ME! <3");
      alert("I'm glad you're interested in hiring me! 😊")
    };

    const aboutLink = document.getElementById("about-link");
    if (aboutLink) {
      aboutLink.addEventListener("click", handleAboutClick);
    }

    return () => {
      if (aboutLink) {
        aboutLink.removeEventListener("click", handleAboutClick);
      }
    };
  }, []);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#0cd4f7] text-3xl font-bold">
            MlookScript
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a id="about-link" className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#blogs"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
