import React from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import Freelancing from './Freelancing';
import Projects from './Projects';

const TechnicalRecords = () => {
  return (
    <Box sx={{
      marginBottom: '5px'
    }}>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction="column" spacing={4}>
              <Header />
              <Skills />
              <Experience />
              <Freelancing />
              <Projects />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Notification />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TechnicalRecords