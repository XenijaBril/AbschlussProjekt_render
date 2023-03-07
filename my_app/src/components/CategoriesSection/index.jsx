import React from 'react'
import CategoriesContainer from '../CategoriesContainer'
import s from './index.module.css'

export default function CategoriesSection() {
  return (
    <section>
      <div>
        <div className={s.category_block}>
          <p className={s.categ_text}>Catalog</p>
          <button className={s.category_button}>All categories</button>
        </div>
       
        <CategoriesContainer />
        
       
      </div>
    </section>
        
  )
}
