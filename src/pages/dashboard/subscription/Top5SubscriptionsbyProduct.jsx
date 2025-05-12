import React from 'react'
import HorizontalBarChart from './HorizontalBarChart'

const Top5SubscriptionsbyProduct = () => {
  return (
    <>
     <div className='border-1 ml-[5px] w-full border-[#292929] rounded-xl p-4'>
      <h1 className='text-white text-3xl  font-bold'> Top 5 Subscriptions by Product</h1>
        <HorizontalBarChart/>
     </div> 
    </>
  )
}

export default Top5SubscriptionsbyProduct
