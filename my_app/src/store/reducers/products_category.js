const defaultState = [];

const LOAD_PRODUCTS_CATEGORY = 'LOAD_PRODUCTS_CATEGORY';

export const loadProductsCategory = payload => ({ type: LOAD_PRODUCTS_CATEGORY, payload});

export const ProductsCategoryReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCTS_CATEGORY){
    return action.payload //payloud === feth
  } else {
    return state
  }
}