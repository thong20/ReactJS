import React from 'react'
import PropTypes from 'prop-types'
import {TextField, Grid} from '@material-ui/core'
import {useFormContext, Controller} from 'react-hook-form'

FormInput.propTypes = {
  name: PropTypes.string, // passed from AddressForm.js parent 
  label: PropTypes.string, // passed from AddressForm.js parent 
}

export default function FormInput({name, label}) {
  const {control} = useFormContext()
  return (

      <Grid item xs={12} sm={6}>
        <Controller
          as={TextField}
          defaultValue=''
          control={control}
          fullWidth
          name={name}
          label={label}
          required
        />
      </Grid>
  )
}
