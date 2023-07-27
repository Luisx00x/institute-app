'use client'
import s from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalChange from '../Modals/ModalChange/ModalChange';
import { setListModal } from './ListHandler';
import { useEffect } from 'react';
import { setTeacherInformation } from '@/globalHandlers';

const List = ({listItems, course}) => {

  const thisYear = new Date().getFullYear();

  const modal = useSelector(state => state.primarySlice.modal);
  const dispatch = useDispatch();
  const user = useSelector(state => state.primarySlice.userLog);

  useEffect( () => {

    setTeacherInformation(user.id, user.RolId, user.RolId, thisYear, dispatch);

  },[modal])

  const studentsList = listItems?.filter( item => item.Absences.find( absence => absence.CourseId == course.id))
  console.log(studentsList, "STUDENTLIST")
  return(
    <> 

    {
      modal.isActive
      ?
      <ModalChange {...modal} values={{courseId: course.id}} />
      :
      null
    }
  
    {    
      <div className={s.container}>

      <h2>{course.courseName}</h2>

        <div className={s.gridContainer}>

          <div className={s.grid1}>
            <h3>Nombres</h3>
          </div>

          <div className={s.grid2}>
            <h3>Apellidos</h3>
          </div>

          <div className={s.grid3}>
            <h3>Faltas justificadas</h3>
          </div>

          <div className={s.grid4}>
            <h3>Faltas Injustificadas</h3>
          </div>

          <div className={s.grid5}>
            <h3>Tardanzas</h3>
          </div>
          {

            listItems?.map( item => {

              const absencesValue = (item.Absences.find( absences => absences.CourseId == course.id))
    
              return (
                <>

                  {
                    absencesValue 
                    ?
                    <>
                      <div className={s.grid1}>
                        {item.names}
                      </div>
                      <div className={s.grid2}>
                        {item.fatherLastName} {item.motherLastName}
                      </div>
                      <div className={s.grid3}>
                        {absencesValue.justifiedFault}
                      </div>
                      <div className={s.grid4}>
                        {absencesValue.absences}
                      </div>
                      <div className={s.grid5}>
                        {absencesValue.delays}
                      </div>
                      <div className={s.grid6}>
                        <div 
                        className={s.changeAbsences}
                        onClick={() => setListModal("Modificación de Asistencia", item.id, absencesValue.justifiedFault, absencesValue.absences, absencesValue.delays, dispatch)}
                        >Cambiar</div>
                      </div>
                    </>
                    :
                    null
                  }
                </>
              )
            })

          }

        </div>
      </div>
      
    }

    </>
  )
}

export default List;