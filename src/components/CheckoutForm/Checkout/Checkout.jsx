import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline} from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom'

import {commerce} from '../../../lib/commerce'
import useStyle from './styles.js'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'


const steps = ['shipping address', 'Payment details'];

Checkout.propTypes = {
  cart: PropTypes.object, // passed from App.js parent
  order: PropTypes.object , // passed from App.js parent
  onCaptureCheckout: PropTypes.func , // passed from App.js parent
  error: PropTypes.string , // passed from App.js parent
}
export default function Checkout({cart, order, onCaptureCheckout, error}) {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [isFinished, setIsFinished] = useState(false)
  const classes = useStyle()
  const history = useHistory()

  useEffect(() => {
    const generateToken = async () => {
      try{
        // commerce.checkout.generateToken() nhận vào 2 tham số
        const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})

        setCheckoutToken(token)
      }catch(error){
        history.pushState('/') // nếu xảy ra lỗi nó sẽ chuyển ta về Homepage
      }
    }

    generateToken()
  }, [cart])

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3000)
  }
  
  let Confirmation = () => order.customer ? (
    <>
      <div>
        <Typography variant='h5'>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
        <Divider className={classes.divider} />
        <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>Back to Home</Button>
    </>
  ) : isFinished ? (
    <>
      <div>
        <Typography variant='h5'>Thank you for your purchase</Typography>
        <Divider className={classes.divider} />
      </div>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>Back to Home</Button>
    </>
  ) : (
    <div classes={classes.spinner}>
      <CircularProgress />
    </div>
  )

    if(error){
      <>
        <Typography variant='h5'>Error: {error}</Typography>
        <br />
        <Button component={Link} to='/' variant='outlined' type='button'>Back to Home</Button>
      </>
    }

    const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next} />
    : <PaymentForm
      shippingData={shippingData}
      checkoutToken={checkoutToken}
      backStep={backStep}
      onCaptureCheckout={onCaptureCheckout}
      nextStep={nextStep}
      timeout={timeout}
    />


  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {
              steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))
            }
          </Stepper>
          {
            activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />
          }
        </Paper>
      </main>
    </>
  )
}
