import React from 'react'

const Userby = () => {
    return (
        <div className='w-full  border-1 border-[#292929] rounded-xl p-5 mt-5'>
            <div className=' grid grid-cols-2  justify-between'>
                <div classname=' '>
                    <h1 className=' text-white text-2xl lg:text-3xl font-bold'>
                        Use By Country
                    </h1>
                </div>
              <div className='flex justify-end gap-3 '>
                  <div className='flex items-center gap-1 text-[10px]'>
                    <p className='text-[#7C7C7C]'>Showing :</p>
                    <span classname="text-[#00DEC3]">
                        This Month
                    </span>
                </div>
                <div className='flex items-center gap-1 text-[10px]'>
                    <p className='text-[#7C7C7C]'>Showing :</p>
                    <h6 classname="text-[#00DEC3]">
                        Hungary
                    </h6>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-1 mt-2 justify-between text-[10px]'>
                <div className='w-full '>
                    <img src="/assets/Map.png" alt="" />
                </div>
                <div className='text-end text-lg greenish'>
                    <h1>300</h1>
                    <p>Total User</p>
                    <h1>200</h1>
                    <p>Male</p>
                    <h1>100</h1>
                    <p>Female</p>
                </div>
            </div>
        </div>
    )
}

export default Userby
