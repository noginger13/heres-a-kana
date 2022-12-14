import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//Components
import ScoreExplanation from './ScoreExplanation.jsx';

const RomajiCard = ({
  currentCard,
  setCurrentCard,
  cardIndex,
  setCardIndex,
  setCardType,
  cards
}) => {
  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    if (currentCard.user_id !== 'sample') {
      currentCard.score = Number(e.target.value);
      postScore(currentCard);
      setCardIndex(cardIndex + 1);
      if (cardIndex === cards.length - 1) {
        setCardType(2);
      } else {
        setCardType(0);
      }
    } else {
      setCardIndex(cardIndex + 1);
      if (cardIndex === cards.length - 1) {
        setCardType(2);
      } else if (cardIndex % 4 === 0) {
        setCardType(3);
      } else {
        setCardType(0);
      }
    }
  };

  useEffect(() => {
    if (cardIndex === 0 && currentCard.user_id === 'sample') {
      setOpen(true);
    }
  }, []);

  const postScore = (card) => {
    var data = JSON.stringify(card);

    var config = {
      method: 'post',
      url: '/kana/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <div>
          <Typography variant="h1" component="h1" sx={{ fontSize: '10rem' }}>
            {currentCard.romaji}
          </Typography>
        </div>
        <div>
          <ButtonGroup
            variant="contained"
            aria-label="flashcard understanding rating"
          >
            <Button onClick={onClick} value="0">
              0
            </Button>
            <Button onClick={onClick} value="1">
              1
            </Button>
            <Button onClick={onClick} value="2">
              2
            </Button>
            <Button onClick={onClick} value="3">
              3
            </Button>
            <Button onClick={onClick} value="4">
              4
            </Button>
            <Button onClick={onClick} value="5">
              5
            </Button>
          </ButtonGroup>
          <ScoreExplanation open={open} setOpen={setOpen} />
        </div>
      </Paper>
    </Box>
  );
};

export default RomajiCard;
