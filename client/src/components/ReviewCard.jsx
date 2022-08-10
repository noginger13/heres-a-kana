import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ReviewCards = ({ card }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 200
        }
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <div>
          <Typography variant="h1" component="h1" sx={{ fontSize: '2rem' }}>
            {card.kana}
          </Typography>
        </div>
        __________
        <div>
          <Typography variant="h1" component="h1" sx={{ fontSize: '2rem' }}>
            {card.romaji}
          </Typography>
        </div>
      </Paper>
    </Box>
  );
};

export default ReviewCards;
