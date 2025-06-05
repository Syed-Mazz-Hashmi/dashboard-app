import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { IoMdContact } from "react-icons/io";

const   LocationOverview = () => {
  return (
    <div>

         <div className='flex gap-3'>
          <div className='text-white text-xl font-bold p-3 '>
          <Link to='/dashboard/location/location-overview'>
            <h1>
              Overview
            </h1>
          </Link>
          </div>
          <div className='text-white text-xl font-bold p-3 '>
          <Link to='/dashboard/location/contrylist'>
            <h1>
              Country list
            </h1>
          </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
          <div className='border-1 flex gap-2 justify-between border-[#292929] rounded-xl p-3'>
              <div className=''>
                <h1 className=' text-md font-bold text-[#5e5e5e] '>
                  Total Locations
                </h1>
                <p className='text-white text-2xl font-bold'>27</p>
              </div>
              <div className='px-1 py-1  content-center'>
                <CiLocationOn className='w-10 h-10 p-1 rounded-lg bg-[#0080FF] text-[#ffffff]' />
              </div>
          </div>
          <div className='border-1 flex gap-2 justify-between border-[#292929] rounded-xl p-3'>
              <div className=''>
                <h1 className=' text-md font-bold text-[#5e5e5e] '>
                  Total Locations
                </h1>
                <p className='text-white text-2xl font-bold'>27</p>
              </div>
              <div className='px-1 py-1 content-center'>
                <IoMdContact className='w-10 h-10 p-1 rounded-lg bg-[#00C113] text-[#ffffff]' />
              </div>
          </div>
          <div className='border-1 flex gap-2 justify-between border-[#292929] rounded-xl p-3'>
              <div className=''>
                <h1 className=' text-md font-bold text-[#5e5e5e] '>
                  Total Locations
                </h1>
                <p className='text-white text-2xl font-bold'>27</p>
              </div>
              <div className='px-1 py-1  content-center'>
                <CiLocationOn className='w-10 h-10 p-1 rounded-lg bg-[#0080FF]  text-[#ffffff]' />
              </div>
          </div>
          <div className='border-1 flex gap-2 justify-between border-[#292929] rounded-xl p-3'>
              <div className=''>
                <h1 className=' text-md font-bold text-[#5e5e5e] '>
                  Total Locations
                </h1>
                <p className='text-white text-2xl font-bold'>27</p>
              </div>
              <div className='px-1 py-1  content-center'>
                <CiLocationOn className='w-10 h-10 p-1 rounded-lg bg-[#0080FF]  text-[#ffffff]' />
              </div>
          </div>
        </div>
    </div>
  )
}

export default LocationOverview
