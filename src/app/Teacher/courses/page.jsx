'use client'

import { useDispatch, useSelector } from "react-redux";


const Courses = () => {
  
  const path = "queries/searchOneUser"
  const query = "teacher";

  const dispatch = useDispatch();
  const teacherId = useSelector(state => state.primarySlice.userLog);
  
  const teacherInformation = useSelector(state => state.teacher.courses);
  const teacherTest = useSelector(state => state.teacher.teacher);
  const teacherSection = useSelector(state => state.teacher.sections);
  const teacherGrades = useSelector(state => state.teacher.grades);
  console.log(teacherTest)
  console.log(teacherInformation, "COURSES");
  console.log(teacherSection, "SECTIONS")
  console.log(teacherGrades, "GRADES")

  return (
    <>
    </>
  )
}

export default Courses;