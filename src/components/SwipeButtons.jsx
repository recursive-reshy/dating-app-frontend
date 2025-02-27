import React from 'react'

import { makeStyles } from 'tss-react/mui'

// MUI Core
import IconButton from '@mui/material/IconButton'

// MUI Icons
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon from '@mui/icons-material/FlashOn'

const useStyles = makeStyles()( theme => ( {
    swipeButtons: {
      position: 'fixed',
      bottom: 24,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    button: {
      border: '1px solid',
    }
  } )
)

const SwipeButtons = () => {

  const { classes } = useStyles()

  return (
    <div className={classes.swipeButtons}>
      <IconButton className={classes.button} color="secondary">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.button} color="error">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.button} color="info">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.button} color="success">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.button} color="warning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons