import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2'

import useStyles from './styles'

Details.propTypes = {
  title: PropTypes.string, // passed from App.js parent
}

export default function Details({title}) {
  const classes = useStyles()

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
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
