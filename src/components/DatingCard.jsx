import React, { useState, useEffect } from 'react'

import { makeStyles } from 'tss-react/mui'

// MUI Core
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import TinderDatingCard from 'react-tinder-card'

import { getAllPerople } from '../apis/personService'

const useStyles = makeStyles()( theme => ( {
	container: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: '#F5E6DA'
	},	
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

	const [ people, setPeople ] = useState([])

	useEffect( () => {
		const fetchPeople = async () => {
			try {
				const { data: { people } } = await getAllPerople()
				setPeople(people)
			} catch (error) {
				console.error(`Error while fetching people: ${error}`)
				
			}
		}

		fetchPeople()
	}, [] )

  return (
		<div>
			<div className={classes.container}>	
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
		</div>
  )
}

export default DatingCard