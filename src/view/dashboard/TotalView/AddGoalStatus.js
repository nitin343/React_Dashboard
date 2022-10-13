import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { AddGoal } from '../../../action/NewGoal';

export default function AddGoalStatus() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [addGoal , setAddGoal] = React.useState('')
  
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    console.log('hit');
    e.preventDefault();
    dispatch(AddGoal(addGoal))
    setOpen(false)
    
  };

  return (
    <div >
      <Button variant="contained" size="small"  onClick={handleClickOpen}>
        Add Goal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Goal Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Add a new goal status
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"   
            label="Goal Status"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setAddGoal(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' onClick={onSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
