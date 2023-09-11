'use client'
import HomeworkList from "@/app/Teacher/homeworks/page";
import { useSelector } from "react-redux";

const HomeworkPage = () => {

  const courses = useSelector(state => state.student.courses);

  return (
    <>

      <HomeworkList courses={courses} />
    
    </>
  )
}

export default HomeworkPage;