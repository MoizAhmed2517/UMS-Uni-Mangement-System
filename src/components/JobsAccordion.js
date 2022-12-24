import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { Paper, Grid, Stack, Box, Button, IconButton } from '@mui/material';
import AddJobModel from './AddJobModel';


const postedJobs = [
    {
        JobTitle: ' Trainee Machine Learning Engineer',
        Requirements: 'Python | ML Models | Statistics',
        CGPA: '3.9',
        JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
    },
    {
        JobTitle: 'Trainee Machine Learning Engineer',
        Requirements: 'Python | ML Models | Statistics',
        CGPA: '3.9',
        JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
    },
    {
        JobTitle: 'Trainee Machine Learning Engineer',
        Requirements: 'Python | ML Models | Statistics',
        CGPA: '3.9',
        JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
    },
    {
        JobTitle: 'Trainee Machine Learning Engineer',
        Requirements: 'Python | ML Models | Statistics',
        CGPA: '3.9',
        JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
    }
];



const JobsAccordion = () => {

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Paper elevation={6} sx={{ borderRadius: '10px'}}>
        <Grid container>

            <Grid item xs={9}>
                    <Box sx={{
                        marginLeft: 2.5,
                        marginTop: 1,
                    }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Activity</Typography>
                    </Box>
            </Grid>

            <Grid item xs={1} marginLeft='auto'>

                <Box sx={{
                    marginLeft: 2.5,
                    marginTop: "2px",
                }}>
                </Box>
                <Button variant="text" sx={{
                    color: '#153E52',
                    marginLeft: 'auto',
                    '&:hover': {
                    backgroundColor: '#d9e6f2',
                    },
                }}
                onClick={handleOpenModal}
                >
                    Add Jobs
                </Button >
                <AddJobModel openModal={open} handleClose={handleCloseModal} setOpenState={setOpen}/>
            </Grid>

            <Grid item xs={12}>
                {
                    postedJobs.map((items, index) => (
                    <React.Fragment key={index}>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                                <Typography variant="title" sx={{ width: '40%', flexShrink: 0, color: '#153E52'  }}>{items.JobTitle}</Typography>
                                <Typography  variant="subtitle2"  sx={{ color: 'text.secondary', width: '40%', flexShrink: 0  }}>{items.Requirements}</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Min. CGPA: {items.CGPA}</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography variant='p'>{items.JobDescription}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </React.Fragment>
                    ))
                }
            </Grid>
        </Grid>
        
    </Paper>
  )
}

export default JobsAccordion