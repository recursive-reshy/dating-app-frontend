import React from 'react'

import { makeStyles } from 'tss-react/mui'

// MUI Core
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

// Icons
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'

const useStyles = makeStyles()( theme => ( {
		headerIcon: {
			padding: theme.spacing(2),
			color: '#F5E6DA'
		},
		headerLogo: {
			objectFit: 'contain',
			height: 40,
			borderRadius: '50%',
		}
	} ) 
)

const Header = () => {

	const { classes } = useStyles()

  return (
    <AppBar position="static">
			<Toolbar>
				<img
					className={classes.headerLogo}
					src="app-logo.png"
					alt="logo"
				/>
				<div style={ { flex: 1 } } />
				<IconButton>
					<PersonIcon className={classes.headerIcon} fontSize="medium" />
				</IconButton>
				<IconButton>
					<ForumIcon className={classes.headerIcon} fontSize="medium" />
				</IconButton>
			</Toolbar>
    </AppBar>
  )
}

export default Header