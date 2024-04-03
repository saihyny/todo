"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
function Todo() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  const getData = async () => {
    const res = await axios.get("/api/get");
    const result = await res.data;
    const Completed = result.filter((item)=>{
      return !item.isComplete
    })
    setTodos(Completed);
  };

  useEffect(() => {
    getData();
    console.log("hi");
  }, []);

  const addFunc = async (e) => {
    e.preventDefault();

    setTodos((item) => {
      return [
        ...item,
        { todo: todoRef.current.value, id: Math.random(), isComplete: false },
      ];
    });

    const response = await axios.post(
      "/api/post",
      {
        todo: todoRef.current.value,
        id: Math.random(),
        isComplete: false,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response.data);

   
  };
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
  const comTaskFunc = async (id,locId) => {
    const res = await axios.put(
      `/api/${id}`,
      { isComplete: true }
    );
    deleteFromUi(locId)
    console.log(res.data);
  };

  return (
    <>
      {todos.length <= 0 ? (
        <>
          <h2>please wait UnCompleted tasks are loading</h2>
          <div className="bg-slate-300 border-y-2 rounded-lg">
            <div className="flex justify-around">
              <div className="flex flex-1 items-center p-2">
                <input
                  ref={todoRef}
                  type="name"
                  class=" h-6 text-blue-600  bg-gray-200 border-gray-700
                  border-2 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  pl-2 "
                />
              </div>
              <div className=" flex justify-around px-2 items-center">
                <button
                  className="px-2 border-2 hover:bg-slate-400 rounded-md"
                  onClick={addFunc}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="">
          {todos.map((item) => (
            <ul key={item.id} className="bg-slate-300 border-y-2 rounded-lg">
              <div className="flex justify-around">
                <div className="flex flex-1 items-center p-2">
                  <input
                    onClick={() => comTaskFunc(item._id, item.id)}
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-6 text-blue-600 rounded-full bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pl-2 "
                  />
                  <li className="pl-2 font-medium ">{item.todo}</li>
                </div>
                <div className=" flex justify-around px-2 items-center">
                  <button className="px-2 border-2 hover:bg-slate-400 rounded-md ">
                    edit
                  </button>
                  <button
                    className="px-2 border-2 hover:bg-slate-400 rounded-md"
                    onClick={() => {
                      deleteFromApi(item.id,item._id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            </ul>
          ))}
          <div className="bg-slate-300 border-y-2 rounded-lg">
            <div className="flex justify-around">
              <div className="flex flex-1 items-center p-2">
                <input
                  ref={todoRef}
                  type="name"
                  class=" h-6 text-blue-600  bg-gray-200 border-gray-700
                  border-2 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  pl-2 "
                />
              </div>
              <div className=" flex justify-around px-2 items-center">
                <button
                  className="px-2 border-2 hover:bg-slate-400 rounded-md"
                  onClick={addFunc}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Todo;
