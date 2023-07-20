'use client'

import s from './ModalButton.module.css';
import { useDispatch } from "react-redux";
import { confirmModal, submitInfo } from "./ModalButtonHandler";
import { SUCCESS } from '@/const';

const ModalButton = ({text, type, data}) => {

  const dispatch = useDispatch();

  return (
    <>
      <button
      className={ type === SUCCESS ? s.success : s.failure}
      onClick={(e) => {
        if(data) submitInfo(e, data, dispatch)
        else{
          confirmModal(e, dispatch)
        }
      }}
      >{text}</button>
    </>
  )
}

export default ModalButton;