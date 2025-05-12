import React from 'react'
import Navbar from '../compunents/Navbar'
import { Outlet } from 'react-router-dom'
// import Sidebar from '../compunents/sidebar'
import Sidebar from '../compunents/Sidebar'
import Header from '../compunents/Header'

const DashboardLayout = () => {
    return (
        <div>
            {/* <div> */}
            <div className=''>
                <Header/>
            </div>
            <div className='grid grid-cols-12'>
                <div className='col-span-1'>
                    <Sidebar />
                </div>
                <div className='col-span-11 mx-3'>
                    <Outlet />
                </div>
            </div>
        </div>
        // </div>
    )
}

export default DashboardLayout
