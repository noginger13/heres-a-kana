import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const SignupCard = ({ setCardType }) => {
  const onClick = () => {
    setCardType(0);
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
          👋
        </Typography>

        <Button variant="outline" onClick={onClick}>Continue</Button>
        <Button variant="contained" href="/login/">Sign Up or Login</Button>
      </Paper>
    </Box>
  );
};

export default SignupCard;
