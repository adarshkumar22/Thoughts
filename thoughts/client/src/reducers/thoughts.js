import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (thoughts = [], action) => {
  switch (action.type) {
    case DELETE: 
      return thoughts.filter((thought) => thought._id !== action.payload);
    case LIKE:
    case UPDATE:
      return thoughts.map((thought) => thought._id === action.payload._id ? action.payload : thought);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...thoughts, action.payload];
    default:
      return thoughts;
  }
};