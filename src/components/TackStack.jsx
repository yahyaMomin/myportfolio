import React from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import bootstrap from '../assets/bootstrap-5-1.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import express from '../assets/express-109.svg'
import node from '../assets/nodejs-1.svg'
import mongodb from '../assets/mongodb-icon-1.svg'

const TackStack = () => {
  return (
    <div>
      <div className=" flex-wrap mb-20 gap-5 flex justify-start flex-col  items-center ">
        <h1 className="text-2xl font-semibold  border-b-4 px-4   pb-3 ">Tech Stacks</h1>
        <div className="icons flex gap-2  flex-wrap content-center items-center justify-center">
          <div className="icon">
            <img className="w-11" src={html} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-11" src={css} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-9" src={js} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-11" src={tailwind} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-11" src={bootstrap} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-11" src={react} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-11" src={node} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-11" src={express} alt="SKILL" />
          </div>
          <div className="icon">
            <img className="w-11" src={mongodb} alt="SKILL" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TackStack
