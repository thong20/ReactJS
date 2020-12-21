import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

CartItem.propTypes = {
  item: PropTypes.object, // passed from Cart.js parent
  onUpdateCartQty: PropTypes.func, // passed from App.js => Cart.js parent
  onRemoveFromCart: PropTypes.func, // passed from App.js => Cart.js parent
}

export default function CartItem(props) {
  const { item, onUpdateCartQty, onRemoveFromCart } = props
  const classes = useStyles()

  console.log(item.media.source)
  return (
    <Card className={classes.root}>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant='h5'>{item.name}</Typography>
        <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} >-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} >+</Button>
        </div>
        <Button variant='contained' type='button' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  )
}
