import axios from 'axios';
import { useState , useEffect, Fragment} from 'react';
import { Redirect, useParams } from 'react-router-dom';

const EditCard = (props) => {
  console.log("editCard props:", props);
  const { cardId } = useParams();
  console.log("editCard cardId:", cardId);
  const [wordOrPhrase, setWordOrPhrase] = useState('')
  const [definition, setDefinition] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [category, setCategory] = useState('');
  const [formSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/api/myCards/${props.currentUser.id}/${cardId}`)
      .then( (res) => {
        console.log("EditCard useEffect res.data", res.data);
        const [myCard] = res.data;
        console.log("myCard:", myCard)
        setWordOrPhrase(myCard.word_or_phrase);
        setDefinition(myCard.definition);
        setDifficulty(myCard.difficulty);
        setPartOfSpeech(myCard.part_of_speech);
        setCategory(myCard.category);
      })
      .catch( (err) => {console.log("EditCard useEffect err:", err)});

    return () => {
      /* cleanup function */
      console.log("component unmounting")
    };
  }, [cardId, props]);

  function handleDelete(){

    axios.delete(`${process.env.REACT_APP_API_URL}/api/cards/${cardId}`)
    .then( (res) => {
      console.log("handleDelete res:", res);
      /*updateCards()*/
    })
    .catch( (err) => {console.log("handleDelete err:", err)})

  }



  function handleSubmit(e){
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/api/myCards/${props.currentUser.id}/${cardId}`, {word_or_phrase: wordOrPhrase, definition, category, part_of_speech:partOfSpeech, difficulty, owner_id: props.currentUser.id})
    .then((res) => {
      console.log("handle submit res:", res);
      setSubmitted(true);
      /* updateCards() */

    }) 
    .catch((err) => {
      console.log('err', err)
    })
  }

  /*const userCardList = userCards.map((card) => {
    return (
      <Fragment>
        <div className="grocery-list-container">
          <div className="red-line"></div>
          <div className="input-container">
            <h4>{card.word_or_phrase}</h4>
            <button className="pencil-btn">Pencil</button>
          </div>
          <ul className="grocery-list">
            <li>Definition: {card.definition}</li>
            <li>Part Of Speech: {card.part_of_speech}</li>
            <li>Difficulty: {card.difficulty}</li>
            <li>Category: {card.category}</li>
            <li><button onClick={(e)=>{console.log("card:", card);handleDelete(card.id)}}>delete card</button></li>
          </ul>
        </div>
      </Fragment>
    )
  })
  */

  return(
    <>
    { formSubmitted ? <Redirect to="/NewCard" /> : null }
    <div className="grocery-list-container">
        <div className="red-line"></div>
        <div className="input-container">
          <h1>word or phrase:</h1>
          <input type="text"
          name="wordOrPhrase" value={wordOrPhrase}
          onChange={(e) => {setWordOrPhrase(e.target.value)}} />
        </div>
        <ul id='grocery-list'>
         <li>definition:</li>
         <li><input type="text" value={definition}
          onChange={(e) => {setDefinition(e.target.value)}}/>
         </li>
          <li>part of speech:</li>
         <li><input type="text" value={partOfSpeech}
          onChange={(e) => {setPartOfSpeech(e.target.value)}}/></li>
         <li>difficulty:</li>
          <li><select name="" id="" value={difficulty}
           onChange={(e) => {setDifficulty(e.target.value)}}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select></li>
          <li>category:</li>
         <li><input type="text" value={category}
          onChange={(e) => {setCategory(e.target.value)}}/></li>
         

        </ul>
      </div>
        <button onClick={(e)=>{
          console.log("onClick has e:", e);
          e.preventDefault();
          handleSubmit(e);
          }}>Submit Changes</button>
          
        </>
  )}


export default EditCard;