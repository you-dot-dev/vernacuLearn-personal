import {useState} from 'react';

const Cards = () => {



  return (
    <div>
      <h1 id='grocery-list-title'></h1>
      <h3 id='grocery-status'></h3>
      <div class="grocery-list-container">
    <div class="red-line"></div>
    <div class="input-container">
       {/* <input type="text" id='item' />  */}
      <button id='btn'>Pencil icon goes here</button>
    </div>
    <ul id='grocery-list'></ul>
    </div>
    </div>
  )
}

export default Cards;