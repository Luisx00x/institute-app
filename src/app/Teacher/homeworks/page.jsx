'use client'

import ShowStudents from "@/components/showStudents/ShowStudents";
import { useSelector } from "react-redux";

const HomeworkList = () => {

  const Courses = useSelector(state => state.teacher.courses);

  return (
    <>
      <ShowStudents aditional={Courses} />
    </>
  )
}

export default HomeworkList;