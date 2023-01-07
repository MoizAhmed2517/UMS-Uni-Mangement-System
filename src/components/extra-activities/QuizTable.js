import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Stack, Typography } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';

function createData(cat, rank, date, played) {
    return { cat, rank, date, played };
  }
  
const rows = [
    createData('Javascript', "Pass", '20/8/2022', 'Yes'),
    createData('HTML', "Retry", '25/8/2022', 'Yes'),
    createData('Python', "Retry", '21/8/2022', 'Yes'),
    createData('Data Structures', "Pass", '22/8/2022', 'Yes'),
    createData('C++', "Pass", '24/8/2022', 'Yes'),
    createData('Swift', "Pass", '23/8/2022', 'No'),
];

const QuizTable = () => {
  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>

        <Box sx={{
            height: '40px',
            marginBottom: 1,
            backgroundColor: '#153E52'
        }}>
            <Stack direction="row" sx={{ marginLeft: 1.5, paddingTop: 1 }}>
                <QuizIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Quiz</Typography>
            </Stack>
        </Box>

        <TableContainer sx={{ maxHeight: 140, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>Category</TableCell>
                        <TableCell align="center">Badge</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Attempt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.cat}</TableCell>
                            <TableCell align="center">{row.rank}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.played}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default QuizTable