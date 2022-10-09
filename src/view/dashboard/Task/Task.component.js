import React from 'react';
import './Task.scss';

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FormDialog from './TaskDialogBox/TaskDialogBox';

import { useDispatch , useSelector } from 'react-redux';
import { RemoveTodoAction } from '../../../action/TodoAction';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button , Chip ,Avatar} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';


function Task(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };

    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;
   

    const dispatch = useDispatch();
    const removeTodo = (todo) => {
        dispatch(RemoveTodoAction(todo))
        handleClose();
    }

  
   let ListItem = todos.map((todo) => 
   { 
    return(
    <div className='main_task_card' >
    <div className='main_task_card_list' key={todo.id.tittle}>
        <div className='main_task_card_list_1'>
            <div className='task_card_list1_content1'>
            <span className='task_card_list1_title'>{todo.todo.tittle}</span>
            <span className='task_card_list1_descp'> {todo.todo.descpription}</span>
            <span className='task_card_list1_task_status'>{todo.todo.status}</span>
            </div>
            <div className='task_card_list1_content2'>
            <span  style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px' , cursor:'pointer'}} onClick={handleClickOpen}> <DeleteIcon /> </span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure you want to Delete
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => removeTodo(todo)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
                {/* <span onClick={() => removeTodo(todo)} style={{margin:'0 10px', height:'20px', width:'20px' , fontSize:'14px' , cursor:'pointer'}}><DeleteIcon /></span> */}
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
   </div>
    )}
    )

    return (
        <div className='main_task_container'>
           <div className='main_task_container_header'>
            <span className='main_task_header_text'>Task List</span>
            {/* <Button variant="contained" onClick={handleClickOpen} size="small">Add New</Button> */}
            <FormDialog />
           </div>  
           <div className='main_task_card_parent'>       
            { todos.length !== 0 
                ? 
                <div> {ListItem} </div> 
                : 
                <div className='todo_card_no_card'> 
                    <div className='_card_no_card_text'>No Task</div>
                </div>
            }
            </div>
        </div>
       
    );
}

export default Task;