import React from 'react'
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from '../../Context';

function Navbar() {
  const {darkMode,setDarkMode,setIsDrawerOpen} = useGlobalContext();
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='menuIcon'>

          <MenuIcon onClick={()=> setIsDrawerOpen(true)}  />
        </div>
        <div className="search">
          <input  type="text" placeholder='Search...' />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item" onClick={()=> setDarkMode(prev => !prev)}>
            
            {
              !darkMode ? <DarkModeOutlinedIcon className='icon'/> :<WbSunnyIcon className='icon'/>
            }
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/2220319/pexels-photo-2220319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="young woman" 
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
