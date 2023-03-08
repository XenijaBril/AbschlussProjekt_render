import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { load_product } from '../../requests/productItem_req';
import s from './index.module.css'
import { AddToCart } from '../../store/reducers/cart';



export default function ProductDescrPage() {
 
  const { id } = useParams();
  const dispatch = useDispatch();
  const product_item = useSelector(state => state.product_item);

  //console.log(product_item);
  const add_to_cart = () => dispatch(AddToCart({id: +id, title, image, discont_price})); //+id(number) double product

  useEffect(() => {
    dispatch(load_product(id))
  },[]);
 
  const { title, description, price, discont_price, image } = product_item;

  const discont = Math.round(((price - discont_price) / price) * 100);
  
  return (
    <div className={s.product_descr}>
      <div> 
        <p className={s.title}>{title}</p>
        <img src={`https://project-backend1-jw2u.onrender.com${image}`} alt={title} />
      </div>
      <div className={s.price_descr}>
        <div className={s.price}>
          <p>{discont_price}€</p>
          <p>{price}€</p>
          <p>{discont}%</p>
        </div>       
        <button onClick={add_to_cart}>TO CART</button>
        <p>Description</p>
        <p>{description}</p>
      </div>
    </div>    
    
  )
}
