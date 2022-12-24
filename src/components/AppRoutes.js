import React from 'react';
import { Routes, Route } from 'react-router';
import Teacher from "../components/groups/Teacher";
import TeacherSearch from "../components/groups/TeacherSearch";
import StudentsProfile from "../components/groups/StudentsProfile";
import RecruiterProfile from "../components/groups/RecruiterProfile";
import Nav from './groups/Nav';
import AboutUs from './groups/AboutUs';

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='/' element={<Teacher />}/>
        <Route path='/Teachers' element={<TeacherSearch />}/>
        <Route path='/Students' element={<StudentsProfile />}/>
        <Route path='/Recruiter' element={<RecruiterProfile />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
      </Routes>
    </React.Fragment>
  )
}

export default AppRoutes