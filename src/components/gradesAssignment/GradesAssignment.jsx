'use client'
import s from './GradeAssignment.module.css';
import { initialHandler, assingLevel, pushSection } from './gradeAssignmentHandler';
import { useState } from 'react';
import CreateUsers from '../createUsers/CreateUsers';

const GradesAssignment = ({attributes, title, collection, setCollection}) => {

  const [initial, setInitial] = useState(
    {
      gradeName: "",
      section: "",
      sections: []
    }
  )
  
  return(
    
    <>
      <div className={s.container}>
        
        <CreateUsers title={title} attributes={attributes} set={setInitial} values={initial} handler={initialHandler} info={initial.sections}>

          <button type="button" onClick={() => pushSection(setInitial, initial)}>Agregar sección</button>

        </CreateUsers>

          <div className={s.test}>
            <h3 className={s.title}>Grados y Secciones asignadas:</h3>
            {
              collection?.map( element => {
                return( 
                <div className={s.sections}>
                  <label>Grado: {element.gradeName}</label> <br/>
                  <label>Secciones: {element.sections.map( (section,index) => `"${section}" ${element.sections.length-1 !== index ? `/` : `.` }`)}</label>  
                </div>
                )
              })
            }
          </div>
      </div>

      <div>

        <button className={s.button} type="button"
        onClick={() => {
          assingLevel(setCollection, initial);
          //reinicia los valores
          setInitial( prev => {
            return { gradeName: "", section: "", sections: []}
          })
        }}
        >Asignar</button>

      </div>

    </>
  )
}

export default GradesAssignment;