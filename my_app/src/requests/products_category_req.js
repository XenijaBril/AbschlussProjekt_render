import { loadProductsCategory } from "../store/reducers/products_category"

export const load_products_category =  (category) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${category}`)
    .then(resp => resp.json())
    .then(json => dispatch(loadProductsCategory(json))) 
    }
  
}



  

