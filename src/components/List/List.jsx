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
  const message = "Por favor, ingrese la cantidad de inasistencias que posee el alumno";
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
      <ModalChange {...modal} title={"Marcar inasistencias"} message={message} 
      values={{courseId: course.id}} />
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
            <h3>Inasistencias</h3>
          </div>

          {

            listItems?.map( item => {
              {console.log(item, "LIST")}
              const absencesValue = (item.Absences.find( absences => absences.CourseId == course.id))

              {console.log(absencesValue, "ABSENCESVALUES")}

              /* if(modal.isActive) return (
              <ModalChange title={"Marcar inasistencias"} message={message} 
              values={{studentId: item.id, courseId: course.id ,absences: absencesValue}} />
              ) */

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
                        {absencesValue.absences}
                      </div>
                      <div className={s.grid4}>
                        <div 
                        className={s.changeAbsences}
                        onClick={() => setListModal("Modificar inasistencias", item.id, dispatch)}
                        >Marcar inasistencia</div>
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