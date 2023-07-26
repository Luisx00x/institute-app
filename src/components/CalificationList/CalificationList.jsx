'use client'
import { useRouter } from 'next/navigation';
import s from './CalificationList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalCal from '../Modals/ModalCal/ModalCal';
import { calificationsChange } from './calificationsHandlers';
import { useEffect } from 'react';
import { setTeacherInformation } from '@/globalHandlers';

const CalificationList = ({list, skills, courseId}) => {

const router = useRouter();
const modal = useSelector(state => state.primarySlice.modal);
const user = useSelector(state => state.primarySlice.userLog);
const abbrevsList = skills.find( abbrev => abbrev.id === parseInt(courseId)).Abbrev
const abbreviation = abbrevsList[0].slice(0, abbrevsList[0].length-1);
const bimesters = ["BM1","BM2","BM3","BM4"];
const dispatch = useDispatch();

const califications = list.map( item => {
  return item.Califications.filter( cal => cal.CourseId === parseInt(courseId));
})

const thisYear = new Date().getFullYear();

useEffect( () => {
  if(user?.RolId !== 3) router.push("/");
},[]);

useEffect( () => {
  if(user?.RolId){
    setTeacherInformation(user.id, user.RolId, user.RolId,thisYear, dispatch);
  }
},[modal])

let count = 0;
let count1 = 1;

return (
  <>
    {
    modal.isActive 
    ?
    <ModalCal {...modal} abbreviation={abbreviation} skillsLength={abbrevsList} />
    :
    null
    }
    <div className={s.listContainer}>
    
      <button 
        className={s.closeButton}
        onClick={(e) => {
        e.preventDefault();
        router.back();
        }}>Cerrar ventana de calificaciones</button>
  
        <div id="reportCard" className={s.reportContainer}>
        
        <div className={s.gridData}>

          <div className={s.label}>asds</div>

        </div>

        <div className={s.gridData}>
        
          <div className={`${s.label} ${s.col1} ${s.camp}`}>
            <b>Nombres</b>
          </div>

          <div className={`${s.label} ${s.col2} ${s.camp}`}>
            <b>Apellidos</b>
          </div>

      
          {
            bimesters.map( (bimester, index1) => {
              count++;
              return (
                <>

                {
                abbrevsList?.map( (abbrev) => {
                  count++
                  return (
                    <>
                      <div style={{gridColumn:`${count+1}`}} className={`${s.label}`}>{abbrev}-{index1+1}</div>
                    </>
                  )
                })
                }
                
                <div style={{gridColumn:`${count+2}`}} className={`${s.label} ${s.camp}`}>{abbreviation}-{index1+1}B</div>
                </>
              )
            })
          }

          <div style={{gridColumn:`${count+3}`}} className={`${s.label} ${s.camp}`}>
            <b>Opciones</b>
          </div>
        
        {
          list?.map( (item, index) => {
            return (
              <>
                <div className={`${s.col1} ${s.label}`}>{item.names}</div>
                <div className={`${s.col2} ${s.label}`}>{item.fatherLastName} {item.motherLastName}</div>
                
                {
                  califications[index][0][`B1`].map( ele => {
                    return (
                      <>
                        <div className={`${s.label}`}>{ele}</div>
                      </>
                    )
                  })
                }

                {
                  <div className={`${s.label} ${s.prom}`}>{califications[index][0].prom1}</div>
                }
                
                {
                  califications[index][0][`B2`].map( ele => {
                    return (
                      <>
                        <div className={`${s.label}`}>{ele}</div>
                      </>
                    )
                  })
                }

                {
                  <div className={`${s.label} ${s.prom}`}>{califications[index][0].prom2}</div>
                }

              {
                califications[index][0][`B3`].map( ele => {
                  return (
                    <>
                      <div className={`${s.label}`}>{ele}</div>
                    </>
                  )
                })
              }

              {
                  <div className={`${s.label} ${s.prom}`}>{califications[index][0].prom3}</div>
              }

              {
                califications[index][0][`B4`].map( ele => {
                  return (
                    <>
                      <div className={`${s.label}`}>{ele}</div>
                    </>
                  )
                })
              }

              {
                  <div className={`${s.label} ${s.prom}`}>{califications[index][0].prom4}</div>
              }
              

              <div style={{gridColumn:`${count+3}`}} className={`${s.label}`}>
                <button onClick={(e) => calificationsChange(e, list[index], califications[index][0], dispatch)}>Calificar</button>
              </div>
              </>
            )
          })
        }



        {/* <div className={s.mainTitleContainer}>
          <h2 className={s.h2Title}>Boletín de información "año"</h2>
          <h2 className={s.h2Title }>I.E.P.C. HEFZIBÁ</h2>
        </div> */}



        </div>

        </div>
      </div>
    
    </>
    
  )
}

export default CalificationList;