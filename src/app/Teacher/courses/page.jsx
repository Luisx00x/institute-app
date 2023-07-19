'use client'

import ShowStudents from "@/components/showStudents/ShowStudents";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Courses = () => {

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