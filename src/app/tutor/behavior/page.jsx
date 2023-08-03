'use client'
import SectionList from "@/components/SectionList/SectionList";
import ShowStudents from "@/components/showStudents/ShowStudents";
import { useDispatch, useSelector } from "react-redux";

const Behavier = () => {
  
  const sections = useSelector(state => state.tutor.tutorSections);

  return (
    <>
        <h3>Behavior</h3>

        <h3>Seleccione una sección bajo su supervisión al que desea ingresar:</h3>

        <SectionList sections={sections} />

    </>
  )
}

export default Behavier;