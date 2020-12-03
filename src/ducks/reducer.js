import axios from 'axios';
const initialState = {
  cards: []
}

const UPDATE_CARDS = 'UPDATE_CARDS'

export default function cardReducer(state, action) {
  if (typeof state === 'undefined') {
    state = {
      cards: []
    } 
  }
  const {type, payload} = action;
  switch(type) {
    case UPDATE_CARDS:
      console.log("The payload:", payload)
      return {
        ...state,
        cards: payload
      }
    default:
      return state;
  }
 
}