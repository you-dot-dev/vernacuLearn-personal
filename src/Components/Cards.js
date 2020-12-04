import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const Cards = (props) => {

  useEffect(() => {

    axios.get("http://localhost:1234/api/cards")
      .then( (res) => {
       
        props.dispatch({
          type: "UPDATE_CARDS",
          payload: res.data
        })
      })
      .catch( (err) => console.log("err:", err) )

    return () => {
      console.log("tearing down...");
    };
  }, []);

  const cardList = props.cards.map( (card) => {
    return (
      <div className="grocery-list-container">
        <div className="red-line"></div>
        <div className="input-container">
          <h4>{card.word_or_phrase}</h4>
          <button className='pencil-btn'>Pencil icon goes here</button>
        </div>
        <ul id='grocery-list'>
          <li>Definition: {card.definition}</li>
          <li>Part of speech: {card.part_of_speech}</li>
          <li>Difficulty: {card.difficulty}</li>
          <li>Category: {card.category}</li>
        </ul>
      </div>
    );
  })
  return (
    <div>
      <h1 id='grocery-list-title'></h1>
      <h3 id='grocery-status'></h3>
      {cardList}
    </div>
  )
}

export default connect(mapStateToProps)(Cards);