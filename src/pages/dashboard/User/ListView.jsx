import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { MdWindow } from "react-icons/md";
import { Link } from 'react-router-dom';


const ListView = () => {

    return (
        <>
            <div>
                <div>
                    <div className=''>
                        <div>
                            {/* <Link to="/dashboard/subscription/SubscriptionOverview"> */}
                            <h1 className='text-white text-xl font-bold p-3'>
                                UserList
                            </h1>
                            {/* </Link> */}
                        </div>  
                    </div>
                    <div className='border-1 ml-[5px] w-full border-[#292929] rounded-xl'>
                        <div className='border-1 rounded-xl p-3'>
                            <div className='grid grid0-row-2 lg:grid-cols-2 justify-between'>
                                <div className='content-center'>
                                    <h1 className='text-white text-4xl font-bold p-3'>
                                        Userlist
                                        <span className='ashgray text-xs ml-3'>
                                            Row per page : 10
                                        </span>
                                    </h1>
                                </div>
                                <div className='flex flex-wrap justify-end my-3 gap-2 '>
                                    <div className='flex'>
                                        <input className='bg-[#1A1A1A] border border-[#292929] rounded-xl p-2 text-white w-50' type="text" placeholder='Search User' />
                                        <CiSearch className='text-white text-2xl  mt-2  ml-[-30px]' />
                                    </div>
                                    <div>
                                        <button className='bg-[#0080FF] text-white rounded-xl p-2 ml-2 w-20'>
                                            Export
                                        </button>
                                    </div>
                                    <div className='content-center border-[1.5px]  border-[#0080FF] rounded-xl hover:bg-[#0080FF]'>
                                        <IoMenu className='w-10 h-10 p-1 text-[#0080FF] hover:text-white' />
                                    </div>
                                    <Link to="/dashboard/user/filtertab">
                                    <div className='content-center border-[1.5px]  border-[#0080FF] rounded-xl hover:bg-[#0080FF]'>
                                        <BsFillMenuButtonWideFill className='w-10 p-2 h-10  text-[#0080FF] hover:text-white' />
                                    </div>
                                    </Link>
                                    <div className='content-center border-[1.5px]  border-[#0080FF] rounded-xl hover:bg-[#0080FF]'>
                                        <MdWindow className='w-10 h-8  text-[#0080FF] hover:text-white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-1 border-[#414141] rounded-xl text- mx-3'>
                            <div className='grid grid-cols-9 bg-[#302f2f] mx-3 mt-2 p-3 justify-between rounded-lg'>
                                <div className='text-center text-white font-bold py-2 text-xs'>Clients</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>Country</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>Email</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>Registration Date</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>Devices</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>IP Address</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>Subscriptions</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>Storage Usage</div>
                                <div className='text-center text-white font-bold py-2 text-xs'>Status</div>
                            </div>
                            <div className=' p-3 grid grid-cols-9 gap-3 mx-2 '>
                                 <div className='grid grid-rows-10 [&>div]:mt-5 '>
                                    <div className='text-white text-center'>
                                        <div className='flex justify-between '>
                                            <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                                profile
                                            </div>
                                            <div className=''>
                                                <h1>
                                                    name
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className='grid grid-rows-10 [&>div]:mt-5 '>
                                    <div className='text-white text-center'>
                                        <div className='flex justify-between '>
                                            <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                                profile
                                            </div>
                                            <div className=''>
                                                <h1>
                                                    name
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div></div>
                                    <div className='text-white text-center'><div className='flex justify-between '>
                                        <div className='w-8 h-8 bg-[#292929] rounded-full border-2 border-[#00DEC3]'>
                                            profile
                                        </div>
                                        <div className=''>
                                            <h1>
                                                name
                                            </h1>
                                        </div>
                                    </div>
                                    </div>
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

            </div>
        </>
    )
}

export default ListView
