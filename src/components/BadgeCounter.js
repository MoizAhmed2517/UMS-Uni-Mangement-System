import { Box } from '@mui/material'
import React from 'react'

const BadgeCounter = () => {
  return (
    <Box sx={{
        marginTop: '45px',
        marginLeft: 'auto',
        marginRight: '35px',
        width: '40%',
        height: '200px',
        backgroundColor: 'rgb( 21, 62, 82 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropfilter: 'blur( 15px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        color: '#F39223',

    }}>
        <Box sx={{
            p: '10px',
        }}>
           Badge 
        </Box>
    </Box>
  )
}

export default BadgeCounter
