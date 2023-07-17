'use client'

import s from './ModalButton.module.css';
import { useDispatch } from "react-redux";
import { confirmModal } from "./ModalButtonHandler";
import { SUCCESS } from '@/const';

const ModalButton = ({text, type}) => {

  const dispatch = useDispatch();

  return (
    <>
      <button
      className={ type === SUCCESS ? s.success : s.failure}
      onClick={(e) => confirmModal(e, dispatch) }
      >{text}</button>
    </>
  )
}

export default ModalButton;