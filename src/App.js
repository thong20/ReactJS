import React, { useEffect, useState } from 'react'

import {commerce} from './lib/commerce'
import {Navbar, Products} from './components'

export default function App(){
  const [products, setProducts] = useState([])
  console.log('thong20:', products)

  const fetchProducts = async () => {
    // const response = await commerce.products.list(); // trả về 1 Promise
    // hoặc nhanh gọn hơn, ta sử dụng destructuring
    const {data} = await commerce.products.list(); // trả về 1 Promise, và sử dụng destructuring để hứng data
    console.log('data:',data)
    setProducts(data)
  }



  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  )
}


