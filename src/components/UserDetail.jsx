import { useState, useEffect } from "react";
import ContentWrapper from "./ContentWrapper";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import instance from "../utils/axios";
import { format } from "timeago.js";

const UserDetail = () => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const { id } = useParams();
   console.log(id);
   const getUser = async () => {
      try {
         setError(null);
         const res = await instance.get(`/user/${id}`);
         const { user } = res.data;
         setUser(user);
      } catch (error) {
         setError(error.response.data.msg);
      }
   };
   useEffect(() => {
      getUser();
   }, []);
   console.log(user);

   return (
      <div className="mt-20">
         <Navbar />
         <ContentWrapper>
            {user && !error ? (
               <div className="container w-96 mx-auto rounded-br-xl rounded-bl-xl rounded-lg bg-black">
                  <p className="text-center header-rounded mb-5 bg-[#009879]">
                     user Detail
                  </p>
                  <div className="flex py-3 text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>IP :</h1>
                     <p>{user.ip}</p>
                  </div>
                  <div className="flex py-3 text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>city :</h1>
                     <p>{user.city}</p>
                  </div>
                  <div className="flex py-3 text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>region :</h1>
                     <p>{user.region}</p>
                  </div>
                  <div className="flex py-3 text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>country :</h1>
                     <p>{user.country}</p>
                  </div>
                  <div className="flex py-3 text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>location :</h1>
                     <p>{user.location}</p>
                  </div>
                  <div className="flex py-3 text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>time :</h1>
                     <p>{format(user.createdAt)}</p>
                  </div>
                  <div className="flex py-3 text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>postal :</h1>
                     <p>{user.postal}</p>
                  </div>
                  <div className="flex py-3 rounded-br-xl rounded-bl-xl text-black gap-5 bg-gray-400 mb-2 justify-center">
                     <h1>timezone :</h1>
                     <p>{user.timezone}</p>
                  </div>
               </div>
            ) : (
               <h1>{error}</h1>
            )}
         </ContentWrapper>
      </div>
   );
};

export default UserDetail;
