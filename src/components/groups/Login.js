import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import banner from '../../static/images/Logo/logo.jpg';
import CircularProgress from '@mui/material/CircularProgress';

function createData(id, userType, email, password) {
  return {id, userType, email, password};
}

const dummyUsers = [
  createData( 1, 'student', 'waleed.hussain@gmail.com', '123455'),
  createData( 2, 'teacher','harris.ali@gmail.com', 'abcde'),
  createData( 3, 'recruiter','Sadia.jamal@hotmail.com', 'qwerty'),
];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = (props) => {

  const [credentials, setCredentials] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState('student');
  const [access, setAccess] = useState(false);

  const handleChangeSelectUser = (event) => {
    setUser(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setCredentials({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  useEffect(() => {
    if(credentials){
      if (credentials.email.includes('@')){
        dummyUsers.map((item, index) => {
          if(item.email === credentials.email && item.password === credentials.password && user === item.userType){
            console.log("Success Login")
            setAccess(true)
          }
        })
      } else {
        alert("Please type email. Username not allowed")
      }
    }
  }, [credentials])
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid item xs={false} sm={false} md={7} sx={{
            backgroundImage: `url(${banner})`,
            // backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        />
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={8} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#F39223' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#F39223', fontWeight: 'bold' }}>
              Hi! Welcome Back
            </Typography>
            <FormControl sx={{ m: 1, width: "100%", display: 'flex', justifyContent: 'center' }}>
              <InputLabel id="demo-simple-select-helper-label">Login</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={user}
                label="Age"
                onChange={handleChangeSelectUser}
                fullWidth={true}
              >
                <MenuItem value='student'>Student</MenuItem>
                <MenuItem value='teacher'>Teacher</MenuItem>
                <MenuItem value='recruiter'>Recruiter</MenuItem>
              </Select>
            </FormControl>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type='email'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#F39223',  width: '100%', marginTop: '10px', '&:hover': { backgroundColor: '#ef860d'  }}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {
                access && (
                  <>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2px' }}>
                        <CircularProgress  sx={{
                            color: `${access ? 'green' : 'red'}`,
                          }}
                          size={40}
                          thickness={4}
                          {...props}
                          value={100} 
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                          <Typography>Login successfully</Typography>
                    </Box>
                  </>
                )
              }
              <Copyright sx={{ mt: 3 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login