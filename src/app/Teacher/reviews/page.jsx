'use client'
import ShowStudents from "@/components/showStudents/ShowStudents";
import { useSelector } from "react-redux";
import s from '../class/page.module.css';

const Reviews = ( ) => {

  const Courses = useSelector(state => state.teacher.courses);

  return (
    <>
  
      <div className={s.container}>

        <h3>Seleccione la materia en la cual desea asignar una tarea</h3>

        <ShowStudents aditional={Courses} />
      
      </div>
    </>
  )
}

export default Reviews;