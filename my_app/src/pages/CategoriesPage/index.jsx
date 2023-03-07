import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { load_categories } from '../../requests/categories_req';
import CategoryCard from '../../components/CategoryCard';
import s from './index.module.css'


export default function CategoriesPage() {

  const dispath = useDispatch();
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispath(load_categories)
    }, [])

  return (
    <div>
      <h2 className={s.categrs_title}>Categories</h2>
      <div className={s.categrs_container}> 
        {
          categories.map(el => <CategoryCard key={el.id} {...el}/>)
        }
      </div>    
    </div>
  )
}
