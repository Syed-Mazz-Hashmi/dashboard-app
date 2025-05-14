import React from 'react'
import { ImCross } from "react-icons/im";

const FilterTab = () => {
  return (
    <>
      <div className="container">
        <div className='items-end w-[30%] border-1 border-[#292929] '>
            <div className='flex justify-between mx-2' >
                <div> 
                    <h1 className='text-white text-xl font-bold p-3'>
                        Filter Tabs
                    </h1>
                </div>
                <div className='content-center'>
                    <ImCross  className='text-white '/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FilterTab
