/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

Products.propTypes = {
  products: PropTypes.array, // passed from App.js parent 
  onAddToCart: PropTypes.func, // passed from App.js parent
}

// const products = [
//   { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://images.unsplash.com/photo-1564595149151-5976ef64aca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80' },
//   { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://images.unsplash.com/photo-1607158989861-a86d5102030f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
// ]

// const products = [];

export default function Products(props) {
  const { products, onAddToCart } = props

  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {
          products.map((product, index) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))
        }
      </Grid>
    </main>
  )
}
