import skills from "../utils/skills";

const TackStack = () => {
   return (
      <div>
         <div className="flex flex-col">
            <h1 className="text-center mb-5">Tech Stacks</h1>
            {skills.map((item, index) => (
               <div
                  key={item?.name}
                  className="flex dark:border-none dark:bg-[#242423] border px-4 py-3 rounded-md  flex-col mb-5 justify-start items-start"
               >
                  <div className="flex justify-between items-center flex-col">
                     <h1
                        className={`font-extrabold mb-8 w-full md:w-[50%] text-center px-5 py-2 rounded-2xl`}
                        style={{
                           background: `linear-gradient(45deg, ${item?.color.join(
                              ", "
                           )})`,
                        }}
                     >
                        {item?.name}
                     </h1>
                     <div
                        className={`icon flex flex-col justify-between items-center gap-3 ${
                           index % 2 === 0
                              ? "md:flex-row-reverse"
                              : "md:flex-row"
                        } `}
                     >
                        <img
                           className="md:w-36 w-20"
                           src={item?.logo}
                           alt={item?.name}
                        />
                        <p>{item?.description}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TackStack;
