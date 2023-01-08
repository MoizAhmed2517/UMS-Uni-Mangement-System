import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CreateIcon from '@mui/icons-material/Create';
import ComputerIcon from '@mui/icons-material/Computer';

function createData(title, link, descr, topSkill1, topSkill2, topSkill3 ) {
    return { title, link, descr, topSkill1, topSkill2, topSkill3 };
  }
  
const rows = [
    createData('Uni Management System', 'https://digiskills.pk/Default.aspx', 'The project is responsible for helping uni to manage overall student profile and make learning interactive. The project is responsible for helping uni to manage overall student profile and make learning interactive', 'React', 'Django'),
    createData('Uni Management System2', 'https://www.youtube.com/', 'The project is responsible for helping uni to manage overall student profile and make learning interactive', 'React', 'Django', 'Javascript'),
    createData('Uni Management System3', 'https://digiskills.pk/Default.aspx', 'The project is responsible for helping uni to manage overall student profile and make learning interactive', 'React', 'Django'),
    createData('Uni Management System4', 'https://digiskills.pk/Default.aspx', 'The project is responsible for helping uni to manage overall student profile and make learning interactive', 'React', 'Django', 'Rest APIs'),
    createData('Uni Management System5', 'https://digiskills.pk/Default.aspx', 'The project is responsible for helping uni to manage overall student profile and make learning interactive', 'AWS', 'Django', 'SQL'),
];

const Projects = () => {

  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <Box sx={{
            height: '40px',
            marginBottom: 1,
            backgroundColor: '#153E52'
        }}>
            <Stack direction="row" sx={{ marginLeft: 1.5, paddingTop: 1 }}>
                <ComputerIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Projects</Typography>
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
                                    <Typography sx={{ color: '#000', textDecoration: 'None' }} component='a' href={row.link} target='_blank'>{row.title}</Typography>
                                    <IconButton sx={{ color: '#153E52', marginLeft: 'auto', height: 20, width: 20 }}>
                                        <CreateIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                </Stack>
                                <Stack direction="column">
                                    <Typography variant="caption" sx={{ color: '#000', fontStyle: 'italic' }}>{row.descr} </Typography>
                                    <Typography variant="caption">{`Top Skill: ${row.topSkill1}`} {`- ${row.topSkill2}`} { typeof(row.topSkill3) === 'string' && `- ${row.topSkill3}`}</Typography>
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

export default Projects