import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { MdWindow } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';

const UserHeader = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
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
                        <div className='content-center border-[1.5px]  border-[#0080FF] rounded-xl hover:bg-[#0080FF]'>
                            <BsFillMenuButtonWideFill onClick={() => setOpen(true)} className='w-10 p-2 h-10  text-[#0080FF] hover:text-white' />
                        </div>
                        {open && (
                            <div className=" absolute z-50 w-[100%] top-15 md:right-15 " style={{ justifyItems: "end", }}>
                                <div className='items-end w-[90%] md:w-[30%] border-1 rounded-xl border-[#232323] bg-[#141414]'>
                                    <div className='flex justify-between mx-2' >
                                        <div>
                                            <h1 className='text-white text-xl font-bold p-3'>
                                                Filter Tabs
                                            </h1>
                                        </div>
                                        <div className='content-center cursor-pointer' onClick={() => setOpen(false)}>
                                            <ImCross className='text-white' />
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Client
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                               Country
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Email 
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Registration Date
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Device
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                               Ipp Address
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Subscriptions
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Storage Usage
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Role
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Status
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                Action
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 my-4 border-1 border-[#232323] flex  justify-between p-[0.5rem] rounded-sm">
                                        <div className='content-center cursor-pointer'>
                                            <h1 className='text-white text-lg font-bold '>
                                                User ID
                                            </h1>
                                        </div>
                                        <div>
                                            <div class="mt-[2px]">
                                                <div class="relative inline-flex">
                                                    <div class="w-11 h-5">
                                                        <input id="switch-component-ripple-on" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />

                                                        <label for="switch-component-ripple-on" class="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6 peer-checked:border-slate-800">
                                                            <div class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5" data-ripple-dark="true"
                                                            > </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Link to="/dashboard/user/userdetails">
                            <div className='content-center border-[1.5px]  border-[#0080FF] rounded-xl hover:bg-[#0080FF]'>
                                <MdWindow className='w-10 h-10  text-[#0080FF] hover:text-white' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader