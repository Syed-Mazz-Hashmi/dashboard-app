import React from 'react'
import Totalsubscription from './Totalsubscription'
import YearlyRevenue from './YearlyRevenue'
import DisplayActivity from './DisplayActivity'
import Userbycountry from './Userbycountry'
import Userby from './Userby'
import Overviwesubscription from './Overviwesubscription'
import DisplayStatus from './DisplayStatus'
import UserActivity from './UserActivity'
import StorageChart from './StorageChart'

const Overview = () => {
    return (
        <>
        <div className=" font-dmsans  text-white">
          {/* <Totalsubscription/> */}
          <DisplayActivity />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  w-full'>
            <div className=' '>
              <YearlyRevenue/>
            </div>
            <div>
              <Userbycountry />
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  my-5 '>
            <div>
              <Userby/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 my-5 w-full'>
              <div className='w-full '>
                <Overviwesubscription/>
              </div>
              <div className='w-full '>
                <DisplayStatus/>
            </div>
          </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
            <div className='w-full border-1 border-[#292929] rounded-xl p-5'>
              <UserActivity/>
            </div>
            <div className=''>
              <StorageChart/>
            </div>
          </div>
        </div>
        </>
    )
}

export default Overview
