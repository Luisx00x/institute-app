import { FAILURE, SUCCESS } from '@/const';
import modals from '../Modals.module.css';
import s from './ModalMsg.module.css';
import ModalButton from '../ModalButton/ModalButton';

const ModalMsg = ({type, title, msg, buttonAction}) => {
  return (
    <div className={modals.modalContainer}>

      <div className={s.message}>
        <p className={s.title}>{title}</p>
        {
          type === SUCCESS ? 
          <img src="./public/success.png" alt="success" /> : 
          type === FAILURE ?
          <img className={modals.imgContainer} src="failure2.png" alt="error" />  
          :
          null
        }
        <p>{msg}</p>

        <ModalButton text={"Aceptar"} type={type} />
      </div>

    </div>
  )
}

export default ModalMsg;