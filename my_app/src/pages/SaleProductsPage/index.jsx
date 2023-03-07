import React from 'react'
import { useDispatch } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import { sortProducts } from '../../store/reducers/products'
import { searchPrice } from '../../store/reducers/products'
import s from './index.module.css'

export default function SaleProductsPage() {
  const dispatch = useDispatch();
  
  const sort_products = event => dispatch(sortProducts(event.target.value));
  
  const search = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch((searchPrice({min_value, max_value})))
  }
    
  return (
    <div>
      <p className={s.title_sale}>Sale</p>
      <div className={s.sort_block}>
        <form className={s.sort_price} onSubmit={search}>
          <p>Price</p>
          <input type="number" placeholder='from' name='min' />
          <input type="number" placeholder='to' name='max'/>
          <button>Search</button>
        </form>
        <div className={s.sort_value}>
          <p>Sort by:</p>
          <select onInput={sort_products}>
            <option value="default">default</option>
            <option value="title">title</option>
            <option value="price">price</option>
          </select>
        </div>
      </div>    
      <ProductsContainer />
    </div>
  )
}
