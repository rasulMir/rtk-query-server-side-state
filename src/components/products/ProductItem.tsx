import React, { useState } from 'react';
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
import Tooltip from '@mui/material/Tooltip';
import { RatingWrap, StyledCard } from './Products.styled';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IProducts } from '../../types';
import { useAddToCartMutation } from '../../features/ecomm/storeApi';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const labels: { [index: string]: string } = {
  1: 'Useless+',
  2: 'Poor+',
  3: 'Ok+',
  4: 'Good+',
  5: 'Excellent+',
};

export const ProductItem: React.FC<IProducts> = (item) => {


	const [addItem, {}] = useAddToCartMutation();
	const [expanded, setExpanded] = useState<boolean>(false);
	const [isAdded, setIsAdded] = useState<boolean>(false);

	const {
		id, title, description, price, rating, category, images
	} = item;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

	const handleAddItem = (): void => {
		addItem({
			isAdded: true,
			amount: 1,
			...item,
		}).unwrap();

		setIsAdded(true);
	}

  return (
		<Grid item xs={10} sm={6} md={4} xl={3}>
 			<StyledCard >
				<CardHeader	title={title} subheader={`${price}$`}	/>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					{
						images.map((i: string, idx: number) => (
							<SwiperSlide key={idx}>
								<CardMedia
									component="img"
									height="190"
									image={i}
									alt='item image'
								/>
							</SwiperSlide>
						))
					}
					
				</Swiper>


				<CardContent>
					<RatingWrap>
						<Rating name="item-rating" value={rating} readOnly />
						<Typography 
							variant='body2'
							component='span'>
							{ labels[Math.ceil(rating)] }
						</Typography>
					</RatingWrap>
				</CardContent>
				<CardActions disableSpacing sx={{justifyContent: 'space-between'}}>

					<Tooltip title={ isAdded ? 'This Item Has Already Added!' : 'Add To Cart!'}>
						<IconButton
							onClick={handleAddItem}
							aria-label="add to favorites">
							<AddShoppingCartIcon fontSize='large' />
						</IconButton>
					</Tooltip>

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
							Category: { category.toUpperCase() }
						</Typography>
						<Typography paragraph>
							{ description }
						</Typography>
					</CardContent>
				</Collapse>
			</StyledCard>

			<Snackbar open={isAdded} autoHideDuration={4000} onClose={() => setIsAdded(false)}>
				<Alert
					severity="success"
					sx={{minWidth: '200px', textTransform: 'capitalize'}} 
					onClose={() => setIsAdded(false)} >
					item has been added in your cart!
				</Alert>
      </Snackbar>
		</Grid>
   
  );
}


export default ProductItem;