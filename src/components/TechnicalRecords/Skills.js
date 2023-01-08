import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CreateIcon from '@mui/icons-material/Create';

const rows = ['Web Development', 'React JS', 'Javascript', 'HTML', 'Python'];

const Skills = () => {
  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <Box sx={{
            height: '40px',
            marginBottom: 1,
            backgroundColor: '#153E52'
        }}>
            <Stack direction="row" sx={{ marginLeft: 1.5, paddingTop: 1 }}>
                <TerminalIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Skills</Typography>
                <IconButton sx={{ color: '#fff', marginLeft: 'auto', marginTop: '-9px', marginRight: '23px' }}>
                    <AddIcon />
                </IconButton>
            </Stack>
        </Box>

        <TableContainer sx={{ maxHeight: 140, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                <Stack direction="row">
                                    <Typography>{row}</Typography>
                                    <IconButton sx={{ color: '#153E52', marginLeft: 'auto', height: 20, width: 20 }}>
                                        <CreateIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
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

export default Skills