import React from 'react'
import DonutChart from './DonutChart '

const DisplayStatus = () => {
  return (
    <>
      <div className=' border-1 border-[#292929] rounded-xl w-full'>
       <div className='mt-2'>
       <h1 className='ml-2 w-full px-2 py-3 font-bold text-white  text-3xl  '>
          Display Status 
        </h1>
       
        <div className=''>
          <DonutChart/>
        </div>
       </div>

      </div>
    </>
  )
}

export default DisplayStatus
