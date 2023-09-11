'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './page.module.css';
import { useEffect } from 'react';
import { studentCourses, studentInfo, studentSection } from './studentHandlers';
import { getSchedules } from './schedules/schedulesHandlers';


const StudentUI = () => {
  
  const user = useSelector(state => state.primarySlice.userLog);
  const dispatch = useDispatch();
  const sectionInfo = useSelector(state => state.student.sectionInfo);
  const schedules = useSelector(state => state.student.schedules);
  const studentInformation = useSelector(state => state.student.studentInfo);

  useEffect( () => {

    if(user) studentSection(dispatch, user.id, "");
    if(user) studentInfo(dispatch, user.id, "")
    
  },[])
  
  useEffect( () => {
    
    if(sectionInfo) getSchedules(dispatch, sectionInfo.id, "")
    if(sectionInfo) studentCourses(dispatch, sectionInfo.id)

  },[sectionInfo])

  return (
    <>
   
        Bienvenido
    </>
  )
}

export default StudentUI;