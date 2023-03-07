import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cart';
import { categoriesReducer } from './reducers/categories';
import { productItemReducer } from './reducers/productItem';
import { productsReducer } from './reducers/products';
import { ProductsCategoryReducer } from './reducers/products_category'; 


const rootReducer = combineReducers({
 categories: categoriesReducer,
 products: productsReducer,
 products_category: ProductsCategoryReducer,
 product_item: productItemReducer,
 cart: cartReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));