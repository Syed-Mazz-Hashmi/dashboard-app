import React from 'react'
import SimpleLineChart from './SimpleLineChart'

const SubscriptionGrowthGraph = () => {
    return (
        <>
            <div className='flex mx-1 justify-between  p-4 w-full'>
                <div className='flex gap-5 items-center'>
                    <div className='text-xl md:text-3xl font-semibold text-white'>
                        <h1 >Subscription Growth Graph</h1>
                    </div>
                    <div className='text-sm ashgray'>
                        <p>
                            05 Jan, 2024 - 05 Mar, 2024
                        </p>
                    </div>
                    <div className='text-sm ashgray'>
                        Daily
                    </div>
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='w-2 h-2 bg-[#292929] rounded-xl border-2 border-[#00DEC3]'></div>
                    <p className='text-white'>Chosen Period</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='w-2 h-2 bg-[#292929] rounded-xl  border-2 border-[#0080ff]'></div>
                    <p className='text-white'>Chosen Period</p>
                </div>
            </div>
            <div>
                <SimpleLineChart />
                <div className='flex justify-between mx-2 p-2 ashgray'>
                    <h1>
                        05 Jan, 2024
                    </h1>
                    <h1>
                        05 Mar, 2024
                    </h1>
                </div>
            </div>
        </>
    )
}

export default SubscriptionGrowthGraph