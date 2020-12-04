import axios from 'axios';
import { useState } from 'react';

const NewCard = () => {
  const [wordOrPhrase, setWordOrPhrase] = useState('')
  const [definition, setDefinition] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [category, setCategory] = useState('');


  function handleSubmit(){
    axios.post('http://localhost:1234/api/cards')
    .then(res => 
      console.log(res.data))
  }

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
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select></li>
          <li>category:</li>
         <li><input type="text"
          onChange={(e) => {setCategory(e.target.value)}}/></li>
         

        </ul>
      </div>
        <button onSubmit={handleSubmit}>submit new card</button>
        </>
  )}


export default NewCard;