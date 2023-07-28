'use client'
import { FAILURE, SUCCESS } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalReleases.module.css';
import { useState } from 'react';
import { inputHandler } from '@/globalHandlers';
import { getReleaseFile } from '../ModalButton/ModalButtonHandler';
const CREATE_RELEASE = process.env.NEXT_PUBLIC_CREATE_RELEASE;

const ModalReleases = ({title, sender, userRol, sectionId}) => {

  const [inputs, setInputs] = useState({
    sender,
    userRol,
    sectionId,
    title: "",
  });

  const [data, setData] = useState()

  return (
    <>

      <div className={modals.modalContainer}>

        <div className={s.releaseModal}>
         
          <h2>{title}</h2>

          <div>
            <label>Título del comunicado: </label>
            <input name='title' type="text" onChange={(e) => inputHandler(e, setInputs)} />
          </div>

          <div>
            <label>Archivo: </label>
            <input type="file" name="" onChange={(e) => setData( prev => getReleaseFile(e))}/>
          </div>

          <div>
            {/* TEXT / TYPE / DATA / URL */}
            <ModalButton text={"Enviar"}  type={SUCCESS} data={data} setData={setData} url={CREATE_RELEASE} uploadFile={true} input={inputs} setInput={setInputs}/>
            <ModalButton text={"Cancelar"} type={FAILURE} />
          </div>
        
        </div>


      </div>
    
    </>
  )

}

export default ModalReleases;