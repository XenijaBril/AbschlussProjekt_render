const defaultState = [];

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const SEARCH_PRICE = 'SEARCH_PRICE';
let first_state = [];

export const loadProducts = payload => ({ type: LOAD_PRODUCTS, payload});
export const sortProducts = payload => ({ type: SORT_PRODUCTS, payload});
export const searchPrice = payload => ({ type: SEARCH_PRICE, payload});

export const productsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS){
        first_state = action.payload
        return action.payload
    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'default') {
            return first_state
        } else if (typeof state[0][action.payload] === 'string') {
        return [...state].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        } else {
        return [...state].sort((a,b) => a[action.payload] - b[action.payload])
        }
    } else if (action.type === SEARCH_PRICE){
        const { min_value, max_value } = action.payload;
        return state.map(el => {
          if (el.discont_price >= min_value && el.discont_price <= max_value){
            el.hide = false
          } else {
            el.hide = true
          }
          return el
        })
    } else {
       return state   
    }
}
