/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { commerce } from './lib/commerce'
import { Navbar, Products, Cart, Checkout } from './components'

// 2:28:02
export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    // let response = await commerce.products.list(); // trả về 1 Object {data, meta}

    // hoặc nhanh gọn hơn, ta sử dụng destructuring
    const { data } = await commerce.products.list(); // trả về 1 Object, và sử dụng destructuring để hứng data
    setProducts(data)
  }

  const fetchCart = async () => {
    // const cart = await commerce.cart.retrieve(); // return về 1 Object
    // setCart(cart)

    // hoặc ngắn gọn hơn
    setCart(await commerce.cart.retrieve())

  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity); // return về 1 Object
    setCart(item.cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
  
    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId)

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty()

    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Products products={products} onAddToCart={handleAddToCart} />

          </Route>
          <Route exact path='/cart'>
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />

          </Route>
          <Route axact path='/checkout'>
            <Checkout cart={cart}/>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}


