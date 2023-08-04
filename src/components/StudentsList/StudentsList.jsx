'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './StudentsList.module.css';
import { submitCalifications } from './StudentListHandler';
import ModalChange from '../Modals/ModalChange/ModalChange';
import { useEffect } from 'react';
import { searchNotes } from '@/app/tutor/tutorHandlers';

const StudentList = ({students, absences, section, notes}) => {
  
  const dispatch = useDispatch();
  const modal = useSelector(state => state.primarySlice.modal);
  const options = ["DNI","Nombres y Apellidos","Faltas justificadas Totales","Faltas Injustificadas Totales","Tardanzas Totales","Opciones"]

  useEffect( () => {

    searchNotes(dispatch, students, section)

  },[modal])

  const formatStudents = students?.map( student => {
    
    const findAbsences = absences?.find( absence => absence.id == student.id)

    const findAttenNotes = notes?.find( note => note.StudentId == student.id)

    return {
      ...student,
      absences: findAbsences,
      notes: findAttenNotes
    }

  })

  return (
    <>
    {
      modal.isActive
      ?
      <ModalChange {...modal} />
      :
      null
    }
    {
      students
      ?
      <div className={s.studentsGrid}>
        {
          options.map( (option, index) => {
            const className = `col${index+1}`;
            return(
              <div key={`${option}${index}`} className={`${s[className]}`}>
                {option}
              </div>
            )
          })
        }

        {
          formatStudents?.map( (student, index) => {
            return (
              <>
                <div key={`${student.DNI}${index}`} className={`${s.col1}`} >
                  {student.DNI}
                </div>
                <div key={`${student.names}${index}`} className={`${s.col2}`} >
                  {student.names} {student.fatherLastNames} {student.motherLastName}
                </div>
                <div key={`justified${index}`} className={`${s.col3}`}>
                  {student.absences.justifiedFault}
                </div>
                <div key={`absences${index}`} className={`${s.col4}`}>
                  {student.absences.absences}
                </div>
                <div key={`absencesDelays${index}`} className={`${s.col5}`}>
                  {student.absences.delays}
                </div>
                <div key={`option${index}`} className={s.col6}>
                  <div className={s.submitButton} onClick={(e) => {
                    e.preventDefault();
                    submitCalifications(dispatch, student.id, section, student.notes)
                  }}>
                    Cargar Calificación
                  </div>
                </div>
             
              </>
            )
          })
        }
      </div>
      :
      <h5>No hay estudiantes en esta sección</h5>
    }    
    </>
  )
}

export default StudentList;