import React from 'react';
import './Header.scss';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';

function Header(props) {
    return (
        <div className='main-header'>
          <div className='header-name'>
           CRM DASH
          </div>
          <div className='icon-userName'>
            <span className='icon-notification'><NotificationsNoneOutlinedIcon/></span>
            <span className='icon-userName'> <Avatar sx={{bgcolor: 'red' , width: 24, height: 24 , fontSize: '10px' , margin : '6px'}}>N</Avatar> Niteen Phulekar</span>
          </div>
        </div>
    );
}

export default Header;