'use client'

import s from './ModalButton.module.css';
import { useDispatch } from "react-redux";
import { confirmModal, submitInfo, submitReleaseFile } from "./ModalButtonHandler";
import { SUCCESS } from '@/const';

const ModalButton = ({text, type, data, setData, url, uploadFile, input, setInput, msg}) => {

  const dispatch = useDispatch();

  return (
    <>
      <button
      className={ type === SUCCESS ? s.success : s.failure}
      onClick={(e) => {

        if(data && uploadFile == false) submitInfo(e, data, dispatch, url, msg);
        if(data && uploadFile == true) submitReleaseFile(e, data, input, dispatch, setData, setInput, url);
        else{
          confirmModal(e, dispatch)
        }
      
      }}
      >{text}</button>
    </>
  )
}

export default ModalButton;