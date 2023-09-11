'use client'
import { FAILURE, SUCCESS } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalHomework.module.css';
import { CALIFICATIONS } from '@/const';
import { inputHandler } from '@/globalHandlers';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalMsg from '../ModalMsg/ModalMsg';
const SEND_CALIFICATION = process.env.NEXT_PUBLIC_SUBMIT_ANSWER;

const ModalHomework = ({homeworkAnswerId}) => {
  
  const [value, setValue] = useState({
    calification: " ",
    homeworkAnswerId
  });

  const modal = useSelector(state => state.primarySlice.modal);
  
  return (
    <>
      {
        modal.alterModal
        ?
        <ModalMsg {...modal} />
        :
        <div className={modals.modalContainer}>

          <div className={s.homeworkContainer}>

            <h3>Ingrese la calificación de la tarea del estudiante: </h3>
            
     
              <select id="homeworkCal" name="calification" onChange={(e) => inputHandler(e, setValue)}>

                <option value=" ">- -</option>
                {
                  CALIFICATIONS.map(calification => {
                  return (
                    <option value={calification}>{calification}</option>
                  )
                  })
                }

              </select>

              <ModalButton type={SUCCESS} text={"Calificar"} data={value} url={SEND_CALIFICATION} uploadFile={false} msg={true} />
              <ModalButton type={FAILURE} text={"Cancelar"} />
 

          </div>

        </div>
        
      }
    
    </>
  )
}

export default ModalHomework;