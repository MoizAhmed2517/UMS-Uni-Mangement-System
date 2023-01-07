import React, { useState } from 'react';
import { Paper, Box, Stack, Typography, Button} from '@mui/material'
import { Container} from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const QuizStart = () => {

  const [answer, setAnswer] = useState("");
  const handleAnsSelect = (event) => {
    setAnswer(event.target.value);
  }
  return (
    <Container maxWidth="lg" sx={{ marginTop : '20px' }}>

        <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={8}>
            <Box sx={{
                marginLeft: 2.5,
                marginTop: 1,
                marginBottom: 1,
            }}>
                <Stack direction="row">
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>React JS</Typography>
                </Stack>
            </Box>
        </Paper>

        <Box sx={{
            marginTop: '20px',
            borderRadius: '10px',
            p: '20px 20px 20px 20px',
            height: 'auto',
            width: '96.5%',
            marginBottom: '6px',
            backgroundColor: '#fff',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',

        }}
            elevation={12}
        >
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Which operator returns true if the two compared values are not equal?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={answer}
                    onChange={handleAnsSelect}
                    sx={{
                        '&.Mui-checked': {
                            color: 'yellow',
                          },
                    }}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </Box>

        <Box sx={{
            marginTop: '20px',
            borderRadius: '10px',
            p: '20px 20px 20px 20px',
            height: 'auto',
            width: '96.5%',
            marginBottom: '6px',
            backgroundColor: '#fff',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',

        }}
            elevation={12}
        >
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Which operator returns true if the two compared values are not equal?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={answer}
                    onChange={handleAnsSelect}
                    sx={{
                        '&.Mui-checked': {
                            color: 'yellow',
                          },
                    }}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </Box>

    </Container>
  )
}

export default QuizStart