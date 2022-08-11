import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

//Components
import ReviewCard from './ReviewCard.jsx';

const ReviewView = ({ hiragana, katakana }) => {
  return (
    <Box
      sx={{
        margin: '5px',
        padding: '15px',
        bgcolor: '#cfe8fc',
        height: '100%',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        justifyContent: 'space-around',
        flexDirection: 'column'
      }}
    >
      <div>
        <Typography variant="h4" component="h4">
          Hiragana | ひらがな
        </Typography>
      </div>
      <Box
        sx={{
          padding: '15px',
          bgcolor: '#cfe8fc',
          height: '100%',
          maxWidth: '100%',
          display: 'flex',
          alignItems: 'left',
          overflow: 'auto',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {hiragana.map((card) => {
          return <ReviewCard card={card} key={`${card.type}_${card.id}`} />;
        })}
      </Box>
      <div>
        <Typography variant="h4" component="h4">
          Katakana | カタカナ
        </Typography>
      </div>
      <Box
        sx={{
          padding: '15px',
          bgcolor: '#cfe8fc',
          height: '100%',
          maxWidth: '100%',
          display: 'flex',
          alignItems: 'left',
          overflow: 'auto',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {katakana.map((card) => {
          return <ReviewCard card={card} key={`${card.type}_${card.id}`} />;
        })}
      </Box>
    </Box>
  );
};

export default ReviewView;
