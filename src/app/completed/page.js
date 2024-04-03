"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

function Completed() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const res = await axios.get("/api/get");
    const result = await res.data;
    const Completed = result.filter((item) => {
      return item.isComplete;
    });
    setTodos(Completed);
  };

  useEffect(() => {
    getData();
    console.log("renderd");
  }, []);
  
  const deleteFromApi = async(loId,ApiId) => {
    deleteFromUi(loId)
    const res = await axios.delete(`/api/${ApiId}`)
    console.log(res.data)
  };
  const deleteFromUi = (id)=>{
    const changed = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(changed);
  }
  return (
    <>
      <Navbar />
          <div className="bg-zinc-500 h-[100vh] p-[5%]">
            
            <div className="bg-zinc-300 h-[500px] rounded-lg shadow-2xl ">
              {  todos.length<=0 ? <h2>please wait Completed tasks are loading</h2> :
              (<div className="bg-slate-300 border-y-2 rounded-lg">
                {todos.map((item) => (
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
              </div>)
               }
            </div>
                
             
          </div>
      
    </>
  );
}

export default Completed;
