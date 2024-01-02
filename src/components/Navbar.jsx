import React, { useState } from 'react'
import Theme from './Theme'
import { MdClose } from 'react-icons/md'
import { HiOutlineMenu } from 'react-icons/hi'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [position, setPosition] = useState('show')

  const toggle = () => {
    setMobileMenu(!mobileMenu)
  }

  const scrollToHome = () => {
    window.scrollTo(0, 0)
  }

  const scrollToAbout = () => {
    window.scrollTo(0, 573)
  }
  const scrollToProjects = () => {
    window.scrollTo(0, 1212)
  }

  const scrollToContact = () => {
    window.scrollTo(0, 6956)
  }

  const scrollToHomeMobile = () => {
    setMobileMenu(!mobileMenu)
    window.scrollTo(0, 0)
  }

  const scrollToAboutMobile = () => {
    setMobileMenu(!mobileMenu)
    window.scrollTo(0, 1023)
  }
  const scrollToProjectsMobile = () => {
    setMobileMenu(!mobileMenu)
    window.scrollTo(0, 2060)
  }

  const scrollToContactMobile = () => {
    setMobileMenu(!mobileMenu)
    window.scrollTo(0, 7992)
  }

  window.addEventListener('scroll', () => {
    setLastScrollY(window.scrollY)
    if (lastScrollY < window.scrollY) {
      setPosition('hide')
    } else {
      setPosition('show')
    }
  })

  return (
    <>
      <div
        className={`  navbar ${position} bg-white dark:bg-darkGray flex justify-between items-center py-3  border-b-2 dark:border-gray-700  fixed w-full z-30  px-8 `}
      >
        <div onClick={scrollToHome} className=" text-base font-semibold  select-none relative  cursor-pointer ">
          YAHYA.DEV
        </div>
        <div className=" mr-5  ml-auto cursor-pointer">{<Theme />}</div>

        <ul className="links hidden md:flex  font-semibold">
          <li className="px-3 cursor-pointer" onClick={scrollToHome}>
            Home
          </li>
          <li className="px-3 cursor-pointer" onClick={scrollToAbout}>
            About
          </li>
          <li className="px-3 cursor-pointer" onClick={scrollToProjects}>
            Projects
          </li>
          <li className="px-3 cursor-pointer" onClick={scrollToContact}>
            Contact
          </li>
        </ul>
        <div className="toggle_btn hover:text-main cursor-pointer mx-2   md:hidden text-2xl" onClick={toggle}>
          {!mobileMenu ? <HiOutlineMenu /> : <MdClose />}
        </div>
      </div>
      <ul
        className={`mobileMenu select-none mx-auto absolute w-full top-0 bg-lightBg dark:bg-darkGray overflow-hidden z-10 text-2xl font-semibold  h-screen  flex justify-center items-center flex-col ${
          mobileMenu ? 'open' : 'close'
        }`}
      >
        <li
          className="py-5 cursor-pointer  hover:text-main w-full mx-auto text-center rounded-lg"
          onClick={scrollToHomeMobile}
        >
          Home
        </li>
        <li className="py-5 cursor-pointer hover:text-main w-full text-center rounded-lg" onClick={scrollToAboutMobile}>
          About
        </li>
        <li
          className="py-5 cursor-pointer hover:text-main w-full text-center rounded-lg"
          onClick={scrollToProjectsMobile}
        >
          Projects
        </li>
        <li
          className="py-5 cursor-pointer  hover:text-main w-full text-center rounded-lg"
          onClick={scrollToContactMobile}
        >
          Contact
        </li>
      </ul>
    </>
  )
}

export default Navbar
