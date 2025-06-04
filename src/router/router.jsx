
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/front/Home';
import About from '../pages/front/About';
// import Overview from '../pages/dashboard/Subscription/Overview';
import DashboardLayout from '../layouts/DashboardLayout';
import Overview from '../pages/dashboard/Overview/Overview';
import ListView from '../pages/dashboard/User/ListView';
import Contrylist from '../pages/dashboard/Locations/Contrylist';
// import Translation from '../pages/dashboard/Translation/translation';
import Productlist from '../pages/dashboard/Product/Productlist';
import Storage from '../pages/dashboard/Storage/Storage';
import SubscriptionOverview from '../pages/dashboard/subscription/SubscriptionOverview';
import RecentSubscriptions from '../pages/dashboard/subscription/RecentSubscriptions';
import FilterTab from '../pages/dashboard/User/FilterTab';
import UserDetails from '../pages/dashboard/User/UserDetails';
import UserProfile from '../pages/dashboard/User/UserProfile';
const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/dashboard/' element={<DashboardLayout />} >
                    <Route path='/dashboard/overview' element={<Overview />} />
                    <Route path='/dashboard/subscription' >
                        <Route path='/dashboard/subscription/subscriptionoverview' element={<SubscriptionOverview />} />
                        <Route path='/dashboard/subscription/subscriptionlist' element={<RecentSubscriptions />} />
                    </Route>
                    <Route path='/dashboard/user' >
                        <Route path='/dashboard/user/userlist' element={<ListView />} />
                        <Route path='/dashboard/user/filterTab' element={<FilterTab />} />
                        <Route path='/dashboard/user/userdetails' element={<UserDetails />} />
                        <Route path='/dashboard/user/userprofile' element={<UserProfile />} />
                    </Route>
                    <Route path='/dashboard/location' >
                        <Route path='/dashboard/location/contrylist' element={<Contrylist />} />
                    </Route>
                    {/* <Route path='/dashboard/Translation/' >
                        <Route path='/dashboard/transaction/transaction' element={<Translation />} />
                    </Route> */}
                    <Route path='/dashboard/storage' >
                        <Route path='/dashboard/storage/storage' element={<Storage />} />
                    </Route>
                    <Route path='/dashboard/product' >
                        <Route path='/dashboard/product/productlist' element={<Productlist />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers