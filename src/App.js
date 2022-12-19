import React from "react";
import Teacher from "./components/groups/Teacher";
import TeacherSearch from "./components/groups/TeacherSearch";
import Nav from "./components/Nav";


function App() {
  return (
    <React.Fragment>
      <Nav />
      {/* <Teacher /> */}
      <TeacherSearch />
    </React.Fragment>
  );
}

export default App;