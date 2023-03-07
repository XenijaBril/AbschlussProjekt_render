import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function CategoryCard({ id, title, image}) {

  return (
    <div className={s.category_card}>
       <Link to={`/categories/${id}`}><img src={`http://localhost:3333${image}`} alt={title} /></Link> 
        <p>{title}</p>
    </div>
  )
}
