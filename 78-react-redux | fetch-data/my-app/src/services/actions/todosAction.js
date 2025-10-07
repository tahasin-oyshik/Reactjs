import axios from 'axios';
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from '../constants/todosConstant.js';

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({ type: GET_TODOS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, payload: error.message });
  }
};
