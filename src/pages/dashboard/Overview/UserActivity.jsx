import React from 'react'
import MyBarChart from './MyBarChart'
const UserActivity = () => {
  return (
    <>
      <div className=' '>
        <div classname="w-full border-1 border-[#292929] rounded-xl p-5 mt-5">
          <h1 className='text-white  font-bold'>
            User Activity
          </h1>
           <div className='mt-3 content-center'>
           <MyBarChart/>
           </div>
        </div>
      </div>
    </>
  )
}

export default UserActivity
