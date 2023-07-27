'use client'
import { FAILURE, SUCCESS } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalChange.module.css';
import { useState } from 'react';
const ABSENCES_URL = process.env.NEXT_PUBLIC_ABSENCES_URL;

const ModalChange = ({studentId, title, message, values}) => {

  const setValues = {
    ...values,
    studentId: studentId
  }

  const [input, setInput] = useState(setValues);

  return(
    <>
    
      <div className={modals.modalContainer}>

        <div className={s.modal}>
          
          <h2>{title}</h2>

          <p>{message}</p>

          <input type="number" name="absences" 
          value={input.absences} 
          min={0}

          onChange={(e) => setInput(  prev => {
            return {
              ...prev,
              [e.target.name]: parseInt(e.target.value)
            }
          })} />

          <ModalButton type={SUCCESS} text={"Guardar"} data={input} url={ABSENCES_URL} />
          <ModalButton type={FAILURE} text={"Cancelar"} />

        </div>

      </div>
    
    </>
  )
}

export default ModalChange