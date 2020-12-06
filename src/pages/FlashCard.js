import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import DrawButton from '../Button/Button';
import './FlashCard.css';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import { DB_CONFIG } from './Config/Firebase/db_config';
//import card from '../Data/hsk1.json';

function FlashCard(props) {

  // Initialize Firebase, check if it hasn't already been
  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(DB_CONFIG);
  // }
  // let database = firebase.database().ref().child('cards');
  let json = require(`../Data/${props.level}.json`);

  let database = json.map(element=> {
    return element;
  });

  const [cardNumber, setCardNumber] = useState(0);
  const [cards, setCard] = useState([]);
  const [currentCard, setCurrentCard] = useState({});

  function getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return (card);
  }


  function updateCard() {
    const currentCards = cards;
    setCardNumber(cardNumber + 1);
    setCurrentCard(getRandomCard(currentCards));
  }
  

  useEffect(()=> {
    const currentCards = cards;
    //retrieve list of items, push into currentCards array
    // database.on('child_added', snap => {
    //   currentCards.push({
    //     id: snap.key,
    //     english: snap.val().english,
    //     hanzi: snap.val().hanzi,
    //     pinyin: snap.val().pinyin
    //   });
    // database.map((snap)=> {
    //   return snap.english = snap.english.toString().replace(/,/g, ', ');
    // });

    database.forEach(snap=> {
      currentCards.push({
        id: snap.key,
        english: snap.english[0],
        hanzi: snap.hanzi,
        pinyin: snap.pinyin
      });
    
    setCard(currentCards);
    //grap a random card from currentCards and return it
    setCurrentCard(getRandomCard(currentCards));
    });
 
   
  // eslint-disable-next-line
  }, []);

  return (
    <div className="flashcard container" style={{textAlign: "center"}}>
      <div className="cardRow">
        <Card english={currentCard.english} 
              hanzi={currentCard.hanzi}
              pinyin={currentCard.pinyin}
        />
      </div>
      <div className="progressBar">
        <p className="cardNumber">{cardNumber} / {database.length}</p>
      </div>
      <div className="buttonRow">
        {/* Binding drawCard attribute to updateCard function */}
        <DrawButton handleClick={updateCard} label="Draw Card"/>
      </div>
    </div>
  );
}

export default FlashCard;
