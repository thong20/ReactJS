import React from 'react'
import {Grid} from '@material-ui/core'

import Details from './components/Details/Details'

// https://youtu.be/NnUFOWR_V4Y
// 18:40
export default function App() {
  return (
    <div>
      <Grid container spacing={0} alginItems='center' justifyContent='center' style={{height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details />
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details />
        </Grid>

      </Grid>
    </div>
  )
}
