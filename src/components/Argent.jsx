import { Typography } from '@mui/material';
import { deepOrange, orange } from '@mui/material/colors';
import React from 'react';

const color = deepOrange[900]

const Argent = ({argent}) => {
    let money = argent + '$'
    let couleur = ''
    if(argent === 0){
        money = "vous n'avez plus d'argent"
        couleur = color
    }
    return (
        <div>
            <Typography sx={{ m:4 }} gutterBottom variant="h4" color={couleur}>
                Mon argent: {money}
            </Typography>
        </div>
    );
};

export default Argent;