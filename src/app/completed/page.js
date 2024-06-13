"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await axios.get(url);
  const result = await res.data;
  return result
}

function Completed() {
  let { data } = useSWR('/api/get',fetcher)
  
  

  if (!data) {
    return <div>
      <Navbar></Navbar>
      <div className="bg-zinc-500 h-[100vh] p-[5%]">
 
            <div className="bg-zinc-300 h-[500px] rounded-lg shadow-2xl ">
             <h1>plese wait completed tasks are loading...</h1>
            </div>   
          </div>
      
    </div>;
  } else {
    const completedTodos = data.filter(item => item.isComplete); 
    data = completedTodos
  }




  const deleteFromApi = async(loId,ApiId) => {
    deleteFromUi(loId)
    const res = await axios.delete(`/api/${ApiId}`)
    console.log(res.data)
  };
  const deleteFromUi = (id)=>{
    const changed = data.filter((item) => {
      return item.id !== id;
    });
    data = changed
  }
  return (
    <>
      <Navbar />
          <div className="bg-zinc-500 h-[100vh] p-[5%]">
            
            <div className="bg-zinc-300 h-[500px] rounded-lg shadow-2xl ">
            
              <div className="bg-slate-300 border-y-2 rounded-lg">
                {data.map((item) => (
                  <ul
                    key={item.id}
                    className="bg-slate-300 border-y-2 rounded-lg"
                  >
                    <div className="flex justify-around">
                      <div className="flex flex-1 items-center p-2">
                        <li className="pl-2 font-medium ">{item.todo}</li>
                      </div>
                      <div className=" flex justify-around px-2 items-center">
                        <button className="px-2 border-2 hover:bg-slate-400 rounded-md " onClick={()=>{deleteFromApi(item.id,item._id)}}>
                          delete
                        </button>
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
