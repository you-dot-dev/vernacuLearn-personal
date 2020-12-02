import {useState} from 'react';

const Cards = () => {



  return (
    <div>
      <h1 id='grocery-list-title'></h1>
      <h3 id='grocery-status'></h3>
      <div class="grocery-list-container">
    <div class="red-line"></div>
    <div class="input-container">
       <h4>word</h4>
      <button className='pencil-btn'>Pencil icon goes here</button>
    </div>
    <ul id='grocery-list'>
      <li>hello</li>
      <li>hello</li>
    </ul>
    </div>
    </div>
  )
}

export default Cards;