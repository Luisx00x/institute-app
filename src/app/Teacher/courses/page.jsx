'use client'

import ShowStudents from "@/components/showStudents/ShowStudents";
import { useDispatch, useSelector } from "react-redux";


const Courses = () => {
  
  const path = "queries/searchOneUser"
  const query = "teacher";

  const dispatch = useDispatch();
  const teacherId = useSelector(state => state.primarySlice.userLog);
  
  const Courses = useSelector(state => state.teacher.courses);
  const Test = useSelector(state => state.teacher.teacher);
  const Section = useSelector(state => state.teacher.sections);
  const Grades = useSelector(state => state.teacher.grades);
  console.log(Test)
  console.log(Courses, "COURSES");
  console.log(Section, "SECTIONS")
  console.log(Grades, "GRADES")

  return (
    <>
      <ShowStudents aditional={Courses} />
    </>
  )
}

export default Courses;