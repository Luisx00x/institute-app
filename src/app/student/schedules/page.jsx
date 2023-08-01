'use client'
import ShowSchedules from "@/components/ShowSchedules/ShowSchedules";
import s from './page.module.css';
import { useEffect } from "react";
import { getSchedules } from "./schedulesHandlers";
import { useDispatch, useSelector } from "react-redux";

const Schedules = () => {

  const dispatch = useDispatch();
  const sectionInfo = useSelector(state => state.student.sectionInfo);

  useEffect( () => {

    getSchedules(dispatch, sectionInfo.id);

  },[])

  const schedules = useSelector(state => state.student.schedules);

  return (
    <>
    <div className={s.container}>

          <div className={s.title}>
            <h3>Horario de clases</h3>
          </div>
          <ShowSchedules schedules={schedules} />

        </div>
    </>
  )
}

export default Schedules;