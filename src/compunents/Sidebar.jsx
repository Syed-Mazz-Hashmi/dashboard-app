import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className=" mt-5 ml-[30px] md:ml-[0px]">
                <div className="  text-md  items-center flex flex-col gap-10">
                    <div className=''>
                        <Link to="/dashboard/overview">
                            <img className='size-8 ml-5' src="/assets/Dashboard.png" alt="" />
                            <p  small className='ashgray'>Owerview</p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to="/dashboard/subscription/subscriptionoverview">
                            <img className=' size-8 ml-6 ' src="/assets/subscription.png" alt="" />
                            <p className='ashgray'>Subscription</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/user/userlist">
                            <img className=' size-8 ' src="/assets/user.png" alt="" />
                            <p className='ashgray'>User</p>
                        </Link>
                    </div> 
                    <div>
                        <Link to="/dashboard/location/contrylist">
                            <img className=' size-8 ml-3' src="/assets/location.png" alt="" />
                            <p className='ashgray'>Location</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/ippaddress/ipoverview">
                            <img className=' size-8 ml-5 ' src="/assets/ip-address.png" alt="" />
                            <p className='ashgray'>IppAddress</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/Translation/translation">
                            <img className=' size-8 ml-5 ' src="/assets/transaction.png" alt="" />
                            <p className='ashgray'>Translation</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/storage/storage">
                            <img className=' size-8 ml-3 ' src="/assets/storage.png" alt="" />
                            <p className='ashgray'>Storage</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/product/productlist">
                            <img className='size-8 ml-2 items-center' src="/assets/product.png" alt="" />
                            <p className='ashgray'>Product</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
