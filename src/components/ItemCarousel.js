import React from 'react';
import { Paper, Typography } from '@mui/material'

function ItemCarousel({item})
{
    return (
        <Paper >
             <Typography variant="h4" fontWeight="bold" textTransform="uppercase" textAlign="center" backgroundColor="#ed7203">{item.label}</Typography>
            <img src={item.imgPath} alt={item.label} style={{width: "100%", height:"20vh"}}></img>
        </Paper>
    )
}

export default ItemCarousel