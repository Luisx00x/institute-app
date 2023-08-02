'use client'
import ShowSchedules from "@/components/ShowSchedules/ShowSchedules";
import s from '@/app/student/schedules/page.module.css';
import { useSelector } from "react-redux";

const ParentSchedules = () => {

  const schedules = useSelector(state => state.student.schedules);

  return (
    <>
    <div className={s.container}>

          <div className={s.title}>
            <h3>Horario de clases</h3>
          </div>
          {
            schedules && schedules[0].hasOwnProperty("schedules")
            ?
            <ShowSchedules schedules={schedules} />
            :
            <h3>No tienes un horario asignado</h3>
          }

        </div>
    </>
  )
}

export default ParentSchedules;