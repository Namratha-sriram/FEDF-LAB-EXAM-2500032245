import React, { useState, useEffect } from "react";

export default function ViewTeachers() {

  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    experience: ""
  });

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const savedTeachers = JSON.parse(localStorage.getItem("teachers"));
    if (savedTeachers) {
      setTeachers(savedTeachers);
    }
  }, []);

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTeachers = [...teachers, teacher];
    setTeachers(updatedTeachers);

    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

    setTeacher({
      name: "",
      email: "",
      phone: "",
      subject: "",
      experience: ""
    });
  };

  return (
    <div>

      <h2>Add Teacher</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Name" value={teacher.name} onChange={handleChange} /><br/>

        <input type="email" name="email" placeholder="Email" value={teacher.email} onChange={handleChange} /><br/>

        <input type="text" name="phone" placeholder="Phone" value={teacher.phone} onChange={handleChange} /><br/>

        <input type="text" name="subject" placeholder="Subject" value={teacher.subject} onChange={handleChange} /><br/>

        <input type="number" name="experience" placeholder="Experience" value={teacher.experience} onChange={handleChange} /><br/>

        <button type="submit">Add Teacher</button>

      </form>

      <h2>View Teachers</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((t, index) => (
            <tr key={index}>
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>{t.phone}</td>
              <td>{t.subject}</td>
              <td>{t.experience}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}