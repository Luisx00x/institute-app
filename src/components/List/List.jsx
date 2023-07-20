'use client'
import s from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalChange from '../Modals/ModalChange/ModalChange';
import { setListModal } from './ListHandler';

const List = ({listItems, course}) => {

  const modal = useSelector(state => state.primarySlice.modal);
  const dispatch = useDispatch();
  const message = "Por favor, ingrese la cantidad de inasistencias que posee el alumno";

  return(
    <> 

    {
      
      
      
      <div className={s.container}>

      <h2>{course.courseName}</h2>
      {console.log(course.id)}

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

              const absencesValue = (item.Absences.find( absences => absences.CourseId == course.id)).absences

              if(modal.isActive) return (<ModalChange title={"Marcar inasistencias"} message={message} value={absencesValue} />)

              return (
                <>
                  <div className={s.grid1}>
                    {item.name}
                  </div>
                  <div className={s.grid2}>
                    {item.lastName}
                  </div>
                  <div className={s.grid3}>
                    {absencesValue}
                  </div>
                  <div className={s.grid4}>
                    <div 
                    className={s.changeAbsences}
                    onClick={() => setListModal("Modificar inasistencias", dispatch)}
                    >Marcar inasistencia</div>
                  </div>
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