'use client'

import ShowStudents from "@/components/showStudents/ShowStudents";
import { useSelector } from "react-redux";
import s from './page.module.css';

const ClassesList = () => {
  
  const courses = useSelector(state => state.teacher.courses);

  return (
    <>

      <div className={s.container}>

        <h2>Seleccione la Materia en la cual desea subir una clase: </h2>

        <ShowStudents aditional={courses} />

      </div>


    </>
  )
}

export default ClassesList;