import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import TeacherRegistration from "./TeacherRegistration";
import ViewTeachers from "./ViewTeachers";
import ApiDemo from "./ApiDemo";

function NavBar() {
  return (
    <div>

      <div style={{backgroundColor:"violet", padding:"10px"}}>
        <Link to="/" style={{color:"white", marginRight:"15px"}}>Home</Link> 
        <Link to="/teacherregistration" style={{color:"white", marginRight:"15px"}}>Teacher Registration</Link> 
        <Link to="/viewteachers" style={{color:"white", marginRight:"15px"}}>View Teachers</Link>
        <Link to="/apidemo" style={{color:"white"}}>API Demo</Link>
      </div>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacherregistration" element={<TeacherRegistration />} />
        <Route path="/viewteachers" element={<ViewTeachers />} />
        <Route path="/apidemo" element={<ApiDemo />} />
      </Routes>

    </div>
  );
}

export default NavBar;