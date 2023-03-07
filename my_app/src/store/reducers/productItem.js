const defaultState = [];

const LOAD_PRODUCT_ITEM = 'LOAD_PRODUCT_ITEM';

export const loadProductItem = payload => ({
    type: LOAD_PRODUCT_ITEM, payload});

export const productItemReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCT_ITEM){
        return  action.payload
    } else {
        return state 
    }
   
}