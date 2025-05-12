import React from 'react'
import SubscribersCards from './SubscribersCards'
import SubscriptionGrowthGraph from './SubscriptionGrowthGraph'
import Top5SubscriptionsbyProduct from './Top5SubscriptionsbyProduct'
import ColumnsCharts from './ColumnsCharts'
import { Link, Route, Router, Routes } from 'react-router-dom'

const SubscriptionOverview = () => {

  return (
    <div>
      <div>
        <div className='flex gap-3'>
          <div>
            <h1 className='text-white text-2xl font-bold p-3'>
              Overviwe
            </h1>
          </div>
          <div className='text-white text-2xl font-bold p-3 '>
          <Link to='/dashboard/subscription/subscriptionlist'><h1>
          Recent Subscriptions
            </h1></Link>
          </div>
        </div>
      </div>
      <SubscribersCards />
      <div className='border-1 ml-[5px] w-full border-[#292929] rounded-xl'>
        <SubscriptionGrowthGraph />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-1 my-5'>
        <div className='col-span-2'>
          <Top5SubscriptionsbyProduct />
        </div>
        <div>
          <ColumnsCharts />
        </div>
      </div>
    </div>
  )
}

export default SubscriptionOverview
