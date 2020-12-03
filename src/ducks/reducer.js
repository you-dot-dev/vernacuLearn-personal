import axios from 'axios';
const initialState = {
  cards: []
}


export default function reducer(state, action) {
  if (typeof state === 'undefined') {
    state = {
      cards: []
    } 
  }

  switch(action.type) {
    case 'UPDATE_CARDS':
      console.log("The payload:", action.payload)
      return {
        ...state,
        cards: action.payload
      }
    default:
      return state;
  }
 
}