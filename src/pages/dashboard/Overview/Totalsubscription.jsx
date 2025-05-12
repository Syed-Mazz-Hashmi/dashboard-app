import React from 'react'

const Totalsubscription = () => {
    return (
        <>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-2 my-5 w-full '>
                {/* total subscription start */}
                <div className='flex  border-1 border-[#292929]  rounded-lg pt-2 pl-2'>
                    <div className='flex gap-8'>
                        <div>
                            <p className='text-[#7C7C7C] text-[20px]'>
                                Total Subscription
                            </p>
                            <h1 className='text-white text-3xl font-bold'>
                                30,416
                                <span className='ml-1 text-[15px] text-[#7C7C7C]'>users</span>
                            </h1>
                        </div>
                        <div className=' flex px-1 content-center gap-2 h-[2rem] border-[1.5px] border-[#00C113] rounded-2xl '>
                            <div className='content-center'>
                                <img className='w-[20px] h-[20px]' src="/public/assets/lossarrow.png" alt="" />
                            </div>
                            <div className='content-center'>
                                <p className=' text-[#00C113] text-[1rem]'>25.7%</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* total subscription end */}

                {/* total subscription this month start */}
                <div className='border-1 border-[#292929] rounded-xl'>
                    <div className='flex gap-3'>
                        <div className=''>
                            <p className='text-[#7C7C7C] text-[15px]'>Total Subscribers This Month </p>
                            <h1>
                                12,000
                                <span className=' text-[#7C7C7C] text-[15px]'>Subscribers</span>
                            </h1>
                        </div>
                        <div className='border-1 flex gap-2 px-1 content-center h-[2rem] text-[#00C113] rounded-xl'>
                        <div className='content-center'>
                                <img className='w-[20px] h-[20px]' src="/public/assets/lossarrow.png" alt="" />
                            </div>
                            <div className='content-center'>
                                <p className=' text-[#C10000] text-[1rem]'>25.7%</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* total subscription this month end */}

                {/* total revenue this month start */}
                <div className='border-1 border-[#292929] rounded-xl'>
                    <div className='flex gap-3'>
                        <div className=''>
                            <p className='text-[#7C7C7C] text-sm'>Total Revenue This Month </p>
                            <h1>
                                $ 105,968.20
                            </h1>
                        </div>
                        <div className='flex  px-1 content-center gap-2 h-[2rem]  border-1 text-[#00C113] rounded-xl'>
                            <div className=' content-center'>
                                <img className=' w-[20px] h-[20px]' src="/public/assets/lossarrow.png" alt="" />
                            </div>
                            <div className='content-center'> 
                                <p className=' text-[#00C113] text-[1rem]'>34.9%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Totalsubscription
