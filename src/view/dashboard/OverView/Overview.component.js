import React from 'react';
import './Overview.scss';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
 

function Overview(props) {
    return (
        <div className='main_overview_container'>
           <div className='main_container_header'>
            <span className='text_overview'>
                Overview
            </span>
            <Button sx={{color:' #27b327cf' , border: '1px solid #27b327cf' , textTransform: 'capitalize'}} size="small" variant="outlined">Check now</Button>
           </div>
           <Card className='main_container_card'>
               {/* <CardContent>
                <EmojiEventsTwoToneIcon className='trophy_image' />
               </CardContent> */}
               <CardContent className='topic_card'>
                 <Typography className='topic_card_typo' gutterBottom variant="h5" sx={{fontWeight: 500 , fontSize: '24px'}} color="#f1dbdb" component="div">
                   Congratulation Niteen,
                 </Typography>
                 <Typography className='topic_card_typo_descp' variant="body2" sx={{fontWeight: 300 }} color="#97a9b9">
                   You've completed the profile verification.
                   Its very easy to convert your points to
                   cash now
                 </Typography>
               </CardContent>
               <CardContent>
                 <div className='point_card'>
                    <div className='point_number'>
                       <span className='number'>95</span>
                       <span className='points'>Points</span>
                    </div>
                    <div className='explore'>
                       EXPLORE
                    </div>
                 </div>
               </CardContent>
             </Card>
        </div>
    );
}

export default Overview;