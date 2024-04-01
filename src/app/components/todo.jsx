"use client";
import React, { useRef, useState } from "react";
function Todo() {
  const todoRef = useRef();
  const data = [
    {
      todo: "homework",
      id: 1,
      isComplete: false,
    },
    {
      todo: "gym",
      id: 2,
      isComplete: true,
    },
  ];
  const completed =  data.filter(item=>!item.isComplete)
  const [todos, setTodos] = useState(completed);

  const addFunc = (e) => {
    e.preventDefault();
    setTodos((item) => {
      return [
        ...item,
        { todo: todoRef.current.value, id: Math.random(), isComplete: false },
      ];
    });
  };
  const deleteFunc = (id) => {
   const changed =  todos.filter((item)=>{
      return   item.id !== id
    })
   setTodos(changed)
  }

  return (
    <div className="">
      {todos.map((item) => (
        <ul key={item.id} className="bg-slate-300 border-y-2 rounded-lg">
          <div className="flex justify-around">
            <div className="flex flex-1 items-center p-2">
              <input
                onClick={()=>item.isComplete=true}
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
              <button className="px-2 border-2 hover:bg-slate-400 rounded-md"
              onClick={()=>{deleteFunc(item.id)}}>
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
  );
}

export default Todo;
