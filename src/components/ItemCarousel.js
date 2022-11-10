import React from 'react';
import { Paper } from '@mui/material'

function ItemCarousel({item})
{
    return (
        <Paper>
            <img src={item} style={{width:'100%'}}></img>
        </Paper>
    )
}

export default ItemCarousel