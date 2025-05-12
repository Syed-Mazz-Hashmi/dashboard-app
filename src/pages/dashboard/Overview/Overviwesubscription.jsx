import React from 'react'
import PieArcLabel from './PieArcLabel'

const Overviwesubscription = () => {
  return (
    <>
      <div className='w-full border-1 border-[#292929] rounded-xl pt-3'>
          <div className='grid grid-cols-2 mx-2'>
            <div className='font-bold px-2 py-2 text-white text-xl lg:text-2xl'>
              <h1>
                Subscription
              </h1>
            </div>
            <div className='flex text-end text-[8px] justify-end items-center'>
              <p>
                Showing :
              </p>
              <p className='greenish'>
                This Month
              </p>
            </div>
          </div>
        <div className='p-4'>
          <PieArcLabel />
        </div>
      </div>
    </>
  )
}

export default Overviwesubscription
