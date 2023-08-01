'use client'
import s from './page.module.css';
import ShowSchedules from "@/components/ShowSchedules/ShowSchedules";

const StudentUI = () => {
  return (
    <>
        <div className={s.container}>

          <div className={s.title}>
            <h3>Horario de clases</h3>
          </div>
          <ShowSchedules />

        </div>

    </>
  )
}

export default StudentUI;