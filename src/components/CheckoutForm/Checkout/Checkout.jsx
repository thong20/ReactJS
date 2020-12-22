import React, { useState, useEffect } from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'

import {commerce} from '../../../lib/commerce'
import useStyle from './styles.js'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

const steps = ['shipping address', 'Payment details'];


export default function Checkout({cart}) {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const classes = useStyle()

  useEffect(() => {
    const generateToken = async () => {
      try{
        // commerce.checkout.generateToken() nhận vào 2 tham số
        const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})

        setCheckoutToken(token)
      }catch(error){

      }
    }

    generateToken()
  }, [cart])

  const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken}/>
    : <PaymentForm />

  const Confirmation = () => (
    <div>Confirmation Component</div>
  )

  return (
    <>
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
