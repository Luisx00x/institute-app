'use client'
import { useEffect, useState } from "react";
import { searchAbsences, searchNotes, sectionSelected } from "../../tutorHandlers";
import StudentList from "@/components/StudentsList/StudentsList";

const TutorSectionSelect = ({params}) => {

  const sectionId = params.section;
  const [section, setSection] = useState();
  const [absences, setAbsences] = useState();
  const [notes, setNotes] = useState();

  
  useEffect( () => {
    
    sectionSelected(setSection, sectionId);
    
  },[])

  useEffect( () => {

    if(section) searchAbsences(setAbsences, section, sectionId);
    if(section) searchNotes(setNotes, section, sectionId)

  },[section])
  
  return (
    <>
        {
          section && absences
          ?
          <StudentList students={section} absences={absences} section={sectionId} notes={notes} />
          :
          null
        }
    </>
  )
}

export default TutorSectionSelect;