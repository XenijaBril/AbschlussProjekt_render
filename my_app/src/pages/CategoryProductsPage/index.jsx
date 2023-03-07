import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { load_products_category } from '../../requests/products_category_req';
import s from './index.module.css'



export default function CategoryProductsPage() {
    const { category } = useParams();
    const dispath = useDispatch();
    const category_products = useSelector(state => state.products_category)

        useEffect(() => {
        dispath(load_products_category( category ))
    }, [])

    
  return (
    <div>
      <h2>{category}</h2>
      <div className={s.category_products}>
        {
          category_products.map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
    </div>    
  )
}
