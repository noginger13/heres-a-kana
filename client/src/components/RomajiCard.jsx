import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const RomajiCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 500
        }
      }}
    >
      <Paper elevation={3} sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
        <Typography variant="h1" component="h1" sx={{ fontSize: '12rem' }}>
          A
        </Typography>


          <ButtonGroup
            variant="contained"
            aria-label="flashcard understanding rating"
          >
            <Button>0</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
          </ButtonGroup>
      </Paper>
    </Box>
  );
};

export default RomajiCard;
