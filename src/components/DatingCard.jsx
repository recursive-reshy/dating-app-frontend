import React, { useState } from 'react'

import { makeStyles } from 'tss-react/mui'

// MUI Core
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import TinderDatingCard from 'react-tinder-card'

const useStyles = makeStyles()( theme => ( {
		swipe: {
			position: 'absolute',
		},
		card: {
			position: 'relative',
			margin: 'auto',
			maxWidth: 345,
		}
	} ) 
)

const DatingCard = () => {
  
	const { classes } = useStyles()

	const [ people, setPeople ] = useState( [
			{ name: 'Alice Johnson', imgUrl: 'https://images.unsplash.com/photo-1524255684952-d7185b509571' },
			{ name: 'James Smith', imgUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
			{ name: 'Sophie Martin', imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
			{ name: 'Daniel Lee', imgUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' },
			{ name: 'Emma Davis', imgUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
			{ name: 'Liam Anderson', imgUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36' },
			{ name: 'Olivia White', imgUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004' },
			{ name: 'Noah Wilson', imgUrl: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368' },
			{ name: 'Ava Brown', imgUrl: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a' },
			{ name: 'Ethan Walker', imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9' }
	] )

  return (
		<div>
			{ people.map( ( { name, imgUrl }, index ) => (
				<TinderDatingCard
					key={name}
					className={classes.swipe}
					preventSwipe={ [ 'up', 'down' ] }
					onSwipe={ ( direction ) => console.log( 'To delete', { direction, name } ) }
					onCardLeftScreen={ () => console.log( 'Left the screen', { name } ) }
				>
					<Card className={classes.card}>
						<CardMedia
							sx={ { height: '100%', width: '100%' } }
							component="img"
							image={imgUrl}
						/>
						<CardContent>
							<Typography variant="h5">{ name }</Typography>
						</CardContent>
					</Card>
				</TinderDatingCard>
				) ) 
			}
		</div>
  )
}

export default DatingCard