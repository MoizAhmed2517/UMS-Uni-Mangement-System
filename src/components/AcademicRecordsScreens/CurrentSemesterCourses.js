import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(course, courseCode, courseType, semester, fromDate, toDate, faculty, timings) {
    return { course, courseCode, courseType, semester, fromDate, toDate, faculty, timings };
  }
  
const rows = [
    createData('Big Data Analyst', 'SWE419T-287', 'Elective', 7, '2/15/2022', 'Khalid Mehboob', 'Tuesday 5:00 PM'),
    createData('Software Architecture', 'SWE419T-287', 'Elective', 7, '2/15/2022', 'Khalid Mehboob', 'Tuesday 5:00 PM'),
    createData('Operating System', 'SWE419T-287', 'Elective', 7, '2/15/2022', 'Khalid Mehboob', 'Tuesday 5:00 PM'),
    createData('Data Pipeline Architecture', 'SWE419T-287', 'Elective', 7, '2/15/2022', 'Khalid Mehboob', 'Tuesday 5:00 PM'),
    createData('Basic Programming', 'SWE419T-287', 'Elective', 7, '2/15/2022', 'Khalid Mehboob', 'Tuesday 5:00 PM'),
    createData('Business Communication & Ethics', 'SWE419T-287', 'Elective', 7, '2/15/2022', 'Khalid Mehboob', 'Tuesday 5:00 PM'),
];


const CurrentSemesterCourses = () => {
    
  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <TableContainer sx={{ maxHeight: 240}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>Course</TableCell>
                        <TableCell align="center">Course Code</TableCell>
                        <TableCell align="center">Course Type</TableCell>
                        <TableCell align="center">Semester</TableCell>
                        <TableCell align="center">From Date</TableCell>
                        <TableCell align="center">To Date</TableCell>
                        <TableCell align="center">Faculty</TableCell>
                        <TableCell align="center">Timings</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.course} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.course}</TableCell>
                            <TableCell align="center">{row.courseCode}</TableCell>
                            <TableCell align="center">{row.courseType}</TableCell>
                            <TableCell align="center">{`${row.semester}-Semester`}</TableCell>
                            <TableCell align="center">{row.courseCode}</TableCell>
                            <TableCell align="center">{row.fromDate}</TableCell>
                            <TableCell align="center">{row.courseCode}</TableCell>
                            <TableCell align="center">{row.faculty}</TableCell>
                            <TableCell align="center">{row.timings}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default CurrentSemesterCourses