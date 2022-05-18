import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import { RatingWrap } from './Products.styled';

const labels: { [index: string]: string } = {
  1: 'Useless+',
  2: 'Poor+',
  3: 'Ok+',
  4: 'Good+',
  5: 'Excellent+',
};

export default function ProductItem() {
  const [expanded, setExpanded] = useState(false);
	const a = {
		"id": 1,
		"title": "iPhone 9",
		"description": "An apple mobile which is nothing like apple",
		"price": 549,
		"discountPercentage": 12.96,
		"rating": 4.69,
		"stock": 94,
		"brand": "Apple",
		"category": "smartphones",
		"thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
		"images": [
			"https://dummyjson.com/image/i/products/1/1.jpg",
			"https://dummyjson.com/image/i/products/1/2.jpg",
			"https://dummyjson.com/image/i/products/1/3.jpg",
			"https://dummyjson.com/image/i/products/1/4.jpg",
			"https://dummyjson.com/image/i/products/1/thumbnail.jpg"
		]
	}
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
		<Grid item xs={10} sm={6} md={4} xl={3}>
 			<Card sx={{ width: '100%' }} color='primary'>
				<CardHeader
					title={a.title}
					subheader={`${a.price}$`}	/>
				<CardMedia
					component="img"
					height="190"
					image={a.thumbnail}
					alt={a.title}
				/>
				<CardContent>
					<RatingWrap>
						<Rating name="item-rating" value={a.rating} readOnly />
						<Typography 
							variant='body2'
							component='span'>
							{ labels[Math.ceil(a.rating)] }
						</Typography>
					</RatingWrap>
				</CardContent>
				<CardActions disableSpacing sx={{justifyContent: 'space-between'}}>
					<IconButton aria-label="add to favorites">
						<AddShoppingCartIcon fontSize='large' />
					</IconButton>
					<IconButton
						sx={{
							transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
							transition: 'transform .5s linear',
						}}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon fontSize='large' />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>
							Category: { a.category.toUpperCase() }
						</Typography>
						<Typography paragraph>
							{ a.description }
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Grid>
   
  );
}
