import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2'

import useStyles from './styles'

export default function Details() {
  const classes = useStyles()

  return (
    <Card className={classes.income}>
      <CardHeader title='Income' />
      <CardContent>
        <Typography variant='h5'>$50</Typography>
        <Doughnut data='' />
        <div>
          Details Component
        </div>
      </CardContent>
    </Card>
  )
}
