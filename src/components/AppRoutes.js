import React from 'react';
import { Routes, Route } from 'react-router';
import Teacher from "../components/groups/Teacher";
import TeacherSearch from "../components/groups/TeacherSearch";
import StudentsProfile from "../components/groups/StudentsProfile";
import RecruiterProfile from "../components/groups/RecruiterProfile";
import Nav from './groups/Nav';
import AboutUs from './groups/AboutUs';
import StudentSearch from './groups/StudentSearch';
import QuizOverview from './QuizOverview';
import AcademicRecords from './AcademicRecordsScreens/AcademicRecords';
import TechnicalRecords from './TechnicalRecords/TechnicalRecords';
import ExtraActivities from './extra-activities/ExtraActivities';
import Quiz from './Quiz';
import QuizStart from './QuizStart';
import QuizEnd from './QuizEnd';
import Login from './groups/Login';

const AppRoutes = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/Teacher' element={<><Nav /><Teacher /></>}/>
        <Route path='/Teachers-search' element={<><Nav /><TeacherSearch /></>}/>
        <Route path='/Student-search' element={<><Nav /><StudentSearch /> </>}/>
        <Route path='/student-profile' element={<><Nav /><StudentsProfile /></>}/>
        <Route path='/Recruiter' element={<><Nav /><RecruiterProfile /></>}/>
        <Route path='/AboutUs' element={<><Nav /><AboutUs /></>}/>
        <Route path='/Students-search' element={<><Nav /><StudentSearch /></>}/>
        <Route path='/Quiz-Overview' element={<><Nav /><QuizOverview /></>}/>
        <Route path='/Academic-Records' element={<><Nav /><AcademicRecords /></>}/>
        <Route path='/Technical-Records' element={<><Nav /><TechnicalRecords /></>}/>
        <Route path='/Extra-Activities' element={<><Nav /><ExtraActivities /></>}/>
        <Route path='/Quiz-Start' element={<><Nav /><Quiz /></>}/>
        <Route path='/QuizStart' element={<><Nav /><QuizStart /></>}/>
        <Route path='/QuizEnd' element={<><Nav /><QuizEnd /></>}/>
      </Routes>
  )
}

export default AppRoutes