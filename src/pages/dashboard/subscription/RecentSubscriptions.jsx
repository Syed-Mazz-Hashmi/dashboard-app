    import React from 'react'
    import { Link } from 'react-router-dom'

    const RecentSubscriptions = () => {

        const id = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]

        return (
            <div>
                <div className='border-1 ml-[5px] w-full border-[#292929] rounded-xl'>
                    <div className='border-1 rounded-xl p-3'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-white text-2xl font-bold p-3'>
                                    Recent Subscriptions list
                                    <span className='ashgray text-xs ml-3'>
                                        Row per page : 10
                                    </span>
                                </h1>
                            </div>
                            <div className=' content-center'>
                                <input className='bg-[#1A1A1A] border border-[#292929] rounded-xl p-2 text-white w-100' type="text" placeholder='Search subscriptions by product or customer' />
                                <button className='bg-[#0080FF] text-white rounded-xl p-2 ml-2 w-20'>
                                    Export
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border-1 border-[#414141] rounded-xl text- mx-3'>
                        <div className='grid grid-cols-9 bg-[#302f2f] mx-3 mt-2 justify-between rounded-lg'>
                            <div className='text-center text-white font-bold py-2 text-xs'>ID</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Clients</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Product</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Payment dste</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Payment time</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Subscription End</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Amount($)</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Revenue ($)</div>
                            <div className='text-center text-white font-bold py-2 text-xs'>Status</div>
                        </div>
                        <div className=' p-3 grid grid-cols-9 gap-3 mx-2 '>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-white text-center '>{id - 1}</div>
                                <div className='text-white text-center '>{id - 2}</div>
                                <div className='text-white text-center '>{id - 3}</div>
                                <div className='text-white text-center '>{id - 4}</div>
                                <div className='text-white text-center '>{id - 5}</div>
                                <div className='text-white text-center '>{id - 6}</div>
                                <div className='text-white text-center '>{id - 7}</div>
                                <div className='text-white text-center '>{id - 8}</div>
                                <div className='text-white text-center '>{id - 9}</div>
                                <div className='text-white text-center '>{id - 10}</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5 '>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                                <div className='text-white text-center'>222222222</div>
                            </div>
                            <div className='grid grid-rows-10 [&>div]:mt-5'>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                                <div className='text-[#32FC00] text-center'><div className=' rounded-full text-sm bg-[#42B82433] px-1 py-1'><button >Active</button></div></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between p-3 '>
                        <div>
                            <h1 className='text-white text-md ashgray p-3'>
                                Showing Row 1-10 of 20
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default RecentSubscriptions
