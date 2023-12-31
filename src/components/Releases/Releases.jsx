'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './Releases.module.css';
import { newRelease } from './releasesHandlers';
import ModalReleases from '../Modals/ModalReleases/ModalReleases';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const Releases = ({releases, studentId, submitData}) => {

  const modal = useSelector(state => state.primarySlice.modal);
  const dispatch = useDispatch();

  return (
    <>
      {
        modal.isActive
        ?
        <ModalReleases {...modal} />
        :
        null
      }

      <h3>Lista de comunicados</h3>

      <div className={s.newButton} onClick={(e) => newRelease(dispatch, submitData)}>
        Enviar un nuevo comunicado
      </div>
      
      {
      releases?.length
      ?
      <div className={s.gridList}>

        <div className={s.gridCol1}>
            Título del comunicado:
        </div>

        <div className={s.gridCol2}>
           Enviado por:
        </div>

        <div className={s.gridCol3}>
          Archivo: 
        </div>

        {
          studentId
          ?
          releases?.map( release => {
            if(release.studentId == studentId){
              return (
                <>
                  <div className={s.gridCol1}>
                    {release.title}
                  </div>
                  <div className={s.gridCol2}>
                    {release.sender}
                  </div>
                  <div className={s.gridCol3}>
                    <a href={`${LOGIN_URL}/${release.location}`} target='_blank'>{release.title}</a>
                  </div>
                </>
              )
            }
          })
          :
          releases
          ?
          releases?.map( release => {
            return (
              <>
                <div className={s.gridCol1}>
                  {release.title}
                </div>
                <div className={s.gridCol2}>
                  {release.sender}
                </div>
                <div className={s.gridCol3}>
                  <a href={`${LOGIN_URL}/${release.location}`} target='_blank'>{release.title}</a>
                </div>
              </>
            )
          })
          :
          null
        }
     
     
     
      </div>
      :
      <h3>No hay registro de comunicados actualmente</h3>

      }
    
    </>
  )
}

export default Releases;