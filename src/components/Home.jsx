import axios from "axios";
import logo from "../assets/projects/myimage.webp";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Home = () => {
   const [info, setInfo] = useState("");
   const getIP = async () => {
      try {
         const res = await axios.get(
            "https://portfolio-backend-sn3n.onrender.com/api/v2/ip"
         );

         const { data } = res;

         setInfo(data.user);
      } catch (error) {
         console.log(error.message);
      }
   };

   return (
      <div
         id="home"
         className=" my-20  text-center md:text-start gap-2  flex justify-between flex-col-reverse md:flex-row items-center mx-auto"
      >
         <div className="content flex gap-2 flex-col">
            <h1 className="text-[30px] md:text-[40px] xl:text-[50px] font-semibold">
               Full Stack (MERN) Developer
            </h1>
            <p className="text-xl">
               Hi, I'm Yahya Momin. A passionate FullStack Developer
               <br /> based in Gujarat, India. 📍
            </p>
            <div className="links mt-2 text-3xl flex gap-5 items-center justify-center md:justify-start">
               <a
                  href="https://github.com/yahyaMomin"
                  target="_blank"
                  rel="noreferrer"
               >
                  <FaLinkedin />
               </a>
               <a
                  href="https://www.linkedin.com/in/yahya-momin-53794225a"
                  target="_blank"
                  rel="noreferrer"
               >
                  <FaGithub />
               </a>
            </div>
            <div>
               <a
                  className="flex justify-center items-center gap-2 text-textColorLight dark:text-textColorDark"
                  target="_blank"
                  rel="noreferrer"
                  href="https://firebasestorage.googleapis.com/v0/b/finstamiles-app.appspot.com/o/posts%2F1704917395244-YahyaMomin_CV.pdf?alt=media&token=dea92200-053f-4a83-93de-c85fe8b5290b"
               >
                  <p> download resume</p>
                  <span>
                     <FaDownload size={"20px"} />
                  </span>
               </a>
            </div>
            {!info && (
               <button
                  onClick={getIP}
                  className="mt-10 dark:bg-textColorDark dark:text-black bg-textColorLight  py-3 rounded-3xl"
               >
                  click here to seen magic
               </button>
            )}
            {info && (
               <div className="mt-10">
                  <p className="mb-2">your IP : {info?.ip}</p>
                  <p className="mb-2">
                     near : {info?.city} {info?.region} {info?.country}
                  </p>
                  <p className="mb-2">
                     this is your Location : {info?.location}
                  </p>
               </div>
            )}
         </div>
         <div className="logo rounded-full w-[100%] flex justify-center items-center max-w-[350px] h-[350px] overflow-hidden ">
            <img className="mt-20" src={logo} alt="" />
         </div>
      </div>
   );
};

export default Home;
