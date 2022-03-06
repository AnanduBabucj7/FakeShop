import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [
    {
      title: 'Loading..............',
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRD:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRD:
      return {};
    default:
      return state;
  }
};
