'use client'
import { FAILURE, SUCCESS, UPHOMEWORK } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalAnswer.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getReleaseFile } from '../ModalButton/ModalButtonHandler';
const UPLOAD_ANSWER = process.env.NEXT_PUBLIC_UPLOAD_ANSWER;


const ModalAnswer = ({homeworkId}) => {

  const studentId = useSelector(state => state.student.studentInfo?.id);
  const [data, setData] = useState();
  const [inputs, setInputs] = useState({studentId, homeworkId, type: UPHOMEWORK})

  return (

    <>
        <div className={modals.modalContainer}>

          <div className={s.container}>
          
            <h3>Abjuntar tarea: </h3>
            <span>Selecciona la respuesta que deseas subir para esta asignación</span>
            <input 
            type="file" 
            name="homeworkAnswer" 
            onChange={(e) => setData( prev => getReleaseFile(e) )}/>

            <ModalButton text={"Enviar"}  type={SUCCESS} data={data} setData={setData} url={UPLOAD_ANSWER} uploadFile={true} input={inputs} setInput={setInputs}/>
            <ModalButton text={"Cancelar"} type={FAILURE} />

          </div>

        </div>
    
    </>
  )
}

export default ModalAnswer;