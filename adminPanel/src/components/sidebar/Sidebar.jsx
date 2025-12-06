import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import StoreIcon from '@mui/icons-material/Store';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className="top">
                <span className="logo">tatawAdmin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                     <p className="title">LISTS</p>
                    <li>
                        <PeopleIcon className='icon'/>
                        <span>Users</span>
                    </li>

                    <li>
                        <ProductionQuantityLimitsRoundedIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <StoreIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <li>
                        <BarChartIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                     <p className="title">USEFUL</p>
                    <li>
                        <NotificationsIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                     <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <BookIcon className='icon'/>
                        <span>Logs</span>
                    </li>

                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                     <p className="title">USER</p>
                    <li>
                        <AccountBoxIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'/>
                        <span>LogOut</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>
        </div>
    )
}

export default Sidebar