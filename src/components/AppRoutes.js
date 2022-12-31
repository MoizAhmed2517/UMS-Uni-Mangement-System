import React from 'react';
import { Routes, Route } from 'react-router';
import Teacher from "../components/groups/Teacher";
import TeacherSearch from "../components/groups/TeacherSearch";
import StudentsProfile from "../components/groups/StudentsProfile";
import RecruiterProfile from "../components/groups/RecruiterProfile";
import Nav from './groups/Nav';
import AboutUs from './groups/AboutUs';
import StudentSearch from './groups/StudentSearch';

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Teacher />}/>
        <Route path='/Teachers-search' element={<TeacherSearch />}/>
        <Route path='/student-profile' element={<StudentsProfile />}/>
        <Route path='/Recruiter' element={<RecruiterProfile />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/Students-search' element={<StudentSearch />}/>
      </Routes>
    </React.Fragment>
  )
}

export default AppRoutes