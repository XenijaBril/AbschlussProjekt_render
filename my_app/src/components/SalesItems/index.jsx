import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { load_products } from '../../requests/products_req';
import ProductCard from '../ProductCard';
import s from './index.module.css'

export default function SalesItems() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products )

  useEffect(()=> {
    dispatch(load_products)
  }, [])
    return (
    <section className={s.sales_items}>
        {
          products
          .sort(() => 0.5 - Math.random())
          .slice(0, 3) 
          .map(el => <ProductCard key={el.id} {...el} />)  
        }
        
    </section>
  )
}
