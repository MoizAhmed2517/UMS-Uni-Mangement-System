import { Paper, Box, Stack, Typography, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import NoteIcon from '@mui/icons-material/Note';
import VerifiedIcon from '@mui/icons-material/Verified';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function createData(certificatename, date, platform, certificateID, expirationDate, verifyStatus) {
    return { certificatename, date, platform, certificateID, expirationDate, verifyStatus };
  }
  
const rows = [
    createData('Raspbian Full Stack', '1/8/2023', 'Udemy', 'UC-01757b49-c3bf-467a-afa0-1e2f3cf824e0', 'No Expiration', 'Yes'),
    createData('Data Architecure', '1/8/2023', 'Udemy', 'UC-01757b49-c3bf-467a-afa0-1e2f3cf824e0', 'No Expiration', 'No'),
    createData('Data Warehouse', '1/8/2023', 'Udemy', 'UC-01757b49-c3bf-467a-afa0-1e2f3cf824e0', 'No Expiration', 'Yes'),
    createData('Natural Gas', '1/8/2023', 'Coursera', '38RR3NE35HYR', 'No Expiration', 'Yes'),
];

const Certificates = () => {
 
    const handleCertificateVerify = (lms, id, status) => {
        let linkUdemyHeader = "http://ude.my/";
        let linkCourseraHeader = "https://coursera.org/verify/";

        if (lms.toLowerCase() === 'udemy' && status.toLowerCase() === 'yes') {
            const link = linkUdemyHeader + id;
            window.open(link, '_blank');
        } else if (lms.toLowerCase() === 'coursera' && status.toLowerCase() === 'yes') {
            const link = linkCourseraHeader + id;
            window.open(link, '_blank');
        }
    }

  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <Box sx={{
            height: '40px',
            marginBottom: 1,
            backgroundColor: '#153E52'
        }}>
            <Stack direction="row" sx={{ marginLeft: 1.5, paddingTop: 1 }}>
                <NoteIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Certificate</Typography>
                <IconButton sx={{ color: '#fff', marginLeft: 'auto', marginTop: '-9px', marginRight: '3px' }}>
                    <AddIcon />
                </IconButton>
                <IconButton sx={{ color: '#fff', marginTop: '-9px', marginRight: '23px' }}>
                    <DeleteOutlineIcon />
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
                                    <Typography>{row.certificatename} {`- ${row.platform}`}</Typography>
                                    <Tooltip title="Show Credentials">
                                        <IconButton sx={{ marginLeft: 'auto', height: 20, width: 20, marginTop: '15px' }} onClick={() => handleCertificateVerify(row.platform, row.certificateID, row.verifyStatus)}>
                                            { row.verifyStatus === 'Yes' ? 
                                            (
                                                <VerifiedIcon sx={{ fontSize: 25, color: '#006400' }} /> 
                                            ) : (
                                                <VerifiedIcon sx={{ fontSize: 25 }} />  
                                            )}  
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                                <Stack direction="column">
                                    <Typography variant="caption">{row.type}</Typography>
                                    <Typography variant="caption">{`From: ${row.date}`} {`To: ${row.expirationDate}`}</Typography>
                                    <Typography variant="caption">{`Certificate ID: ${row.certificateID}`}</Typography>
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

export default Certificates