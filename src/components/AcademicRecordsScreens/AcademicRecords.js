import React from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from '../Notification';
import Header from './Header';
import CurrentSemesterCourses from './CurrentSemesterCourses';
import BarChartGPA from '../Graphs/BarChartGPA';
import CurrentAssesments from './CurrentAssesments';

const AcademicRecords = () => {
  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="column" spacing={4}>
            <Header />
            <CurrentSemesterCourses />
            <BarChartGPA />
            <CurrentAssesments />
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default AcademicRecords