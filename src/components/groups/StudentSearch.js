import { useState, useEffect } from 'react';
import { Box, Paper, Container, Grid, createFilterOptions, FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';
import GridView from '../GridView';
import PageNumber from '../PageNumber';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { options } from '@fullcalendar/core/preact';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#F7FAF8',
  },
  width: '20%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#153E52',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function createData(name, skill, cgpa, dept, info) {
  return {name, skill, cgpa, dept, info};
}

function limitString(string='', limiter=0){
  return string.substring(0, limiter);
}

const dummydata = [
  createData( 'Ammar Ali', 'Data Analyst', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like C/C++ so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Harris Ali', 'Data Analyst', 3.31, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like R so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Hafiz Muhammad Ali', 'React', 3.32, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like Php so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Waleed Hussain', 'MLOPs', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like flutter so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like Carbon so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ammar Ahmed', 'React', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like Ruby so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Hafiz Muhammad Ali', 'React', 3.32, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like javascript so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Waleed Hussain', 'MLOPs', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like react so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Ahmed', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
  createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
];

const searchFields = [
  {
    value: 'name',
    label: 'Name'
  },
  {
    value: 'skill',
    label: 'Skill'
  },
  {
    value: 'dept',
    label: 'Department'
  }
];

const StudentSearch = () => {

    const [response, setResponse] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await axios.get('http://18.183.141.57/management/teacher-list/');
        setResponse(res.data);
      }
      fetchData();
    }, [])
    
    let fullName = '';
    let fullNameList = [];
    let field = [];
  
    response.map((data) => {
      fullName = data.first_name + ' ' +  data.last_name;
      fullNameList.push(fullName);
      field.push(data.Field);
    })
  
    console.log(fullNameList);
    console.log(field);
    
    const [search, setSearch] = useState(dummydata);
    const [changeField, setChangeField] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(9);
  
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = dummydata.slice(firstPostIndex, lastPostIndex);
    const totalPost = Math.ceil(dummydata.length/postPerPage);
  
    const handleCurrentPageDisplay = (e, p) => {
      setCurrentPage(p);
    }
  
    const handleSearch = (e) => {
      const filtername = e.target.value.toLowerCase();
      if (changeField === 'dept') {
        const searchedName = dummydata.filter(items => items.dept.toLowerCase().includes(filtername));
        setSearch(searchedName);
      }
      else if (changeField === 'skill') {
        const searchedName = dummydata.filter(items => items.skill.toLowerCase().includes(filtername));
        setSearch(searchedName);
      }
      else {
        const searchedName = dummydata.filter(items => items.name.toLowerCase().includes(filtername));
        setSearch(searchedName);
      }
    }
  
    const handleChange = (event) => {
      setChangeField(event.target.value);
    };

  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >

        <Paper sx={{ padding: '5px', borderRadius: '10px', height: '40px'}} elevation={4}>
          <Grid container spacing={1}>

            <Grid item xs={8}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search...'
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleSearch}
                  fullWidth
                />
              </Search>
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth sx={{ paddingTop: '2px'}}>
                <InputLabel id="fieldSelectSearch" sx={{ marginLeft: '-3px' ,paddingTop: '3px'}}>Search</InputLabel>
                <Select
                  labelId="fieldSelectSearch"
                  id="field-Select-Search"
                  value={changeField}
                  label="Name"
                  onChange={handleChange}
                  sx={{ height: '36px', borderRadius: '10px'}}
                >
                  <MenuItem value='name' sx={{ color: '#153E52' }}>Name</MenuItem>
                  <MenuItem value='skill'>Skills</MenuItem>
                  <MenuItem value='dept'>Department</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>
        </Paper>

        <Grid container spacing={2} marginTop={1}>
            { search.length === dummydata.length ? (
                currentPosts.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <GridView studentName={item.name} studentSkill={item.skill} studentCGPA={item.cgpa} studentDept={item.dept} studentInfo={limitString(item.info, 140)} />
                  </Grid>
                ))
              ) : (
                search.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <GridView studentName={item.name} studentSkill={item.skill} studentCGPA={item.cgpa} studentDept={item.dept} studentInfo={limitString(item.info, 140)} />
                  </Grid>
                ))
              )
            }
        </Grid>

        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12} sx={{ display:'flex', justifyContent: 'right'}}>
            <PageNumber handleCurrentPage={handleCurrentPageDisplay} totalPostCount={totalPost}/>
          </Grid>
        </Grid>
        
      </Container>
    </Box> 
  )
}

export default StudentSearch