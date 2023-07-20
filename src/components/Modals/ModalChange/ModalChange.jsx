'use client'
import { SUCCESS } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalChange.module.css';
import { useState } from 'react';

const ModalChange = ({title, message, value}) => {

  const [input, setInput] = useState(value);

  return(
    <>
    
      <div className={modals.modalContainer}>

        <div className={s.modal}>
          
          <h2>{title}</h2>

          <p>{message}</p>

          <input type="number" value={input} onChange={(e) => setInput(  prev => {
            return e.target.value
          })} />

          <ModalButton type={SUCCESS} text={"Guardar"} />

        </div>

      </div>
    
    </>
  )
}

export default ModalChange