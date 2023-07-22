'use client'
import { useSelector } from "react-redux";
import ShowStudents from "@/components/showStudents/ShowStudents";

const Absences = () => {

  const Courses = useSelector(state => state.teacher.courses);

  return (
    <>
      <h2>Ausencias</h2>

      <ShowStudents aditional={Courses} courseData={true}/>

    </>
  )
}

export default Absences;