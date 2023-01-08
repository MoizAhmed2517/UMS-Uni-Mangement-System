import React, { useState } from 'react';
import { Paper, Box, Stack, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: '#153E52',
    },
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Endorsment = () => {

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: '350px'}} elevation={8}>
        <Box sx={{
        marginLeft: 2.5,
        marginTop: 1,
      }}>
            <Stack direction="row">
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Endorsment</Typography>
            </Stack>
        </Box>

        <Box sx={{ width: '100%', marginLeft: 2.5 }}>
            <AntTabs 
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
        >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
            </AntTabs>
            <TabPanel value={value} index={0}>
                <Typography>Start</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>

    </Paper>
  )
}

export default Endorsment