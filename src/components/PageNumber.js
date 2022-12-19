import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PageNumber = () => {
  return (
    <Stack spacing={2}>
        <Pagination count={10} variant="outlined" color="primary" shape="rounded"/>
    </Stack>
  )
}

export default PageNumber