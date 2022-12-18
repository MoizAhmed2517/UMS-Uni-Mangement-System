import React, {useState} from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, useMediaQuery, useTheme} from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Button } from '@mui/material';
import DrawerComp from './DrawerComp';

function Nav() {

  const PAGES = ["Profile", "Notifications", "Students", "Teachers", "Recruiters"];
  const [tabColor, setTabColor] = useState(0);

  const tabColorHandler = (e,value) => {
    setTabColor(value);
  }

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
                sx={{ marginLeft: "auto" }} 
                textColor="inherit" 
                value={tabColor} 
                onChange={tabColorHandler} 
                TabIndicatorProps={{ style: { background: "#F39223" } 
              }}>
                {
                  PAGES.map((page, index) => (
                    <Tab key={index} label={page} />
                  ))
                }
              </Tabs>

              <Button
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
              </Button>
            </>
          )
        }
        
        </Toolbar>
      </AppBar>
  </React.Fragment> 
  );
}
export default Nav;