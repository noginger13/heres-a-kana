import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import TopBar from './TopBar.jsx';
import Main from './Main.jsx';

const App = () => {
  //User Variables
  const [isNotLoggedIn, setLoggedIn] = useState(true);

  //Flashcard Variables
  const [cards, setCards] = useState({});
  const [currentCard, setCard] = useState(0);

  //Gallery Variables
  const [view, setView] = useState(false);
  const [hiragana, setHiragana] = useState([]);
  const [katakana, setKatakana] = useState([]);

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

        if (
          response.data.hiragana[0]['user_id'] !== 'sample' &&
          response.data.hiragana.length !== 0
        ) {
          setLoggedIn(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TopBar view={view} setView={setView} isNotLoggedIn={isNotLoggedIn} />
      <Main
        cards={cards}
        currentCard={currentCard}
        setCard={setCard}
        hiragana={hiragana}
        katakana={katakana}
        view={view}
        setView={setView}
      />
    </>
  );
};

export default App;
