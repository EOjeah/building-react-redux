import React, { useState } from 'react';

const CoursesPage = () => {
  const [course, setCourse] = useState({ title: '' });

  const handleCourseChange = (event) => {
    setCourse({ ...course, title: event.target.value });
  };

  const handleSubmit = (event) => {
    setCourse({ ...course, title: '' });
    event.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="submit">
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <div className="form-control">
          <input type="text" onChange={handleCourseChange} name="course" id="courseID" value={course.title} />
          <input className="btn" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default CoursesPage;
