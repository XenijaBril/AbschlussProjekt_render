import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount, deleteCard } from '../../store/reducers/cart';
import { RxCross1 } from 'react-icons/rx'
import s from './index.module.css'


export default function CartCard({id, title, image, price, discont_price, count}) {
    const dispatch = useDispatch();
    const increment_count = () => dispatch(incrementCount(id));
    const decrement_count = () => dispatch(decrementCount(id));
    const delete_card = () => dispatch(deleteCard(id));

  return (
    <div className={s.cart}>
        <img src={`http://localhost:3333${image}`} alt={title}/>
        <div className={s.title_count}>
            <p>{title}</p> 
            <div className={s.count}>
                <button onClick={decrement_count}>-</button>
                <p>{count}</p>
                <button onClick={ increment_count }>+</button>              
            </div>
        </div>
        <div className={s.price}>
            <p>{discont_price}€</p>
            <p>{price}€</p>
        </div>
        <p className={s.cross} onClick={delete_card}><RxCross1 /></p>
    </div>
  )
}
