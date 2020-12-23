import React from 'react'
import {Grid} from '@material-ui/core'

import Details from './components/Details/Details'
import useStyles from './styles'

// https://youtu.be/NnUFOWR_V4Y
// 25:34
export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0} alginItems='center' justifyContent='center' style={{height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title='Income'/>
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='Expense'/>
        </Grid>

      </Grid>
    </div>
  )
}
