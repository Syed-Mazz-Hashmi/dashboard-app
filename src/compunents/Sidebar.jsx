import { Link } from 'react-router-dom'
import { MdOutlineSdStorage } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import { AiOutlineProduct } from "react-icons/ai";
import { PiNewspaperClipping } from "react-icons/pi";


const Sidebar = () => {
    return (
        <>
            <div className=" mt-5 ml-[30px] md:ml-[0px]">
                <div className="  text-md  items-center flex flex-col gap-10">
                    <div className=''>
                        <Link to="/dashboard/overview">
                            <MdOutlineDashboard className=' size-8 ml-5 text-white'/>
                            <p  small className='ashgray'>Owerview</p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to="/dashboard/subscription/subscriptionoverview">
                            <MdOutlineSubscriptions className=' size-8 ml-7 text-white'/>
                            <p className='ashgray'>Subscription</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/user/userlist">
                            <FaUserCheck className='text-white size-8 ml-2'/>
                            <p className='ashgray'>User</p>
                        </Link>
                    </div> 
                    <div>
                        <Link to="/dashboard/location/contrylist">
                            <MdLocationOn className='text-white size-8 ml-3 '/>
                            <p className='ashgray'>Location</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/ippaddress/ipoverview">
                            <PiNewspaperClipping className='text-white size-8 ml-5 '/>
                            <p className='ashgray'>IppAddress</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/Translation/translation">
                            <SiGoogletranslate className='text-white size-8 ml-5 '/>
                            <p className='ashgray'>Translation</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/storage/storage">
                            <MdOutlineSdStorage className=' size-8 ml-2 text-white' />
                            <p className='ashgray'>Storage</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/product/productlist">
                            <AiOutlineProduct className='text-white size-8 ml-2'/>
                            <p className='ashgray'>Product</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
