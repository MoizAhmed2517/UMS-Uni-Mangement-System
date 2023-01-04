import { Box, Typography, Paper, Stack, Tooltip, Icon, Grid } from '@mui/material';
import { Container} from '@mui/system';
import React from 'react';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

const QuizOverview = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop : '20px' }}>

        <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={8}>
            <Box sx={{
                marginLeft: 2.5,
                marginTop: 1,
                marginBottom: 1,
            }}>
                <Stack direction="row">
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Skill Assessment</Typography>

                <Tooltip title="Check your skill level. Answer 15 multiple choice questions, score in the top 30%, and earn a skill badge.">
                    <Icon sx={{ fontSize: 25, marginLeft: '4px', color: '#153E52'}}><HelpOutlineRoundedIcon /></Icon>
                </Tooltip>

                </Stack>
            </Box>
        </Paper>

        <Paper sx={{
            marginTop: '20px',
            borderRadius: '10pxpx',
            // p: '20px 0px 20px 20px',
        }}
            elevation={8}
        >
            
            <Grid Container spacing={2}>
            <Stack direction="row"> 
              <Grid item xs={6} sx={{ marginBottom: '10px' }}>
                    Quiz
              </Grid>
              <Grid item xs={6} sx={{ marginLeft: '20px',marginBottom: '10px' }}>
                    Search
              </Grid>
            </Stack>
            </Grid>

        </Paper>
    </Container>
  )
}

export default QuizOverview