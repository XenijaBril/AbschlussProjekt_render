import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../store/reducers/cart';

export default function ProductCard({id, title, image, price, discont_price}) {

  const product_url =`/products/${id}`

  const discount = Math.round(((price - discont_price) / price) * 100);

  const dispatch = useDispatch();
  const add_to_cart = () => dispatch(AddToCart({id, title, image, price, discont_price})) //cart


  return (
    <div className={s.product_card}>
      <div>
         <Link to={product_url}><img src={`http://localhost:3333${image}`} alt={title} /></Link>
         <button onClick={add_to_cart}>Add to cart</button>
      </div>
      <div className={s.price}>
        <p>{discont_price}€</p>
        <p>{price}€</p>
        <p>{discount}%</p>
      </div> 
      <Link to={product_url}><p className={s.title}>{title}</p></Link>   
    </div>
  )
}
