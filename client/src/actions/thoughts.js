import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// action creators are fn that return an action
export const getThoughts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchThoughts();

        dispatch({ type: FETCH_ALL, payload: data });
      } catch (error) {
        console.log(error);
      }
}

export const postThought = (thought) => async (dispatch) => {
  try {
    const { data } = await api.postThought(thought);

      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
}

export const updateThought = (id, thought) => async (dispatch) => {
    try{
      const { data } = await api.updateThought(id, thought);
      
      dispatch({ type: UPDATE, payload: data});
    } catch(error) {
      console.log(error);
    }
}

export const deleteThought = (id) => async (dispatch) => {
  try{
    await api.deleteThought(id);
    
    dispatch({ type: DELETE, payload: id });
  } catch(error) {
    console.log(error);
  }
}

export const likeThought = (id) => async (dispatch) => {
  try{
    const {data } = await api.likeThought(id);
    
    dispatch({ type: LIKE, payload: data});
  } catch(error) {
    console.log(error);
  }
}