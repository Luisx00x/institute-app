'use client'
import ShowStudents from "@/components/showStudents/ShowStudents";
import { useSelector } from "react-redux";
import s from '../class/page.module.css';


const UploadNotes = () => {

  const courses = useSelector(state => state.teacher.courses);

  return (
    <>
    
    <div className={s.container}>

      <h2>Seleccione la materia en la cual desea cargar sus calificaciones</h2>

      <ShowStudents aditional={courses} />
      
    </div>
    </>
  )
}

export default UploadNotes;