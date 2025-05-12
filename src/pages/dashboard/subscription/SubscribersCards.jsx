import React from 'react'

const SubscribersCards = () => {
  return (
    <div>
      <div className=" flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-1 mx-1 my-5 w-full">
        <div className=" border-1 border-[#292929] text-white p-4 rounded-xl flex justify-between items-center w-full">
          <div>
            <p className="text-sm text-gray-400">Total Subscriptions </p>
            <h2 className="text-xl font-semibold  mt-2">12,000</h2>
          </div>
          <div className="flex items-center bg-green-900/30 text-green-400 border border-green-500 px-3 py-1 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 10l4-4 4 4m-4 6V6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            30.8%
          </div>
        </div>

        <div className="border-1 border-[#292929] text-white p-4 rounded-xl flex justify-between items-center w-full">
          <div>
            <p className="text-sm text-gray-400">Active Subscriptions</p>
            <h2 className="text-xl font-semibold  mt-2">2,000</h2>
          </div>
          <div className="flex items-center bg-green-900/30 text-green-400 border border-green-500 px-3 py-1 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 10l4-4 4 4m-4 6V6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            25.7%
          </div>
        </div>
        <div className="border-1 border-[#292929] text-white p-4 rounded-xl flex justify-between items-center w-full">
          <div>
            <p className="text-sm text-gray-400">New Subscriptions</p>
            <h2 className="text-xl font-semibold  mt-2">2,000</h2>
          </div>
          <div className="flex items-center bg-green-900/30 text-green-400 border border-green-500 px-3 py-1 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 10l4-4 4 4m-4 6V6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            25.7%
          </div>
        </div>
        <div className="border-1 border-[#292929] text-white p-4 rounded-xl flex justify-between items-center w-full">
          <div>
            <p className="text-sm text-gray-400">Churn Rate</p>
            <h2 className="text-xl font-semibold  mt-2">8,050</h2>
          </div>
          <div className="flex items-center bg-green-900/30 text-[#C10000] border border-[#C10000] px-3 py-1 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 10l4-4 4 4m-4 6V6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <p className='text-[#C10000]'>25.7%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribersCards
