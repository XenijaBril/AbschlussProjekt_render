import { loadProductItem } from "../store/reducers/productItem"

export const load_product =  id => {
    return dispatch => {
    fetch(`https://project-backend1-jw2u.onrender.com/products/${id}`)
    .then(resp => resp.json())
    .then(json => dispatch(loadProductItem(json[0])))
    }
}
