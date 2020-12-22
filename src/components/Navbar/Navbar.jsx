/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import useStyles from './styles'

// THONG20 ===================================================================
  import {showFullDate} from '../../features/uuid'
// THONG20 ====================================================================


Navbar.propTypes = {
  totalItems: PropTypes.number, // passed from App.js parent
}

export default function Navbar({ totalItems }) {
  // THONG20 ===================================================================
  const [uuid, setuuid] = useState('')   
  setInterval(() => {
    setuuid(showFullDate())
  }, 1000)
  // THONG20 ===================================================================

  const classes = useStyles();
  const location = useLocation();



  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>

          <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
              Commerce.js
          </Typography>

          {/* THONG20 ============================================================ */}
            {uuid}
          {/* THONG20 ============================================================ */}
          
          <div className={classes.grow} />

          {
            (location.pathname === '/')
            &&
            (
              <div className={classes.button}>
                <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                  <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
    </>
  )
}
