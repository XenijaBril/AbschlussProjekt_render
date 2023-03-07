import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import CartCard from '../../components/CartCard';
import s from './index.module.css';



export default function CartPage() {

  const cart = useSelector(state => state.cart)
  
  const total = (cart.reduce((prev, {discont_price, count}) => prev + discont_price * count, 0).toFixed(2));
  //console.log(cart);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };

  const phoneRegister = register("phone", {
    required: "* Mandatory field",
    pattern: {
      value: /^\+49\d{11}$/,
      message: "* Not valid phone-forman",
    },
  });

  return (
    <div className={s.cart}>
      {
        cart.length === 0 
        ? <p>The cart is empty...</p>
        : <div className={s.title_count}>
            {
              cart.map(el => <CartCard key={el.id} {...el}/>)
            }
          </div>
      }      
      <form className={s.order_details_form} onSubmit={handleSubmit(submit)}>
        <p className={s.title_form}>Order details</p>
        <div className={s.total}>
          <p>Total: </p>
          <p>{total}<span>€</span></p>
        </div>
        <div className={s.inp_btn}>
          <input type='nummber'
            name='phone'
            placeholder='Phone number' 
            {...phoneRegister}
          />
          <button>Order</button> 
        </div>     
      </form>
    </div>
  )
}
