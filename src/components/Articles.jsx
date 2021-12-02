import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const Articles = ({picture, name, prix, stock, onBuyArticle}) => {
    console.log('[Articles.jsx] ComponentsDidMount');
    useEffect(() => {
        return () => {
            // onDelArticle()
            console.log('[Article.jsx] ComponentsWillUnmount');
        }
    }, [])


    let buy = "Acheter"
    let color = "primary"
    if(stock === 0){
        buy = "plus en stock"
        color = "error"
        

    }
    return (
        <div>
            <Grid container>
                    <Card sx={{ maxWidth: 345, mr:2}} >
                        <CardMedia 
                            component="img"
                            height="200"
                            image={picture}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            <Typography gutterBottom span="h5">
                                Prix: {prix}$
                            </Typography>
                            <Typography gutterBottom span="h5">
                                Stock: {stock}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color={color}  onClick={onBuyArticle}>{buy}
                            </Button>
                        </CardActions>
                    </Card>
            </Grid>
        </div>
    );
};

export default Articles;