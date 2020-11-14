import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import firebase from 'firebase/app';
import 'firebase/database';
import { DB_CONFIG } from './Config/Firebase/db_config';

function App(props) {

  // Initialize Firebase, check if it hasn't already been
  if (firebase.apps.length === 0) {
    firebase.initializeApp(DB_CONFIG);
  }
  let database = firebase.database().ref().child('cards');
  const [cards, setCard] = useState([]);
  const [currentCard, setCurrentCard] = useState({});

  function getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return (card);
  }


  function updateCard() {
    const currentCards = cards;
   
    setCurrentCard(getRandomCard(currentCards));
  }
  

  useEffect(()=> {
    const currentCards = cards;
    //retrieve list of items, push into currentCards array
    database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        english: snap.val().english,
        hanzi: snap.val().hanzi,
        pinyin: snap.val().pinyin
      });
    
    
    setCard(currentCards);
    //grap a random card from currentCards and return it
    setCurrentCard(getRandomCard(currentCards));
    });
 
   
  // eslint-disable-next-line
  }, []);

 

  return (
    <div className="App">
      <div className="cardRow">
        <Card english={currentCard.english} 
              hanzi={currentCard.hanzi}
              pinyin={currentCard.pinyin}
        />
      </div>
      <div className="buttonRow">
        {/* Binding drawCard attribute to updateCard function */}
        <DrawButton drawCard={updateCard}/>
      </div>
    </div>
  );
}

export default App;
