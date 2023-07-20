'use client'
import { FAILURE, SUCCESS } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalChange.module.css';
import { useState } from 'react';

const ModalChange = ({title, message, values}) => {

  const [input, setInput] = useState(values);

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

          <ModalButton type={SUCCESS} text={"Guardar"} data={input} />
          <ModalButton type={FAILURE} text={"Cancelar"} />

        </div>

      </div>
    
    </>
  )
}

export default ModalChange