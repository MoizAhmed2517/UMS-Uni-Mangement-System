import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CreateIcon from '@mui/icons-material/Create';

function createData(position, company, type, fromDate, toDate, location) {
    return { position, company, type, fromDate, toDate, location };
  }
  
const rows = [
    createData('Web Developer', 'XYZ', 'Full-Time', '20/8/2022', 'present', 'Karachi, Pakistan'),
    createData('Java Developer', 'ABC', 'Full-Time', '20/8/2022', 'present', 'Karachi, Pakistan'),
    createData('Python Developer', 'MNO', 'Full-Time', '20/8/2022', 'present', 'Karachi, Pakistan'),
    createData('Trainee SE', 'PQR', 'Full-Time', '20/8/2022', 'present', 'Karachi, Pakistan'),
];

const Experience = () => {
  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <Box sx={{
            height: '40px',
            marginBottom: 1,
            backgroundColor: '#153E52'
        }}>
            <Stack direction="row" sx={{ marginLeft: 1.5, paddingTop: 1 }}>
                <EngineeringIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Expereince</Typography>
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
                                    <Typography variant="caption">{row.type}</Typography>
                                    <Typography variant="caption">{`From: ${row.fromDate}`} {`To: ${row.toDate}`}</Typography>
                                    <Typography variant="caption">{row.location}</Typography>
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

export default Experience