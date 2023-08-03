'use client'
import { useEffect } from 'react';
import s from './page.module.css';
import { callReport, studentCalifications } from './reportCardHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ReportCard = ({user}) => {

  const dispatch = useDispatch();
  const studentInfo = useSelector(state => state.student.studentInfo);
  const sectionInfo = useSelector(state => state.student.sectionInfo);
  const userId = user || useSelector(state => state.primarySlice.userLog?.id);
  let obj_url;
  const report = useSelector(state => state.student.report);
  
  useEffect( () => {
    
    if(studentInfo && sectionInfo){
      studentCalifications(dispatch, studentInfo.id, sectionInfo.id )

    }
    
  },[])
  
  useEffect( ( ) => {
    
    if(report){ 
      const frame = document.getElementById("calificationsFrame");
      obj_url = URL.createObjectURL(report);
      frame.setAttribute("src", obj_url);
    }

  },[report])

  const router = useRouter();
  const califications = useSelector(state => state.student.califications);

  return (
    <>

      <div className={s.container}>

        <h3>Libreta de calificaciones</h3>

        {
          studentInfo?.defaulter
          ?
          <section>
            <h5>Te encuentras moroso.</h5>
            <p>Para tener acceso a la libreta de calificaciones, ponte al día con los pagos de manutención</p>
          </section>
          :
          <section className={s.showContainer}>
            <Link className={s.reportButton} href={`/report/report/${sectionInfo?.id}/${studentInfo?.id}/${userId}`} target='_blank'>
                Ver calificaciones en pantalla completa
            </Link>
          
            <div className={s.reportButton} onClick={(e) => callReport(dispatch, e, studentInfo?.id, sectionInfo?.id, userId)}>
              Ver calificaciones en PDF
            </div>
          </section>
        }

        {
          report
          ?
          <iframe className={s.frame} id={"calificationsFrame"}></iframe>
          :
          null
        }
      
      </div>
    

    </>
  )
}

export default ReportCard;