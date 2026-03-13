import React, { useState } from "react";

function TeacherRegistration() {

  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    experience: ""
  });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Teacher Registered Successfully");
    console.log(teacher);
  };

  return (
    <div>
      <h2>Teacher Registration</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div>
          <label>Phone:</label>
          <input type="text" name="phone" onChange={handleChange} required />
        </div>

        <div>
          <label>Subject:</label>
          <input type="text" name="subject" onChange={handleChange} required />
        </div>

        <div>
          <label>Experience:</label>
          <input type="number" name="experience" onChange={handleChange} required />
        </div>

        <br />
        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default TeacherRegistration;