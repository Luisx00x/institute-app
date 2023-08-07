'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './StudentsHomework.module.css';
import ModalHomework from '../Modals/ModalHomework/ModalHomework';
import { callModal } from './studentHomeworkHandler';
import { useEffect } from 'react';
import { callHomeworksAnswers } from '@/app/Teacher/review/reviewHandler';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const StudentsHomework = ({students}) => {
  
  const dispatch = useDispatch();
  const modal = useSelector(state => state.primarySlice.modal);

  return (
    <>
      {
        modal.isActive
        ?
        <ModalHomework {...modal} />
        :
        <div className={s.answersGrid}>
      
          <div className={s.col1}> DNI </div>
          <div className={s.col2}> Nombres </div>
          <div className={s.col3}> Apellidos </div>
          <div className={s.col4}> Archivo </div>
          <div className={s.col5}> Calificación </div>
          <div className={s.col6}> Opción </div>


          {
            students?.map( student => {

              return (
                <>
                  <div className={s.col1}>  {student.Student.DNI}  </div>
                  <div className={s.col2}> {student.Student.names} </div>
                  <div className={s.col3}> {student.Student.fatherLastName} {student.Student.motherLastName} </div>
                  <div className={s.col4}>
                    {
                      student.location == null 
                      ? 
                      "S/P" 
                      :
                      <a href={`${LOGIN_URL}/${student.location}`} target='_blank'>Repuesta</a>
                      } 
                  </div>
                  <div className={s.col5}>
                    {
                      student.calification == null
                      ?
                      " - "
                      :
                      student.calification
                    }
                  </div>
                  <div>
                    <button onClick={(e) => callModal(e, dispatch, student.id)}>
                      Calificar
                    </button>
                  </div>
                </>
              )
            })
          }

        </div>

      }
    
    </>
  )
}

export default StudentsHomework;