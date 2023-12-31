'use client'
import { useEffect, useState } from 'react';
import s from './DocList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CLASSES, HOMEWORKS, REVIEW, STUDENT, TEACHER } from '@/const';
import { getHomeworks, getSessions, modalActivation } from './DockListHandler';
import ModalAnswer from '../Modals/ModalAnswer/ModalAnswer';
import { useRouter } from 'next/navigation';
import { setReviewsParam } from '@/redux/slice';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const DocList = ({userId, courseId, listType, tableValues, call, options}) => {

  const [data, setData] = useState([]);
  const modal = useSelector(state => state.primarySlice.modal);
  const user = useSelector(state => state.primarySlice.userLog);
  const reviewsParam = useSelector(state => state.teacher.reviewsParam);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect( () => {
    
    if(user.RolId && listType === HOMEWORKS) getHomeworks(courseId, userId, user.RolId ,setData);

    if(user?.RolId && listType === CLASSES) getSessions(courseId, userId, user.RolId, setData);
    

  },[modal])

  
  return (
    <>

      {
        modal.isActiveAlter
        ?
        <ModalAnswer {...modal} />
        :
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
                  
                  {
                    call === STUDENT
                    ?
                      <div className={s.sendAnswerButton} onClick={(e) => modalActivation(e, dispatch, element.id)}>Subir respuesta</div>
                    :
                    call === TEACHER && options === REVIEW
                    ?
                        <div 
                        className={s.sendAnswerButton} 
                        onClick={() => {
                          dispatch(setReviewsParam({ homeworkId: element.id }))
                          router.push('/Teacher/review')
                        }}
                        >Ver respuestas</div>
                    :
                    null
                  }

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

export default DocList;