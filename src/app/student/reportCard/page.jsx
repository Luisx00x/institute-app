'use client'
import { useEffect } from 'react';
import s from './page.module.css';
import { callReport, studentCalifications } from './reportCardHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const ReportCard = () => {

  const dispatch = useDispatch();
  const studentInfo = useSelector(state => state.student.studentInfo);
  const sectionInfo = useSelector(state => state.student.sectionInfo);

  useEffect( () => {
  
    studentCalifications(dispatch, studentInfo.id, sectionInfo.id )

  },[])

  const router = useRouter();
  const califications = useSelector(state => state.student.califications);

  return (
    <>
    {console.log(studentInfo, "STUDENTINFO")}
    {console.log(sectionInfo, "SECTIONINFO")}
      <div className={s.container}>

        <h3>Libreta de calificaciones</h3>

        {
          studentInfo.defaulter
          ?
          <section>
            <h5>Te encuentras moroso.</h5>
            <p>Para tener acceso a la libreta de calificaciones, ponte al día con los pagos de manutención</p>
          </section>
          :
          <div className={s.reportButton} onClick={(e) => router.push('http://localhost:3000/reports')}>
            Ver calificaciones
          </div>
        }
      
      </div>
    

    </>
  )
}

export default ReportCard;