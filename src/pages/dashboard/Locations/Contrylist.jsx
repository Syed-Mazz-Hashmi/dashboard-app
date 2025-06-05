import React from 'react'
import { Link } from 'react-router-dom'

const Contrylist = () => {
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
    </div>
  )
}

export default Contrylist
