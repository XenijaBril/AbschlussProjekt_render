import { loadProductsCategory } from "../store/reducers/products_category"

export const load_products_category =  (category) => {
    return dispatch => {
        fetch(`https://project-backend1-jw2u.onrender.com/categories${category}`)
    .then(resp => resp.json())
    .then(json => dispatch(loadProductsCategory(json))) 
    }
  
}



  

