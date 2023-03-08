import { loadProducts } from "../store/reducers/products"

export const load_products = (dispatch) => {
    fetch('https://project-backend1-jw2u.onrender.com/products/all')
    .then(resp => resp.json())
    .then(json => {
        const payloud = json.map(el => ({ 
            ...el,
            hide: false
    }))
    dispatch(loadProducts(payloud))
    })
}
