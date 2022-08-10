import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

//Components
import FlashCardView from './FlashCardView.jsx';
import ReviewView from './ReviewView.jsx';

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
  let content;
  if (view) {
    content = (
      <FlashCardView
        cards={cards}
        setNextReview={setNextReview}
        cardType={cardType}
        setCardType={setCardType}
        cardIndex={cardIndex}
        setCardIndex={setCardIndex}
        setCurrentCard={setCurrentCard}
        currentCard={currentCard}
      />
    );
  } else {
    content = <ReviewView hiragana={hiragana} katakana={katakana} />;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="90%" sx={{ flexWrap: 'wrap', padding: '15px' }}>
        {content}
      </Container>
    </React.Fragment>
  );
};

export default Main;
