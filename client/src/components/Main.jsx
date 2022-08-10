import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

//Components
import KanaCard from './KanaCard.jsx';
import RomajiCard from './RomajiCard.jsx';
import FinalCard from './FinalCard.jsx';

const Main = ({
  cards,
  hiragana,
  katakana,
  view,
  setView,
  setNextReview,
  cardType,
  setCardType,
  cardIndex,
  setCardIndex,
  setCurrentCard,
  currentCard
}) => {

  useEffect(() => {
    setCurrentCard(cards[cardIndex]);
  }, [cardIndex]);

  let card;
  if (cardType === 0) {
    card = <KanaCard currentCard={currentCard} setCardType={setCardType} />;
  } else if (cardType === 1) {
    card = (
      <RomajiCard
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        cardIndex={cardIndex}
        setCardIndex={setCardIndex}
        setCardType={setCardType}
        cards={cards}
      />
    );
  } else if (cardType === 2) {
    card = <FinalCard setNextReview={setNextReview} />;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="90%" sx={{ padding: '15px' }}>
        <Box
          sx={{
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
          {card}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Main;
