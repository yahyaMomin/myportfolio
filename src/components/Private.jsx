import { useState } from "react";
import instance from "../utils/axios";
import ContentWrapper from "./ContentWrapper";
import Navbar from "./Navbar";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";

const Private = () => {
   const [value, setValue] = useState("");
   const [msg, setMsg] = useState(null);
   const [users, setUsers] = useState(null);
   const [loading, setLoading] = useState(false);
   const password = import.meta.env.VITE_APP_ADMIN_PASSWORD;

   const navigate = useNavigate();

   const getAllUsers = async () => {
      const res = await instance.get("/users");
      const { users } = res.data;
      setUsers(users);
   };

   const formSubmit = (e) => {
      setLoading(true);
      e.preventDefault();
      if (value != password) {
         setMsg("incorrect password :( ");
         setLoading(false);
      } else {
         setMsg(null);
         getAllUsers();
         setLoading(false);
      }
   };
   return (
      <div className={`bg-lightBg dark:bg-[#1a1a1a] dark:text-white `}>
         <Navbar />
         <ContentWrapper className={`md:mx-5 mx-1`}>
            <form
               action="#"
               className="my-20 flex justify-center items-center w-full"
               onSubmit={formSubmit}
            >
               <input
                  type="password"
                  name="password"
                  id="password"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="dark:bg-black w-full bg-lightGray text-white input-radius px-4 py-2 focus:border-none focus:outline-none"
                  placeholder="enter password"
               />
               <button
                  type="submit"
                  className="bg-textColorLight dark:bg-textColorDark dark:text-black hover:opacity-[.8] button-radius py-2 px-4 rounded-lg"
               >
                  submit
               </button>
            </form>
            <>
               {!loading && (
                  <>
                     {!msg && users ? (
                        <>
                           <table className="styled-table w-20 overflow-scroll text-sm md:text-base">
                              <thead className="bg-red-300">
                                 <tr className="my-2">
                                    <td>IP</td>
                                    <td>city</td>
                                    <td>region</td>
                                    <td>country</td>
                                    <td>time</td>
                                 </tr>
                              </thead>
                              <tbody>
                                 {users?.map((user) => (
                                    <tr
                                       onClick={() =>
                                          navigate(`/detail/${user._id}`)
                                       }
                                       className="active-row cursor-pointer hover:opacity-[.8]"
                                       key={user.ip}
                                    >
                                       <td>{user.ip}</td>
                                       <td>{user.city}</td>
                                       <td>{user.region}</td>
                                       <td>{user.country}</td>
                                       <td>{format(user.createdAt)}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </>
                     ) : (
                        <div>{msg}</div>
                     )}
                  </>
               )}
            </>
         </ContentWrapper>
      </div>
   );
};

export default Private;
