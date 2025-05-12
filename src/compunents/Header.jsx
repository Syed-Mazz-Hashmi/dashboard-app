import React from 'react';
import logo from "/assets/headerlogo.png"

const Header = () => {
    return (
        <>
            <div className='container px-5 pt-4 border-color'>
                <div className='container grid grid-cols-2 ' >
                    {/*  right side header*/}
                    <div className=' container flex gap-3 font-dmsans justify-start'>
                        <img src={logo} className='w-[30px] h-[40px]' alt="" />
                        <div className='flex gap-2 mt-1 ashgray text-2xl  '>
                            <h1 className='font-bold '>
                                Clikkle
                            </h1>
                            <h1>
                                Admin
                            </h1>

                        </div>
                        <div className=' font-bold text-2xl text-[#0080FF] ml-5 font-dmsans underline-offset-4' >
                            <h1>
                                Dashboard
                                <hr className=' h-1 rounded-full bg-[#0080FF]' />
                            </h1>
                        </div>
                    </div>
                    {/* left side header  */}
                    <div className='container flex flrx-wrap gap-8 justify-end'>
                        <div className='border-2 rounded-lg border-[blue]'>
                            <img src="/assets/plus.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/search.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/bell.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/fe_app-menu.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/settings.png" alt="" />
                        </div>
                        <div className='border-2 text-white rounded-full border-[blue]'>
                            <h1 className='text-3xl '>
                                RA
                            </h1>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
