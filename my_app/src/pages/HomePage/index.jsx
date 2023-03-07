import React from 'react'
import CategoriesSection from '../../components/CategoriesSection'
import DiscountCoupon from '../../components/DiscountCoupon'
import SalesBanner from '../../components/SalesBanner'
import SalesItems from '../../components/SalesItems'


export default function HomePage() {
  return (
    <div>
        <SalesBanner />
        <CategoriesSection />
        <DiscountCoupon />
        <SalesItems />
    </div>
  )
}
