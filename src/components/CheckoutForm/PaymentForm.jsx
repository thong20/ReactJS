import React from 'react'
import PropTypes from 'prop-types'
import {Typography, Button, Divider} from '@material-ui/core'
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStrip} from '@stripe/react-stripe-js'

import Review from './Review'

PaymentForm.propTypes = {
  shppingData: PropTypes.object, // passed from Checkout.js parent
  checkoutToken: PropTypes.object, // passed form Checkout.js parent, it's token 
}

export default function PaymentForm({checkoutToken }) {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
    </>
  )
}
