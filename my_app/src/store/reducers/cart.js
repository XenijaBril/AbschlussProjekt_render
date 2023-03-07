const defaultState = [];

const ADD_TO_CARD = 'ADD_TO_CARD';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const DELETE_CARD = 'DELETE_CARD';
const LOCAL_STORE_CARD = 'LOCAL_STORE_CARD';


export const AddToCart = payload => ({ type: ADD_TO_CARD, payload});
export const incrementCount = payload => ({ type: INCREMENT_COUNT, payload});
export const decrementCount = payload => ({ type: DECREMENT_COUNT, payload});
export const deleteCard = payload => ({
type: DELETE_CARD, payload})
export const localStoreCard = payload => ({
type: LOCAL_STORE_CARD, payload})

const checkProduct = (state, payload) => {
const productInState = state.find(el => el.id === payload.id);
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, {
            ...payload,
            count:1
        }]
    }   
}

export const cartReducer = (state = defaultState, action) => 
{
    if (action.type === ADD_TO_CARD){
        return checkProduct(state, action.payload)
    } else if (action.type === INCREMENT_COUNT) {
        state.find(el => el.id === action.payload).count++
        return [...state]
    } else if (action.type === DECREMENT_COUNT) {
        const target_card = state.find(el => el.id === action.payload)

    target_card.count === 1 
    ? state = state.filter(el => el.id !== action.payload)
    : target_card.count--

    return [...state]
  } else if (action.type === DELETE_CARD) {
    state.find(el => el.id !== action.payload)
    return state.filter(el => el.id !== action.payload)
  } else if (action.type === LOCAL_STORE_CARD) {
    const defaultState = action.payload
    return [...defaultState]
  } else {
    return state
  }
}