import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import DiscountCoupon from './components/DiscountCoupon';
import CartPage from './pages/CartPage/index';
import SaleProductsPage from './pages/SaleProductsPage'
import ProductDescrPage from './pages/ProductDescrPage';
import CategoryProductsPage from './pages/CategoryProductsPage';
import { localStoreCard } from './store/reducers/cart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {

 const dispatch = useDispatch();
 const cart = useSelector(state => state.cart)
  useEffect(() => {
    const cartLocal = JSON.parse((localStorage.getItem("cart")))
    if (cartLocal && cartLocal.length)
    dispatch(localStoreCard(cartLocal))
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <HomePage /> } />
          <Route path='categories' element={<CategoriesPage /> }  /> 
          <Route path='/' element={<DiscountCoupon /> }  /> 
          <Route path='cart' element={<CartPage /> }  /> 
          <Route path='products' element={<SaleProductsPage />} />
          <Route path='products/:id' element={<ProductDescrPage />} />
          <Route path='categories/:category' element={<CategoryProductsPage />} />
          </Route>
      </Routes>
     
    </div>
  );
}

export default App;
