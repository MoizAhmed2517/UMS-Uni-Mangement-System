import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ["Home", "Notifications", "Students", "Teachers", "Recruiters", "Login", "Logout"];

const DrawerComp = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const sideBarHandler = () => {
    setToggleSideBar(!toggleSideBar);
  };

  const drawerHandler = () => {
    setToggleSideBar(false);
  };

  return (
    <React.Fragment>
        <Drawer 
            open={toggleSideBar}
            onClose={drawerHandler}
        >
            <List>
                {
                    PAGES.map((page, index) => (
                        <ListItemButton key={index} onClick={drawerHandler}>
                            <ListItemIcon>
                                <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }
            </List>
        </Drawer>
        <IconButton 
            onClick={sideBarHandler} 
            sx={{marginLeft: "auto", 
                color:'#F39223',
                '&:hover': { backgroundColor: '#F39223', color: '#fff'}
            }} 
                variant="outlined"
        >
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp