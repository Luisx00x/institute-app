'use client'
import { useEffect, useState } from "react";
import { searchAbsences, sectionSelected } from "../../tutorHandlers";
import StudentList from "@/components/StudentsList/StudentsList";

const TutorSectionSelect = ({params}) => {

  const sectionId = params.section;
  const [section, setSection] = useState();
  const [absences, setAbsences] = useState();

  
  useEffect( () => {
    
    sectionSelected(setSection, sectionId);
    
  },[])

  useEffect( () => {

    if(section) searchAbsences(setAbsences, section, sectionId);

  },[section])
  
  return (
    <>
        <StudentList students={section} absences={absences}/>
    </>
  )
}

export default TutorSectionSelect;