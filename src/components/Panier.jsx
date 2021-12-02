import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

const Panier = ({name, prix, stock, onDelArticle}) => {
    console.log('[Panier] ComponentsDidMount')
    useEffect(() => {
        return () => {
            // onDelArticle()
            console.log('[Panier.jsx] ComponentsWillUnmount');
        }
    }, [])


    return (
        <div>
            <Box sx={{ m:4 }}>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{color: 'info.main'}} gutterBottom variant="h5" m='4'>
                        Article: {name} |
                    </Typography>
                    <Typography sx={{color: 'info.main'}} gutterBottom variant="h5" m='4'>
                        Prix: {prix} |
                    </Typography>
                    <Typography sx={{color: 'info.main'}} gutterBottom variant="h5" m='4'>
                        Quantité: {stock} | 
                    </Typography>
                    <Button  size="small" color="error" onClick={onDelArticle}>
                            Rendre 
                    </Button>
                </Box>    
            </Box>
        </div>
    );
};

export default Panier;