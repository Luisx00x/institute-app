'use client'
import SectionList from "@/components/SectionList/SectionList";
import ShowStudents from "@/components/showStudents/ShowStudents";
import { useDispatch, useSelector } from "react-redux";
import s from './page.module.css';

const Behavier = () => {
  
  const sections = useSelector(state => state.tutor.tutorSections);

  return (
    <>
      <div className={s.behavierContainer}>

        <h3>Behavior</h3>

        <h3>Seleccione una sección bajo su supervisión al que desea ingresar:</h3>

        <SectionList sections={sections} />

      </div>

    </>
  )
}

export default Behavier;