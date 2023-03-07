import React from 'react'
import saleImg from './media/image 22.png'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function SalesBanner() {
  return (
    <section>
      <div className={s.sales_banner}>
        <div className={s.sale_block}> 
          <h2>Sale-Finale:</h2>
          <p>Up to 70% discont</p>
          <div className={s.sale_btn}>
            <Link to='/products'><button>Sale</button></Link>
            <button>Lear more</button>
          </div>
        </div>
        <img src={saleImg} alt="saleImg" />
      </div>

    </section>

    
  

    
  )
}
