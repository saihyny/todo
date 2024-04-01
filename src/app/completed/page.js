"use client";
import React,{useState} from "react";
import Navbar from "../components/Navbar";


function Completed() {

  const data = [
    {
      todo: "homework",
      id: 1,
      isComplete: true,
    },
    {
      todo: "gym",
      id: 2,
      isComplete: false,
    },
  ];
  const Completed = data.filter((item)=>{
    return !item.isComplete
  })
  return (
    <>
      <Navbar />
      <div className="bg-zinc-500 h-[100vh] p-[5%]">
        <div className="bg-zinc-300 h-[500px] rounded-lg shadow-2xl ">
          <div className="bg-slate-300 border-y-2 rounded-lg">
            
              
                {Completed.map((item) => (
                  <ul
                    key={item.id}
                    className="bg-slate-300 border-y-2 rounded-lg"
                  >
                    <div className="flex justify-around">
                      <div className="flex flex-1 items-center p-2">
                        <li className="pl-2 font-medium ">{item.todo}</li>
                      </div>
                      <div className=" flex justify-around px-2 items-center">
                        <button className="px-2 border-2 hover:bg-slate-400 rounded-md ">delete</button>
                      </div>
                    </div>
                  </ul>
                ))}
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Completed;
