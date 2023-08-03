'use client'
import { useEffect, useState } from "react";
import { sectionSelected } from "../../tutorHandlers";

const TutorSectionSelect = ({params}) => {

  const sectionId = params.section;
  const [section, setSection] = useState();

  
  useEffect( () => {
    
    sectionSelected(setSection, sectionId)
    
  },[])
  
  return (
    <>
    {console.log(section)}

        <h3>Behavior</h3>

        

      

    
    </>
  )
}

export default TutorSectionSelect;