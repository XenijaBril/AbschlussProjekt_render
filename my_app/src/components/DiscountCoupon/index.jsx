import React from 'react'
import s from './index.module.css'
import imgCoupon from './media/image 3.png'


export default function DiscountCoupon() {
  return (
    <section className={s.disc_coupon} id="coupon">
      <img src={imgCoupon} alt="imgCoupon" />
      <div className={s.disc_coupon_info}>
        <div className={s.disc_coupon_text}>
          <p className={s.disc_coupon_procent_sale}>Sale 5%</p>
          <p className={s.disc_coupon_about_sale}>for first ordner</p>
        </div>

        <form className={s.info_form_block}>
            <input type="nummber" placeholder='+49 999999999' />
            <button>Get a discount</button>
        </form>
      </div>
    </section>
    
  )
}
