import s from './schedules.module.css';

const matematica = {schedules:[{day: "Lunes", init: "09:10", end: "10:45"},{day: "Miercoles", init: "07:30", end: "09:00" }], Course: "matematica"}
const quimica = {schedules:[{day:"Lunes", init: "07:30", end: "09:00"}, {day: "Jueves", init: "10:45", end: "11:30"}], Course: "quimica"}
const fisica = {schedules:[{day:"Lunes", init: "13:45", end: "15:30"}], Course: "Fisica"}

const materias = [matematica, quimica, fisica];

const Lunes = [];
const Martes = [];
const Miercoles = [];
const Jueves = [];
const Viernes = [];

materias.forEach( materia => {
  materia.schedules.forEach(schedule => {
    if(schedule.day == "Lunes"){
      Lunes.push([schedule.init, schedule.end, materia.Course]);
    }
    if(schedule.day == "Martes"){
      Martes.push([schedule.init, schedule.end, materia.Course]);
    }
    if(schedule.day == "Miercoles"){
      Miercoles.push([schedule.init, schedule.end, materia.Course]);
    }
    if(schedule.day == "Jueves"){
      Jueves.push([schedule.init, schedule.end, materia.Course]);
    }
    if(schedule.day == "Viernes"){
      Viernes.push([schedule.init, schedule.end, materia.Course]);
    }
  })
}) 

//const sortLunes = Lunes.sort( (a,b) => parseInt(a[0].slice(0,2)) - parseInt(b[0].slice(0,2)));


const ShowSchedules = () => {
  return (
    <>
        <div className={s.gridSchedules}>

      {/* //? DIAS */}
        <div className={`${s.schedulesCol1}`}> Hora </div>
        <div className={`${s.schedulesCol2}`}> Lunes </div>
        <div className={`${s.schedulesCol3}`}> Martes </div>
        <div className={`${s.schedulesCol4}`}> Miercoles </div>
        <div className={`${s.schedulesCol5}`}> Jueves </div>
        <div className={`${s.schedulesCol6}`}> Viernes </div>

      {/* //? HORAS */}

        <div className={`${s.schedulesHour1}`}> 07:30 - 08:15</div>
        <div className={`${s.schedulesHour2}`}> 08:15 - 09:00</div>
        <div className={`${s.schedulesHour3}`}> 09:00 - 09:45</div>
        <div className={`${s.schedulesHour4}`}> 09:45 - 10:30</div>
        <div className={`${s.schedulesHour5}`}> 10:30 - 11:15</div>
        <div className={`${s.schedulesHour6}`}> 11:15 - 12:00</div>
        <div className={`${s.schedulesHour7}`}> 12:00 - 12:45</div>
        <div className={`${s.schedulesHour8}`}> 12:45 - 01:30</div>
        <div className={`${s.schedulesHour9}`}> 01:30 - 02:15</div>
        <div className={`${s.schedulesHour10}`}> 02:15 - 03:00</div>
        <div className={`${s.schedulesHour11}`}> 03:00 - 03:45</div>
        <div className={`${s.schedulesHour12}`}> 03:45 - 04:30</div>
        <div className={`${s.schedulesHour13}`}> 04:30 - 05:15</div>
        <div className={`${s.schedulesHour14}`}> 05:15 - 06:00</div>
        

        {
          Lunes.map( course => {

            const initHour = course[0].split(":");
            const endHour = course[1].split(":");
            
            let initHValue = 0, initMinValue = 0, resultInit = 0
            let endHValue = 0, endMinValue = 0, resultEnd = 0
  
            const initMin = parseInt(initHour[1]);
            const initH = parseInt(initHour[0]);

            const endMin = parseInt(endHour[1]);
            const endH = parseInt(endHour[0])

            if(initH == 7){
              initHValue = 0;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin > 30){
              initHValue = (initH-7)*60;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin == 30){
              initHValue = (initH-7)*60;
              initMinValue = 0;
            }
            if(initH > 7 && initMin < 30){
              initMinValue = 30 + initMin;
              initHValue = (initH - 8)*60;
            }

            if(endH == 7){
              endHValue = 0;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin > 30){
              endHValue = (endH-7)*60;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin == 30){
              endHValue = (endH-7)*60;
              endMinValue = 0;
            }
            if(endH > 7 && endMin < 30){
              endMinValue = 30 + endMin;
              endHValue = (endH - 8)*60;
            }

            resultInit = (initHValue+initMinValue)/5;
            resultEnd = (endHValue+endMinValue)/5;

            return (
              <div className={s.schedulesCol2} style={{gridRow:`${resultInit+2}/${resultEnd+2}`}} >
                <label className={s.labels}>{course[2]}</label>
                <label className={s.labels}>{"AULA X"}</label>
                <label className={s.labels}>{course[0]}-{course[1]}</label>
              </div>
            )
          })
        }

        {
          Martes.map( course => {

            const initHour = course[0].split(":");
            const endHour = course[1].split(":");
            
            let initHValue = 0, initMinValue = 0, resultInit = 0
            let endHValue = 0, endMinValue = 0, resultEnd = 0
  
            const initMin = parseInt(initHour[1]);
            const initH = parseInt(initHour[0]);

            const endMin = parseInt(endHour[1]);
            const endH = parseInt(endHour[0])

            if(initH == 7){
              initHValue = 0;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin > 30){
              initHValue = (initH-7)*60;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin == 30){
              initHValue = (initH-7)*60;
              initMinValue = 0;
            }
            if(initH > 7 && initMin < 30){
              initMinValue = 30 + initMin;
              initHValue = (initH - 8)*60;
            }

            if(endH == 7){
              endHValue = 0;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin > 30){
              endHValue = (endH-7)*60;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin == 30){
              endHValue = (endH-7)*60;
              endMinValue = 0;
            }
            if(endH > 7 && endMin < 30){
              endMinValue = 30 + endMin;
              endHValue = (endH - 8)*60;
            }

            resultInit = (initHValue+initMinValue)/5;
            resultEnd = (endHValue+endMinValue)/5;

            return (
              <div className={s.schedulesCol3} style={{gridRow:`${resultInit+2}/${resultEnd+2}`}} >
                <label className={s.labels}>{course[2]}</label>
                <label className={s.labels}>{"AULA X"}</label>
                <label className={s.labels}>{course[0]}-{course[1]}</label>

              </div>
            )

          })
        }

        {
          Miercoles.map( course => {

            const initHour = course[0].split(":");
            const endHour = course[1].split(":");
            
            let initHValue = 0, initMinValue = 0, resultInit = 0
            let endHValue = 0, endMinValue = 0, resultEnd = 0
  
            const initMin = parseInt(initHour[1]);
            const initH = parseInt(initHour[0]);

            const endMin = parseInt(endHour[1]);
            const endH = parseInt(endHour[0])

            if(initH == 7){
              initHValue = 0;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin > 30){
              initHValue = (initH-7)*60;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin == 30){
              initHValue = (initH-7)*60;
              initMinValue = 0;
            }
            if(initH > 7 && initMin < 30){
              initMinValue = 30 + initMin;
              initHValue = (initH - 8)*60;
            }

            if(endH == 7){
              endHValue = 0;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin > 30){
              endHValue = (endH-7)*60;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin == 30){
              endHValue = (endH-7)*60;
              endMinValue = 0;
            }
            if(endH > 7 && endMin < 30){
              endMinValue = 30 + endMin;
              endHValue = (endH - 8)*60;
            }

            resultInit = (initHValue+initMinValue)/5;
            resultEnd = (endHValue+endMinValue)/5;

            return (
              <div className={s.schedulesCol4} style={{gridRow:`${resultInit+2}/${resultEnd+2}`}} >
                <label className={s.labels}>{course[2]}</label>
                <label className={s.labels}>{"AULA X"}</label>
                <label className={s.labels}>{course[0]}-{course[1]}</label>

              </div>
            )

          })
        }

        {
          Jueves.map( course => {

            const initHour = course[0].split(":");
            const endHour = course[1].split(":");
            
            let initHValue = 0, initMinValue = 0, resultInit = 0
            let endHValue = 0, endMinValue = 0, resultEnd = 0
  
            const initMin = parseInt(initHour[1]);
            const initH = parseInt(initHour[0]);

            const endMin = parseInt(endHour[1]);
            const endH = parseInt(endHour[0])

            if(initH == 7){
              initHValue = 0;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin > 30){
              initHValue = (initH-7)*60;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin == 30){
              initHValue = (initH-7)*60;
              initMinValue = 0;
            }
            if(initH > 7 && initMin < 30){
              initMinValue = 30 + initMin;
              initHValue = (initH - 8)*60;
            }

            if(endH == 7){
              endHValue = 0;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin > 30){
              endHValue = (endH-7)*60;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin == 30){
              endHValue = (endH-7)*60;
              endMinValue = 0;
            }
            if(endH > 7 && endMin < 30){
              endMinValue = 30 + endMin;
              endHValue = (endH - 8)*60;
            }

            resultInit = (initHValue+initMinValue)/5;
            resultEnd = (endHValue+endMinValue)/5;

            return (
              <div className={s.schedulesCol5} style={{gridRow:`${resultInit+2}/${resultEnd+2}`}} >
                <label className={s.labels}>{course[2]}</label>
                <label className={s.labels}>{"AULA X"}</label>
                <label className={s.labels}>{course[0]}-{course[1]}</label>
  
              </div>
            )

          })
        }
        
        {
          Viernes.map( course => {

            const initHour = course[0].split(":");
            const endHour = course[1].split(":");
            
            let initHValue = 0, initMinValue = 0, resultInit = 0
            let endHValue = 0, endMinValue = 0, resultEnd = 0
  
            const initMin = parseInt(initHour[1]);
            const initH = parseInt(initHour[0]);

            const endMin = parseInt(endHour[1]);
            const endH = parseInt(endHour[0])

            if(initH == 7){
              initHValue = 0;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin > 30){
              initHValue = (initH-7)*60;
              initMinValue = initMin - 30;
            }
            if(initH > 7 && initMin == 30){
              initHValue = (initH-7)*60;
              initMinValue = 0;
            }
            if(initH > 7 && initMin < 30){
              initMinValue = 30 + initMin;
              initHValue = (initH - 8)*60;
            }

            if(endH == 7){
              endHValue = 0;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin > 30){
              endHValue = (endH-7)*60;
              endMinValue = endMin - 30;
            }
            if(endH > 7 && endMin == 30){
              endHValue = (endH-7)*60;
              endMinValue = 0;
            }
            if(endH > 7 && endMin < 30){
              endMinValue = 30 + endMin;
              endHValue = (endH - 8)*60;
            }

            resultInit = (initHValue+initMinValue)/5;
            resultEnd = (endHValue+endMinValue)/5;
            console.log(resultInit, "resultINIT")

            return (
              <div className={s.schedulesCol6} style={{gridRow:`${resultInit+2}/${resultEnd+2}`}} >
                <label className={s.labels}>{course[2]}</label>
                <label className={s.labels}>{"AULA X"}</label>
                <label className={s.labels}>{course[0]}-{course[1]}</label>
              
              </div>
            )

          })
        }

        </div>

    </>
  )
}

export default ShowSchedules;