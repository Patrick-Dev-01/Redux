import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function CourseList() {

    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    function addCourse(){
        dispatch({ type: 'ADD_COURSE', title: 'GraphQL' })
    }

  return (
      <>
        <ul>
            {courses.map(course => <li key={course}>{course}</li>)}
        </ul>

        <button type="button" onClick={addCourse}>
            Adicionar Curso
        </button>
      </>
  );
}

export default CourseList;