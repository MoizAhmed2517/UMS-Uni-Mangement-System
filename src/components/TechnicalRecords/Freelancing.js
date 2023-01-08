import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CreateIcon from '@mui/icons-material/Create';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

function createData(position, company, level, fromDate, toDate, rating) {
    return { position, company, level, fromDate, toDate, rating};
  }
  
const rows = [
    createData('Web Developer', 'Freelancer', 'Professional', '20/8/2022', 'present', '4.5'),
    createData('Java Developer', 'UpWork', 'Professional', '20/8/2022', 'present', '5'),
    createData('Python Developer', 'Fiverr', 'Level-2', '20/8/2022', 'present', '3'),
];

const Freelancing = () => {
  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <Box sx={{
            height: '40px',
            marginBottom: 1,
            backgroundColor: '#153E52'
        }}>
            <Stack direction="row" sx={{ marginLeft: 1.5, paddingTop: 1 }}>
                <HomeWorkIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Freelancing</Typography>
                <IconButton sx={{ color: '#fff', marginLeft: 'auto', marginTop: '-9px', marginRight: '23px' }}>
                    <AddIcon />
                </IconButton>
            </Stack>
        </Box>

        <TableContainer sx={{ maxHeight: 200, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                <Stack direction="row">
                                    <Typography>{row.position} {`- ${row.company}`}</Typography> 
                                    <IconButton sx={{ color: '#153E52', marginLeft: 'auto', height: 20, width: 20 }}>
                                        <CreateIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                </Stack>
                                <Stack direction="column">
                                    <Typography variant="caption">{`Level: ${row.level}`} </Typography>
                                    <Typography variant="caption">{`From: ${row.fromDate}`} {`To: ${row.toDate}`}</Typography>
                                    <Typography variant="caption">{`Rating: ${row.rating}`}</Typography>
                                </Stack> 
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default Freelancing