'use client'
import { useEffect, useState } from 'react';
import s from './DocList.module.css';
import { useSelector } from 'react-redux';
import { CLASSES, HOMEWORKS } from '@/const';
import { getHomeworks, getSessions } from './DockListHandler';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const DocList = ({userId, courseId, listType, tableValues}) => {

  const [data, setData] = useState([]);
  const modal = useSelector(state => state.primarySlice.modal);
  const user = useSelector(state => state.primarySlice.userLog);

  useEffect( () => {
    
    if(user.RolId && listType === HOMEWORKS) getHomeworks(courseId, userId, user.RolId ,setData);

    if(user?.RolId && listType === CLASSES) getSessions(courseId, userId, user.RolId, setData);
    

  },[modal])

  
  return (
    <>
    {console.log(tableValues[1].col)}
        <div className={s.gridContainer}>
      {
        typeof data === "string"
        ? 
        <h3>{data}</h3>
        :
        <>
          <div className={s.grid1}>
            <h3>{tableValues[0].col}</h3>
          </div>

          <div className={s.grid2}>
            <h3>{tableValues[1].col}</h3>
          </div>

          <div className={s.grid3}>
            <h3>Opcion</h3>
          </div>
        </>
      }

        {
          typeof data === "string"
          ?
          null
          :
          data.map( element => {
            return (
              <>
                <div className={s.grid1}>
                  {element[tableValues[0].value]}
                </div>
                <div className={s.grid2}>
                  <a href={`${LOGIN_URL}/${element[tableValues[1].value]}`} target='_blank'>{element[tableValues[0].value]}</a>
                </div>
                <div className={s.grid3}>

                </div>
              </>
            )
          })
        }

      </div>

    </>
  )
}

export default DocList;