import {useState, useEffect, Fragment} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const Cards = (props) => {
  const [cardFilter, setCardFilter] = useState('');

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}/api/cards`)
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

  



  const cardList = props.cards
    .filter( (card) => {
      if(cardFilter.length < 2){
        return true
      } else {
        return card.category.includes(cardFilter)
      }
    })
    .map( (card) => {
    return (
      <Fragment key={card.id}>
      
      <div className="grocery-list-container" style={{marginTop: "5px"}}>
        <div className="red-line"></div>
        <div className="input-container">
          <h4>{card.word_or_phrase}</h4>
          {/*  */}
        </div>
        <ul id='grocery-list'>
          <li>Definition: {card.definition}</li>
          <li>Part of speech: {card.part_of_speech}</li>
          <li>Difficulty: {card.difficulty}</li>
          <li>Category: {card.category}</li>
        </ul>
      </div>
      </Fragment>
    );
  })
  return (
    <div >
      <div style={{textAlign:"center"}}>
        <h2>Filter through by category:</h2>
        <input type="text" 
        onChange={(e) => {setCardFilter(e.target.value)}}/>
      </div>
      <h1 id='grocery-list-title'></h1>
      <h3 id='grocery-status'></h3>
      {cardList}
    </div>
  )
}

export default connect(mapStateToProps)(Cards);