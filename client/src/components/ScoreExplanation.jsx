import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ScoreExplanation = ({ open, setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Scoring Flashcards</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The scoring system for these cards is as follows:
        </DialogContentText>
          <ul>
            <li>0: Didn't know it or recall it. 😩</li>
            <li>1: Didin't know the card but do recall it. 😲</li>
            <li>2: Didn't know it but wasn't far of. 🤨</li>
            <li>3: Got it eventually. 😊</li>
            <li>4: Got it after a second. 😎</li>
            <li>5: Nailed it! 🥳 </li>
          </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScoreExplanation;
