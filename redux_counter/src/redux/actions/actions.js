import { INCREMENT, DECREASE } from '../constants/actionTypes';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decreaseAction() {
  return {
    type: DECREASE,
  }
}