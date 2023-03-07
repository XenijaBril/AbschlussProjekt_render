import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load_categories } from '../../requests/categories_req';
import CategoryCard from '../CategoryCard';
import s from './index.module.css'

export default function CategoriesContainer() {
    
    const dispath = useDispatch();
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispath(load_categories)
    }, [])

  return (
    <div className={s.category_container}>
        {
            categories
            .slice(0, 4)
            .map(el =><CategoryCard key={el.id} {...el}/>)
        }
    </div>
  )
}
