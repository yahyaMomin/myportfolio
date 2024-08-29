import { useState } from "react";
import Theme from "./Theme";
import { MdClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [position, setPosition] = useState("show");

   const toggle = () => {
      setMobileMenu(!mobileMenu);
   };

   window.addEventListener("scroll", () => {
      setLastScrollY(window.scrollY);
      if (lastScrollY < window.scrollY) {
         setPosition("hide");
      } else {
         setPosition("show");
      }
   });

   return (
      <>
         <div
            className={`  navbar ${position} bg-lightBg dark:bg-darkGray flex justify-between items-center py-3  border-b-2 dark:border-gray-700  fixed w-full z-30  px-8 `}
         >
            <div className=" text-base font-semibold  select-none relative outline-none  cursor-pointer ">
               YAHYA.DEV
            </div>
            <div className=" mr-5  ml-auto cursor-pointer">{<Theme />}</div>

            <ul className="links hidden md:flex  font-semibold">
               <li className="px-3 cursor-pointer">
                  <a href="#home">Home</a>
               </li>
               <li className="px-3 cursor-pointer">
                  <a href="#about">About</a>
               </li>
               <li className="px-3 cursor-pointer">
                  <a href="#projects">Projects</a>
               </li>
               <li className="px-3 cursor-pointer">
                  <a href="#contact">Contact</a>
               </li>
            </ul>
            <div
               className="toggle_btn hover:text-main cursor-pointer mx-2   md:hidden text-2xl"
               onClick={toggle}
            >
               {!mobileMenu ? <HiOutlineMenu /> : <MdClose />}
            </div>
         </div>
         <ul
            className={`mobileMenu outline-none select-none mx-auto absolute w-full top-0 bg-lightBg dark:bg-darkGray overflow-hidden z-10 text-2xl font-semibold  h-screen  flex justify-center items-center flex-col ${
               mobileMenu ? "open" : "close"
            }`}
         >
            <li
               onClick={toggle}
               className="py-5 cursor-pointer  hover:text-main w-full mx-auto text-center rounded-lg"
            >
               <a href="#home">Home</a>
            </li>
            <li
               onClick={toggle}
               className="py-5 cursor-pointer hover:text-main w-full text-center rounded-lg"
            >
               <a href="#about">About</a>
            </li>
            <li
               onClick={toggle}
               className="py-5 cursor-pointer hover:text-main w-full text-center rounded-lg"
            >
               <a href="#projects">Projects</a>
            </li>
            <li
               onClick={toggle}
               className="py-5 cursor-pointer  hover:text-main w-full text-center rounded-lg"
            >
               <a href="#contact">Contact</a>
            </li>
         </ul>
      </>
   );
};

export default Navbar;
