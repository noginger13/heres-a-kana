import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import TopBar from './TopBar.jsx';
import Main from './Main.jsx';

const App = () => {
  //User Variables
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  //Flashcard Variables
  const [cards, setCards] = useState([
    {
      id: 1,
      user_id: 'sample',
      kana: '',
      romaji: 'A',
      type: 'hiragana',
      interval: 1,
      repitition: 1,
      ease: 2.5
    }
  ]);
  const [cardType, setCardType] = useState(0);
  const [nextReview, setNextReview] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(cards[0]);

  //Gallery Variables
  const [view, setView] = useState(true);
  const [hiragana, setHiragana] = useState([]);
  const [katakana, setKatakana] = useState([]);

  //Get State
  useEffect(() => {
    const config = {
      method: 'get',
      url: '/kana/',
      headers: {}
    };

    axios(config)
      .then((response) => {
        setHiragana(response.data.hiragana);
        setKatakana(response.data.katakana);
        setCards(response.data.hiragana.concat(response.data.katakana));
        setCurrentCard(
          response.data.hiragana.concat(response.data.katakana)[0]
        );
        setNextReview(false);
        setCardIndex(0);
        setCardType(0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [nextReview, view]);

  useEffect(() => {
    const config = {
      method: 'get',
      url: '/user/',
      headers: {}
    };

    axios(config)
      .then((response) => {
        if (response.data === 'yup') {
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TopBar view={view} setView={setView} isLoggedIn={isLoggedIn} />
      <Main
        cards={cards}
        hiragana={hiragana}
        katakana={katakana}
        view={view}
        setView={setView}
        setNextReview={setNextReview}
        cardType={cardType}
        setCardType={setCardType}
        cardIndex={cardIndex}
        setCardIndex={setCardIndex}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
      />
    </>
  );
};

export default App;
