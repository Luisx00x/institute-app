'use client'
import { useEffect, useState } from 'react';
import s from './DocList.module.css';
import { useSelector } from 'react-redux';
import { HOMEWORKS } from '@/const';
import { getHomeworks } from './DockListHandler';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const DocList = ({userId, courseId, listType}) => {

  const [data, setData] = useState([]);
  const modal = useSelector(state => state.primarySlice.modal);
  const user = useSelector(state => state.primarySlice.userLog);

  useEffect( () => {
    
    if(user.RolId && listType === HOMEWORKS){
      
      getHomeworks(courseId, userId, user.RolId ,setData)
      
    }
  },[modal])

  
  return (
    <>
    {console.log(data, "DATA")}

      <div className={s.gridContainer}>

        <div className={s.grid1}>
          <h3>Tarea</h3>
        </div>

        <div className={s.grid2}>
          <h3>Archivo</h3>
        </div>

        <div className={s.grid3}>
          <h3>Opcion</h3>
        </div>

        {
          data.length 
          ?
          data.map( element => {
            return (
              <>
                <div className={s.grid1}>
                  {element.asignation}
                </div>
                <div className={s.grid2}>
                  <a href={`${LOGIN_URL}/${element.location}`} target='_blank'>{element.asignation}</a>
                </div>
                <div className={s.grid3}>

                </div>
              </>
            )
          })
          :
          null
        }


      </div>

    </>
  )
}

export default DocList;