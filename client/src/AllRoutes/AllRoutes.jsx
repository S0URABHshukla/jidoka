import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import OurProducts from '../Pages/OurProducts/OurProducts'
import SingleProduct from "../Pages/SingleProduct/SingleProduct"
import PageNotFound from '../Pages/PageNotFound/PageNotFound'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<OurProducts/>}/>
            <Route path='/productModel/:id' element={<SingleProduct/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes