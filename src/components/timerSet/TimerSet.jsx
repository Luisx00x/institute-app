'use client'
import { useState } from 'react';
import s from './TimerSet.module.css';
import { formatingData, timeInputHandler, validateInput } from './TimeSetHandlers';
import { inputHandler } from '@/app/Admin/registersHandler';

let validateHour = "", validateMin = "";

const TimerSet = ({set, inputName, index}) => {

  const [format, setFormat] = useState({
    hour: "",
    min: "",
    period: ""
  })


  return (
    <div className={s.timer}>

      <div className={s.blocks}>
        <input type="number" min={0} max={23}
        name="hour"
        onKeyDown={(e) => validateHour = validateInput(e, validateHour) }
        value={format.hour}
        onChange={(e) => {
          timeInputHandler(e, setFormat, validateHour);
          formatingData(set, inputName, format, index);
        } }
        />
        <span>Hora</span>
      </div>

      :

      <div className={s.blocks}>
        <input 
        type="number"
         min={0} max={59} 
         name="min" 
         onKeyDown={(e) => validateMin = validateInput(e, validateMin) }
         onChange={(e) => {
          timeInputHandler(e, setFormat, validateMin);
          formatingData(set, inputName, format, index);
        } }
         value={format.min}
        />
        <span>Minutos</span>
      </div>

      <div className={s.blocks}>
        <select name="period" id="period" onChange={(e) => {
          inputHandler(e, setFormat)
          formatingData(set, inputName, format);
          }}>
          <option value="">-- AM - PM --</option>
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>

    </div>
  )

}

export default TimerSet;