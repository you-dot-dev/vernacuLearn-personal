import axios from 'axios';
import { useState , useEffect, Fragment} from 'react';

const NewCard = (props) => {
  const [wordOrPhrase, setWordOrPhrase] = useState('')
  const [definition, setDefinition] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [category, setCategory] = useState('');
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1234/api/myCards/${props.currentUser.id}`)
    .then(res => {
      console.log('res data from new card', res.data)
      setUserCards(res.data)
    })
  }, [props])

  function handleDelete(e){
    axios.delete('http://localhost:1234/api/cards/:id')
    
  }


  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:1234/api/cards', {word_or_phrase: wordOrPhrase, definition, category, parts_of_speech:partOfSpeech, difficulty, owner_id: props.currentUser.id})
    .then((res) => {
      axios.get(`http://localhost:1234/api/myCards/${props.currentUser.id}`)
      .then(res => {
        setUserCards(res.data);
      })
    }) 
    .catch((err) => {
      console.log('err', err)
    })
  }

  const userCardList = userCards.map((card) => {
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
            <li><button onClick={handleDelete}>delete card</button></li>
          </ul>
        </div>
      </Fragment>
    )
  })

  return(
    <>
    <div className="grocery-list-container">
        <div className="red-line"></div>
        <div className="input-container">
          <h1>word or phrase:</h1>
          <input type="text"
          name="wordOrPhrase"
          onChange={(e) => {setWordOrPhrase(e.target.value)}} />
        </div>
        <ul id='grocery-list'>
         <li>definition:</li>
         <li><input type="text"
          onChange={(e) => {setDefinition(e.target.value)}}/>
         </li>
          <li>part of speech:</li>
         <li><input type="text"
          onChange={(e) => {setPartOfSpeech(e.target.value)}}/></li>
         <li>difficulty:</li>
          <li><select name="" id=""
           onChange={(e) => {setDifficulty(e.target.value)}}>
            <option selected value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select></li>
          <li>category:</li>
         <li><input type="text"
          onChange={(e) => {setCategory(e.target.value)}}/></li>
         

        </ul>
      </div>
        <button onClick={(e)=>{
          console.log("onClick has e:", e);
          e.preventDefault();
          handleSubmit(e);
          }}>add new card</button>
          {userCardList}
        </>
  )}


export default NewCard;