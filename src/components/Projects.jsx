import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { FaGithub } from 'react-icons/fa6'
import data from './data.js'

const Projects = () => {
  return (
    <div className="mb-20">
      <div className=" text-xl mb-2 ">
        <h1 className="text-blue-400 font-bold">PROJECTS</h1>
        <p className=" text-xl md:text-3xl mt-3 font-semibold">Each project is a unique piece of development 🧩</p>
      </div>
      {data?.map((item, index) => (
        <div key={index} className=" shadow-md dark:bg-[#242423] py-3 px-2 rounded-xl mb-4">
          <div className=" flex px-2 flex-col md:flex-row gap-2 ">
            <div className="image shadow-md  h-full max-h-[390px] overflow-hidden  basis-[50%] rounded-xl">
              <img className=" imageBox h-full w-full" src={item.image} alt="" />
            </div>
            <div className=" mt-5 flex basis-[50%]  justify-around items-center  gap-3 flex-col w-full text-center ">
              <div className="texts">
                <h1 className="font-base text-xl mt-4 mb-5">{item.name}</h1>
                <p className="opacity-[.8]">{item.description}</p>
              </div>
              <div className="links flex gap-4">
                <a
                  href={item.githubLink}
                  className="github flex justify-center items-center gap-3 px-2 py-2 border-2 dark:border-[#3b3b3b]  text-black dark:text-white rounded-md"
                >
                  <p className="">Source Code</p>
                  <FaGithub size="20px" />
                </a>
                <a
                  href={item.liveLink}
                  className="github flex justify-center items-center gap-3 px-2 py-2 border-2 dark:border-[#3b3b3b] text-black dark:text-white rounded-md"
                >
                  <p className="">Live Demo</p>
                  <FaExternalLinkAlt size="17px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
