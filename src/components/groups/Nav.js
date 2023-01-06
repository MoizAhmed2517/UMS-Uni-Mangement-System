import React, {useState, useEffect} from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, useMediaQuery, useTheme} from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Avatar } from '@mui/material';
import DrawerComp from '../DrawerComp';
import { NavLink } from 'react-router-dom';
import profilePic from '../../static/images/avatar/image.jpg';

function Nav() {

  const PAGES = [
    {
      path: '/',
      label: 'Profile'
    },
    {
      path: '/Teachers-search',
      label: 'Teachers'
    },
    {
      path: '/student-profile',
      label: 'Students'
    },
    {
      path: '/Recruiter',
      label: 'Recruiters'
    },
    {
      path: '/AboutUs',
      label: 'About Us'
    },
  ];

  const [tabColor, setTabColor] = useState(Number(localStorage.getItem('myValue')) || 0);
  const tabColorHandler = (e,value) => {
    setTabColor(value);
  }

  useEffect(() => {
    localStorage.setItem('myValue', String(tabColor))
  }, [tabColor])

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md')); 
  return (
   <React.Fragment>
      <AppBar position='sticky' sx={{background: '#153E52'}}>
        <Toolbar>
          { isMatch ? (
            <>
              <Typography>
                  LOGO
              </Typography>
              <DrawerComp/>
            </>
          ) : (
            <>
              <Typography>
                LOGO
              </Typography>
              <Tabs 
                sx={{ marginLeft: "auto", textColor: "#fff", textDecoration: 'none' }} 
                textColor= 'inherit'
                value={tabColor} 
                onChange={tabColorHandler} 
                TabIndicatorProps={{ style: { background: "#F39223" } 
              }}>
                {
                  PAGES.map((page, index) => (
                    <Tab key={index} label={page.label} to={page.path} component={NavLink} />
                  ))
                }
              </Tabs>

              <Avatar alt="React" src={profilePic} sx={{marginLeft: "auto"}} />

              {/* <Avatar
                  sx={{marginLeft: "auto", 
                  color:'#F39223', 
                  borderColor: 
                  '#F39223', 
                  '&:hover': { backgroundColor: '#F39223', color: '#fff'},  
                  bordercolor: '#F39223',
                }} 
                  variant="outlined"
                >
                  <AccountCircleSharpIcon />
              </Avatar> */}
            </>
          )
        }
        
        </Toolbar>
      </AppBar>
  </React.Fragment> 
  );
}
export default Nav;