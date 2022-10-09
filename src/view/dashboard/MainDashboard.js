import React from 'react';
import Follower from './Followers/Follower.component';
import './MainDashboard.scss';
import Overview from './OverView/Overview.component';
import Task from './Task/Task.component';
import TotalSales from './TotalSales/TotalSales.component';
import TotalView from './TotalView/TotalView.component';

function MainDashboard(props) {
    return (
        <div className='main_dashboard'>
            <div className='dashboard_row1'>
              <Overview className='overView'/>
              <TotalSales className='totalSales' />
            </div>
            <div className='dashboard_row2'>        
              <Task className='task' />
              <Follower className='follower' />
              <TotalView className='totalView' />
            </div> 
        </div>
    );
}

export default MainDashboard;