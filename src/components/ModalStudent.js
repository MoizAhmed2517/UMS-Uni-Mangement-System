import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '1px solid #153E52',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
  };

//   name, descr, talks, pnum, location, org, year

const ModalStudent = (props) => {
    const [textNum, setTextNum] = useState(props.skill[0].descr.length)
    const [error, setError] = useState(0)
    const [errorTalks, setErrorTalks] = useState(0)
    const [talksAbout, setTalksAbout] = useState("")

    useEffect(() => {
        setTextNum(props.textLength)
    }, [props.textLength])
    
    const handleDescription = (e) => {
        const str = e.target.value;
        setTextNum(str.length)
        if (str.length > 125){
            setError(1)
        } else {
            setError(0)
        }
    }

    const handleTalks = (e) => {
        let str = e.target.value;
        if (str.split(",").length > 3){
            setErrorTalks(1)
        } else {
            setErrorTalks(0)
            setTalksAbout(str.split(",").slice(0, 3).join(","))
        }
    }

    const handleSubmitClose = () => {
        if (error === 1 || errorTalks === 1){
            alert("Please write description only for 200 characters OR You can write only three comma separated values in talks about")
        } else {
            props.setOpenState(false);
        }
    }
    
    return ( 

        <Modal
            open={props.openModal}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form">
                <Stack direction='row' spacing={1}>
                <Avatar sx={{
                    bgcolor: "#fff",
                    backgroundColor: '#d9e6f2',
                    height: '30px',
                    width: '30px',
                }}>
                    <CreateOutlinedIcon sx={{ height: 20, width: 20, color: '#153E52'}} />
                </Avatar>
                <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Edit Profile</Typography>
                </Stack>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-name" variant="standard" label="Name" fullWidth defaultValue={props.skill[0].name} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-descr" label="Profile Bio" variant="standard" fullWidth defaultValue={props.skill[0].descr} multiline error={Boolean(error)} maxRows={5} onChange={handleDescription} helperText={`You have wrote ${textNum}/125 characters`}/>
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-prevOrg" variant="standard" label="Previous Organization" fullWidth defaultValue={props.skill[0].org} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-year" label="Joining Year" variant="standard" fullWidth defaultValue={props.skill[0].year} helperText="Write only Year E.g: 2022" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-talks" variant="standard" label="talks about" fullWidth defaultValue={props.skill[0].talks} onChange={handleTalks} error={Boolean(errorTalks)} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-phone" variant="standard" label="Previous Organization" fullWidth defaultValue={props.skill[0].pnum} helperText="Format: +44XXXXXXXXX" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-location" label="Joining Year" variant="standard" fullWidth defaultValue={props.skill[0].location} helperText="Format: City/State/Country" />
                    </Grid>
                </Grid>

                <Button
                    variant="contained" 
                    fullWidth 
                    sx={{
                        bgcolor: '#153E52',
                        '&:hover': {  bgcolor: '#113242' },
                        marginTop: '15px',
                    }} 
                    onClick={handleSubmitClose}
                >
                    UPDATE
                </Button>

            </Box>
        </Modal>

    )
}

export default ModalStudent