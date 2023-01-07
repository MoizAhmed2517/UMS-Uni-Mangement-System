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
import TechnicalRecords from './TechnicalRecords';
import ExtraActivities from './extra-activities/ExtraActivities';
import Quiz from './Quiz';
import QuizStart from './QuizStart';
import QuizEnd from './QuizEnd';

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
        <Route path='/Quiz-Overview' element={<QuizOverview />}/>
        <Route path='/Academic-Records' element={<AcademicRecords />}/>
        <Route path='/Technical-Records' element={<TechnicalRecords />}/>
        <Route path='/Extra-Activities' element={<ExtraActivities />}/>
        <Route path='/Quiz-Start' element={<Quiz />}/>
        <Route path='/QuizStart' element={<QuizStart />}/>
        <Route path='/QuizEnd' element={<QuizEnd />}/>
      </Routes>
    </React.Fragment>
  )
}

export default AppRoutes