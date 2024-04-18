import React from 'react';
import {Drawer,Box} from '@mui/material';
import './muidrawer.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

function Muidrawer() {
    const {setIsDrawerOpen,isDrawerOpen,setDarkMode}=useGlobalContext();
  return (
    <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
        <Box width='250px' role='presentation'  className="side">
        <div className='side'>

                <div className="top">
                    <NavLink to='/' style={{textDecoration:'none'}}>
                        <span className="logo">Dashboard</span>
                    </NavLink>
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
                            <NavLink to='/users' style={{textDecoration:'none'}}>
                                <PersonIcon className='icon' />
                                <span>Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/products' style={{textDecoration:'none'}}>
                                <Inventory2OutlinedIcon className='icon'/>
                                <span>Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <PaymentOutlinedIcon className='icon' />
                            <span>Orders</span>
                        </li>
                        <li>
                            <LocalShippingOutlinedIcon className='icon'/>
                            <span>Delivery</span>
                        </li>
                        <p className="title">USEFUL</p>
                        <li>
                            <InsertChartOutlinedIcon className='icon'/>
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsNoneOutlinedIcon className='icon'/>
                            <span>Notifications</span>
                        </li>
                        <p className="title">SERVICE</p>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                            <span>System health</span>
                        </li>
                        <li>
                            <PsychologyOutlinedIcon className='icon'/>
                            <span>Logs</span>
                        </li>
                        <li>
                            <SettingsIcon className='icon'/>
                            <span>Settings</span>
                        </li>
                        <p className="title">USER</p>
                        <li>
                            <AccountCircleOutlinedIcon className='icon'/>
                            <span>Profile</span>
                        </li>
                        <li>
                            <ExitToAppOutlinedIcon className='icon'/>
                            <span>Log out</span>
                        </li>
                    </ul>
                </div>

                <div className="bottom">
                <div className="coloroption" onClick={()=> setDarkMode(false)}></div>
                <div className="coloroption" onClick={()=> setDarkMode(true)}></div>
                </div>

        </div>
        </Box>
    </Drawer>
  )
}

export default Muidrawer;
