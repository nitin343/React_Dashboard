import React from 'react';
import './TotalView.scss';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddGoalStatus from './AddGoalStatus';
import { useSelector } from 'react-redux';


function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };



function TotalView(props) {
    
        const [progress, setProgress] = React.useState(0);
        const totalView = 20;
        const Goal = useSelector((state) => state.Goal);
        const { goal } = Goal;
        const {percentage} = Goal;

      
        React.useEffect(() => {
          const timer = setInterval(() => {
            setProgress((prevProgress) =>
              prevProgress >= 100 ? 0 : prevProgress + 10
            );
          }, 800);
      
          return () => {
            clearInterval(timer);
          };
        }, []);

    return (
      <div className='main_view_container'>
            <div className='main_view_header1'>
                <div className='main_view_goal'>View Goals</div>
          
                <AddGoalStatus />
            </div>
            
            <div className='main_totalView_progress'>
               <div>
                <div className='main_totalView_labeled_progress'>
                <CircularProgressWithLabel className="totalView_CircularProgressWithLabel" variant="determinate" value={percentage}/>
                </div>
                <div className='main_totalView_text'>
                    <span className='main_totalView_view_made_today'>Total views made today</span>
                    <span className='main_totalView_2400'>{totalView}</span>
                </div>
               </div>
            </div>
            <div className='main_totalView_footer'>
                <span className='main_totalView_footer_goalStatus'>
                    <span className='main_totalView_footer_text'>{goal ? goal : 480 } views</span>
                    <span className='main_totalView_footer_Status'>Goal status</span>
                </span>
                <span className='main_totalView_footer_goalStatus'>
                    <span className='main_totalView_footer_text'>3.5 sec</span>
                    <span className='main_totalView_footer_Status'>Avg visit time</span>
                </span>
                <span className='main_totalView_footer_goalStatus'>
                    <span className='main_totalView_footer_text'>3404</span>
                    <span className='main_totalView_footer_Status'>Social status</span>
                </span>
            </div>
        </div>
    );
}

export default TotalView;