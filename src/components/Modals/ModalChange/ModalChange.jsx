'use client'
import { FAILURE, SUCCESS } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalChange.module.css';
import { useState } from 'react';
import { absencesChange } from './modalChangeHandler';
const ABSENCES_URL = process.env.NEXT_PUBLIC_ABSENCES_URL;

const ModalChange = ({studentId, justifiedFault, absences, delays, title, message, values}) => {

  const setValues = {
    ...values,
    studentId: studentId,
    justifiedFault,
    absences, 
    delays
  }

  const [input, setInput] = useState(setValues);

  return(
    <>
    
      <div className={modals.modalContainer}>

        <div className={s.modal}>
          
          <h2>{title}</h2>

          <p>{message}</p>

          <div>
            <label>Faltas Justificadas: </label>
            <input 
            className={s.inputs}
            type="number" name="justifiedFault" 
            value={input.justifiedFault} 
            min={0}
            onChange={(e) => absencesChange(e, setInput)} />
          </div>

          <div>
            <label>Faltas Injustificadas: </label>
            <input 
            className={s.inputs}
            type="number" name="absences" 
            value={input.absences} 
            min={0}
            onChange={(e) => absencesChange(e, setInput)} />
          </div>

          <div>
            <label>Tardanzas: </label>
            <input 
            className={s.inputs}
            type="number" name="delays" 
            value={input.delays} 
            min={0}
            onChange={(e) => absencesChange(e, setInput)} />
          </div>

          <ModalButton type={SUCCESS} text={"Guardar"} data={input} url={ABSENCES_URL} />
          <ModalButton type={FAILURE} text={"Cancelar"} />

        </div>

      </div>
    
    </>
  )
}

export default ModalChange