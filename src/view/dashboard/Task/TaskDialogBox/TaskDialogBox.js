import  React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch  } from 'react-redux';
import { AddTodoAction } from '../../../../action/TodoAction';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    console.log('hit');
    e.preventDefault();
    dispatch(AddTodoAction({tittle: todoTittle , descpription: todoDescp , status: todoStatus}))
    setTodoStatus(''); setTodoDescp(''); setTodoTittle('');
  };

  const [todoTittle ,setTodoTittle] = useState();
  const [todoDescp ,setTodoDescp] = useState();
  const [todoStatus ,setTodoStatus] = useState();

  const WorkStatus = [
    {label: 'Completed'},
    {label: 'Pending'},
    {label: 'Working'},
   ]

  return (
      <div>
      <Button size="small" variant="contained" onClick={handleClickOpen}>
       Add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add new task
          </DialogContentText>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="tittle"
            required
            label="Tittle"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTodoTittle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTodoDescp(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="Status"
            type="text"
            options={WorkStatus}
            fullWidth
            variant="standard"
            onChange={(e) => setTodoStatus(e.target.value)}

          />
          <Button   onClick={handleClose}>Cancel</Button>
          { (todoTittle && todoStatus) ?  <Button type="submit" onClick={handleClose}>Add</Button> :  <Button type="submit" disabled onClick={handleClose}>Add</Button>}
         
          </form>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
