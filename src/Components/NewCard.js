import { useState } from 'react';

const NewCard = () => {
  const [wordOrPhrase, setWordOrPhrase] = useState('')
  const [defintion, setDefinition] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [partOfSpeech, setPartOfSpeech] = useState('')


  return(
    <div className="grocery-list-container">
        <div className="red-line"></div>
        <div className="input-container">
          <h1>word or phrase:</h1>
          <input type="text"/>
        </div>
        <ul id='grocery-list'>
         <h3>definition:</h3>
         <input type="text"/>
        </ul>
      </div>
  )}


export default NewCard;