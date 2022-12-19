import { Box, Paper, Container, Grid } from '@mui/material';
import React from 'react';
import GridView from '../GridView';
import PageNumber from '../PageNumber';

function createData(name, skill, cgpa, dept, info) {
  return {name, skill, cgpa, dept, info};
}

function limitString(string='', limiter=0){
  return string.substring(0, limiter);
}

const data = [
  createData( 'Ammar Ali', 'Data Analyst', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like C/C++ so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Harris Ali', 'Data Analyst', 3.31, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like R so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Hafiz Muhammad Ali', 'React', 3.32, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like Php so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Waleed Hussain', 'MLOPs', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like flutter so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like Carbon so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ammar Ahmed', 'React', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like Ruby so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Hafiz Muhammad Ali', 'React', 3.32, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like javascript so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Waleed Hussain', 'MLOPs', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like react so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
];

const TeacherSearch = () => {
  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >

        <Paper sx={{ padding: '5px', borderRadius: '10px', height: '40px' }}>
        </Paper>

        <Grid container spacing={2} marginTop={1}>
          {
            data.map((item, index) => (
              <Grid item xs={4} key={index}>
                <GridView studentName={item.name} studentSkill={item.skill} studentCGPA ={item.cgpa} studentDept={item.dept} studentInfo={limitString(item.info, 140)} />
              </Grid>
            ))
          }
        </Grid>

        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12} sx={{ display:'flex', justifyContent: 'right'}}>
            <PageNumber />
          </Grid>
        </Grid>
        
      </Container>
    </Box> 
  )
}

export default TeacherSearch