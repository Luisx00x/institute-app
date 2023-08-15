'use client'
import { useState } from 'react';
import s from './TimerSet.module.css';
import { formatingData, timeInputHandler, validateInput } from './TimeSetHandlers';
import { inputHandler } from '@/app/Admin/registersHandler';
import { HOURS_AM, HOURS_PM, MINUTES } from '@/const';

let validateHour = "", validateMin = "";

const TimerSet = ({set, inputName, index}) => {

  const [format, setFormat] = useState({
    hour: "",
    min: "",
    period: "am"
  })


  return (
    <div className={s.timer}>
{console.log(format)}
      <div className={s.blocks}>

        {/* <input type="number" min={0} max={23}
        name="hour"
        onKeyDown={(e) => validateHour = validateInput(e, validateHour) }
        value={format.hour}
        onChange={(e) => {
          timeInputHandler(e, setFormat, validateHour);
          formatingData(set, inputName, format, index);
        } }
        />
        <span>Hora</span> */}

        <select 
        name={`hour`} 
        id={`selectHour${index}`}
        onChange={(e) => {
          inputHandler(e, setFormat);
          formatingData(set, inputName, format, index);
        }}
        >

          {
            format.period == "am"
            ?
            HOURS_AM.map( hour => {
              return (
                <option value={hour}>{hour}</option>
              )
            })
            :
            format.period == "pm"
            ?
            HOURS_PM.map( hour => {
              return (
                <option value={hour}>{hour}</option>
              )
            })
            :
            <option value={" "}>-- --</option>
          }

        </select>

        <span>Hora</span>

      </div>

      :

      <div className={s.blocks}>

       {/*  <input 
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
 */}
      <select 
      name={`min`} 
      id={`selectMin${index}`}
      onChange={(e) => {
        inputHandler(e, setFormat);
        formatingData(set, inputName, format, index);
      }}
      >

        {
          MINUTES.map( min => {
            return(
              <option value={min}>{min}</option>
            )
          })
        }

      </select>

      <span>Minutos</span>


      </div>

      <div className={s.blocks}>
        <select name="period" id="period" onChange={(e) => {
          inputHandler(e, setFormat)
          }}>
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>

    </div>
  )

}

export default TimerSet;