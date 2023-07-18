import { FAILURE, SUCCESS } from '@/const';
import modals from '../Modals.module.css';
import s from './ModalMsg.module.css';
import ModalButton from '../ModalButton/ModalButton';
import failure2 from '@/../public/static/failure2.png';
import success from '@/../public/static/success.png';

const ModalMsg = ({type, title, msg}) => {
  return (
    <div className={modals.modalContainer}>
      

      <div className={s.message}>
        <p className={s.title}>{title}</p>
        {
          type === SUCCESS ? 
          <img className={modals.imgContainer} src={success.src} alt="success" /> : 
          type === FAILURE ?
          <img className={modals.imgContainer} src={failure2.src} alt="error" />  
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