import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const KanaCard = ({ setCardType, currentCard }) => {
  const onClick = () => {
    setCardType(1);
  };

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
        <Typography variant="h1" component="h1" sx={{ fontSize: '10rem' }}>
          {currentCard.kana}
        </Typography>
        <Button onClick={onClick} variant="contained">
          Show Answer
        </Button>
      </Paper>
    </Box>
  );
};

export default KanaCard;
