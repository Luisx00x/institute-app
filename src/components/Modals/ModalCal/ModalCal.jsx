'use client'
import modals from '@/components/Modals/Modals.module.css'
import s from './ModalCal.module.css';
import { BMhandler, promHandlers } from './modalCalHandlers';
import { useEffect, useState } from 'react';
import ModalButton from '../ModalButton/ModalButton';
import { FAILURE, SUCCESS } from '@/const';
const SUBMIT_CAL = process.env.NEXT_PUBLIC_CALIFICATIONS_URL; 

const ModalCal = ({student, calif, abbreviation, skillsLength}) => {
  
  const [inputs, setInputs] = useState({
    B1: calif.B1,
    B2: calif.B2,
    B3: calif.B3,
    B4: calif.B4,
    prom1: calif.prom1,
    prom2: calif.prom2,
    prom3: calif.prom3,
    prom4: calif.prom4,
    calificationId: calif.id
  });

  useEffect( () => {
    
    setInputs( prev => {
      const bimester = {
        B1: [],
        B2: [],
        B3: [],
        B4: []
      }
      skillsLength.forEach( ( undefined,index) => {
        const evalB1 = prev.B1[index] == " " ? "" : prev.B1[index];
        bimester.B1.push(evalB1);

        const evalB2 = prev.B2[index] == " " ? "" : prev.B2[index];
        bimester.B2.push(evalB2);

        const evalB3 = prev.B3[index] == " " ? "" : prev.B3[index];
        bimester.B3.push(evalB3);
        
        const evalB4 = prev.B4[index] == " " ? "" : prev.B4[index];
        bimester.B4.push(evalB4)
      });

      return { 
        ...prev,
          ...bimester,
          prom1: prev.prom1 === " " ? "" : prev.prom1,
          prom2: prev.prom2 === " " ? "" : prev.prom2,
          prom3: prev.prom3 === " " ? "" : prev.prom3,
          prom4: prev.prom4 === " " ? "" : prev.prom4,
        }
    })
  
  },[])

  return (
    <>

      <div className={`${modals.modalContainer} ${s.overflow}`}>
        
        <div className={s.container}>

          <label><b>Estudiante: </b></label>
          <span> {student.names} {student.fatherLastName} {student.motherLastName}</span>
          
          <div className={s.bimestersContainer}>

            <div className={s.bimester}>
              <h3>1er Bimestre</h3>
              {
                calif.B1.map( (cal,index) => {
                  return (
                    <>
                      <label>{abbreviation}-{index+1}</label>
                      <input value={`${inputs.B1[index]}`} name={`B1/${index}`} type="text" onChange={(e) => BMhandler(e, setInputs)}/>
                    </>
                  )
                })
              }
              <label>{abbreviation}-1B</label>
              <input name={`prom1`} value={inputs.prom1} type="text" onChange={(e) => { promHandlers(e, setInputs) }}/>
            </div>

            <div className={s.bimester}>
              <h3>2do Bimestre</h3>
              {
                calif.B2.map( (cal,index) => {
                  return (
                    <>
                      <label>{abbreviation}-{index+1}</label>
                      <input value={`${inputs.B2[index]}`} name={`B2/${index}`} type="text" onChange={(e) => BMhandler(e, setInputs)}/>
                    </>
                  )
                })
              }
              <label>{abbreviation}-2B</label>
              <input value={inputs.prom2} name={`prom2`} type="text" onChange={(e) => promHandlers(e, setInputs)} />
            </div>

            <div className={s.bimester}>
              <h3>3er Bimestre</h3>
              {
                calif.B3.map( (cal,index) => {
                  return (
                    <>
                      <label>{abbreviation}-{index+1}</label>
                      <input value={`${inputs.B3[index]}`} name={`B3/${index}`} type="text" onChange={(e) => BMhandler(e, setInputs)} />
                    </>
                  )
                })
              }
              <label>{abbreviation}-3B</label>
              <input value={inputs.prom3} name={`prom3`} type="text" onChange={(e) => promHandlers(e, setInputs)} />
            </div>

            <div className={s.bimester}>
              <h3>4to Bimestre</h3>
              {
                calif.B4.map( (cal,index) => {
                  return (
                    <>
                      <label>{abbreviation}-{index+1}</label>
                      <input value={`${inputs.B4[index]}`} name={`B4/${index}`} type="text" onChange={(e) => BMhandler(e, setInputs)} />
                    </>
                  )
                })
              }
              <label>{abbreviation}-4B</label>
              <input value={inputs.prom4} name='prom4' type="text" onChange={(e) => promHandlers(e, setInputs)} />
            </div>


          </div>
          
          <div className={s.buttonsContainer}>
            <ModalButton type={SUCCESS} text={"Confirmar"} url={SUBMIT_CAL} data={inputs} uploadFile={false}/>
            <ModalButton type={FAILURE} text={"Cancelar"} />
          </div>
        </div>
      </div>
      

    </>
  )
}

export default ModalCal;