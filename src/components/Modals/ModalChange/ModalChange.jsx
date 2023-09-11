'use client'
import { FAILURE, SUCCESS } from '@/const';
import ModalButton from '../ModalButton/ModalButton';
import modals from '../Modals.module.css';
import s from './ModalChange.module.css';
import { useEffect, useState } from 'react';
import { absencesChange, changeSelect } from './modalChangeHandler';
const ABSENCES_URL = process.env.NEXT_PUBLIC_ABSENCES_URL;
const ATTENDANCE_URL = process.env.NEXT_PUBLIC_SEND_ATTENDANCE;
import { CALIFICATIONS  } from '@/const';

const ModalChange = ({studentId, justifiedFault, absences, delays, title, message, values, attendanceId}) => {

  const bimester = ["B1","B2","B3","B4"]

  const setValues = {
    ...values,
    attendanceId,
    studentId: studentId,
    justifiedFault,
    absences, 
    delays
  }
  
  const [justifiedFaultInput, setJustifiedFaultInput] = useState({...setValues.justifiedFault});
  const [absencesInput, setAbsencesInput] = useState({...setValues.absences});
  const [delaysInput, setDelaysInput] = useState({...setValues.delays});
  const [input, setInput] = useState(setValues);

  useEffect( () => {

    const justifiedFault = Object.values(justifiedFaultInput);

    setInput( prev => {
      return {
        ...prev,
        justifiedFault
      }
    })

  },[justifiedFaultInput])

  useEffect( () => {

    const absences = Object.values(absencesInput);

    setInput( prev => {
      return {
        ...prev,
        absences
      }
    })

  },[absencesInput])

  useEffect( ( ) => {

    const delays = Object.values(delaysInput)

    setInput( prev => {
      return {
        ...prev,
        delays
      }
    })

  },[delaysInput])

  return(
    <>
{console.log(input, "INPUT")}
      <div className={`${modals.modalContainer} ${s.overflow}`}>

        <div className={s.modal}>
          
          <h2 className={s.title}>{title}</h2>

          <p>{message}</p>

          {
            !attendanceId
            ?
            <>
              <div>
                <label>Faltas Justificadas: </label>
                <input 
                className={s.inputs}
                type="number" name="justifiedFault" 
                value={input.justifiedFault} 
                min={0}
                onChange={(e) => absencesChange(e, setInput)} />
              </div>

              <div>
                <label>Faltas Injustificadas: </label>
                <input 
                className={s.inputs}
                type="number" name="absences" 
                value={input.absences} 
                min={0}
                onChange={(e) => absencesChange(e, setInput)} />
              </div>

              <div>
                <label>Tardanzas: </label>
                <input 
                className={s.inputs}
                type="number" name="delays" 
                value={input.delays} 
                min={0}
                onChange={(e) => absencesChange(e, setInput)} />
              </div>
            </>
            :
            <div className={s.finalContainer}>
              {
              bimester.map( (bimest, index) => {
                
                return (
                <div className={s.items}>
                  <h3>Bimestre {bimest}</h3>
                  <div>
                    <label>Faltas Justificadas: </label>
                    <select
                    className={s.inputs}
                    name={`justifiedFault/${index}`}
                    value={justifiedFaultInput[index]} 
                    onChange={(e) => changeSelect(e, setJustifiedFaultInput)}
                    >
                      <option value=" ">-- --</option>
                      {
                        CALIFICATIONS.map( calification => {
                          return (
                            <option value={calification}>{calification}</option>
                          )
                        })
                      }
                  
                  
                    </select>
                  </div>
  
                  <div>
                    <label>Faltas Injustificadas: </label>
                    <select
                    className={s.inputs}
                    value={absencesInput[index]} 
                    name={`absences/${index}`}
                    onChange={(e) => changeSelect(e, setAbsencesInput)}
                    >
                      <option value=" ">-- --</option>
                      {
                        CALIFICATIONS.map( calification => {
                          return (
                            <option value={calification}>{calification}</option>
                          )
                        })
                      }
                  
                  
                    </select>
                  </div>
  
                  <div>
                    <label>Tardanzas: </label>
                    <select
                    className={s.inputs}
                    name={`delays/${index}`}
                    value={delaysInput[index]} 
                    onChange={(e) => changeSelect(e, setDelaysInput)}
                    >
                      <option value=" ">-- --</option>
                      {
                        CALIFICATIONS.map( calification => {
                          return (
                            <option value={calification}>{calification}</option>
                          )
                        })
                      }
                  
                  
                    </select>
                  </div>
                </div>
                )
              })
              }
            </div>
          }

          <ModalButton type={SUCCESS} text={"Guardar"} data={input} url={attendanceId ? ATTENDANCE_URL : ABSENCES_URL} uploadFile={false}/>
          <ModalButton type={FAILURE} text={"Cancelar"} />

        </div>

      </div>
    
    </>
  )
}

export default ModalChange