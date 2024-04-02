import React from 'react'
import Todo from '../../components/todo'
function Dashboard() {
  return (
    <div className='bg-zinc-500 h-[100vh] p-[5%]'>
        <div className='bg-zinc-300 h-[500px] rounded-lg shadow-2xl '>
          <Todo/>
        </div>
    </div>
  )
}

export default Dashboard