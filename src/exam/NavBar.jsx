import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import TeacherRegistration from "./TeacherRegistration";
import ViewTeachers from "./ViewTeachers";
import ApiDemo from "./ApiDemo";

function NavBar() {
  return (
    <div>

      <Link to="/">Home</Link> 
      <Link to="/teacherregistration">Teacher Registration</Link> 
      <Link to="/viewteachers">View Teachers</Link>
      <Link to="/apidemo">API Demo</Link>

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