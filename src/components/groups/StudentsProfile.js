import React from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
// import Activity from "../Activity";
// import CalendarFull from "../CalendarFull";
import InfoCardStudent from '../../InfoCardStudent';
import Application from '../Application';
import BarChartCGPA from '../Graphs/BarChartCGPA';

const StudentsProfile = () => {
  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="column" spacing={4}>
            <InfoCardStudent/>
            <BarChartCGPA />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Application />
          <Notification />
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default StudentsProfile