import React from 'react';
import './Task.scss';
import {Button , Chip ,Avatar} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';


function Task(props) {

    let todos = [
        {tittle: 'shoping' , description: 'andhere bazar' , status: 'pending' , name: 'niteen'} ,
        {tittle: 'vacation' , description: 'Kodachadri trip plan' , status: 'completed' , name: 'Johnny'} ,
        {tittle: 'vacation' , description: 'Kodachadri trip plan' , status: 'completed' , name: 'Johnny'} 
    ];

    let ListItem = todos.map((todo) => 
   { return(
    <div className='main_task_card'>
    <div className='main_task_card_list'>
        <div className='main_task_card_list_1'>
            <div className='task_card_list1_content1'>
            <span className='task_card_list1_title'>{todo.tittle}</span>
            <span className='task_card_list1_descp'> {todo.description}</span>
            <span className='task_card_list1_task_status'>{todo.status}</span>
            </div>
            <div className='task_card_list1_content2'>
                <span style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px'}}><ModeEditOutlineOutlinedIcon/></span>
                <span style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px'}}><DeleteIcon /></span>
            </div>
        </div> 
        <div className='main_task_card_list_2'>
            <div className='task_card_list_2_footer'>
                <span className='card_list_2_footer_status'>Task Status</span>
            </div>
            <div className='task_card_list_2_footer'>
                <span className='card_list_2_footer_status'><Avatar style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px'}}>N</Avatar>{todo.name}</span>
            </div>
            <div className='task_card_list_2_footer'>
                <span className='card_list_2_footer_status'> <AccessTimeIcon style={{margin:'0 5px', height:'20px', width:'20px'}}/>30 Nov 2022</span>
            </div>
        </div> 
    </div>
   </div>
    )}
    )

    return (
        <div className='main_task_container'>
        

           <div className='main_task_container_header'>
            <span className='main_task_header_text'>Task List</span>
            <Button variant="contained" size="small">Add New</Button>
           </div>  
           <div className='main_task_card_parent'>       
           {/* <div className='main_task_card'>
            <div className='main_task_card_list'>
                <div className='main_task_card_list_1'>
                    <div className='task_card_list1_content1'>
                    <span className='task_card_list1_title'>To do List title</span>
                    <span className='task_card_list1_descp'> To do List desciption </span>
                    <span className='task_card_list1_task_status'>completed</span>
                    </div>
                    <div className='task_card_list1_content2'>
                        <span style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px'}}><ModeEditOutlineOutlinedIcon/></span>
                        <span style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px'}}><DeleteIcon /></span>
                    </div>
                </div> 
                <div className='main_task_card_list_2'>
                    <div className='task_card_list_2_footer'>
                        <span className='card_list_2_footer_status'>Task Status</span>
                    </div>
                    <div className='task_card_list_2_footer'>
                        <span className='card_list_2_footer_status'><Avatar style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px'}}>N</Avatar>Niteen</span>
                    </div>
                    <div className='task_card_list_2_footer'>
                        <span className='card_list_2_footer_status'> <AccessTimeIcon style={{margin:'0 5px', height:'20px', width:'20px'}}/>30 Nov 2022</span>
                    </div>
                </div> 
            </div>
           </div> */}
            {ListItem}
            </div>
        </div>
    );
}

export default Task;