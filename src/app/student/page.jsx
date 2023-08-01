'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './page.module.css';
import { useEffect } from 'react';
import { studentSection } from './studentHandlers';


const StudentUI = () => {
  
  const user = useSelector(state => state.primarySlice.userLog);
  const dispatch = useDispatch();

  useEffect( () => {

    studentSection(dispatch, user.id, "");

  },[])

  const section = useSelector(state => state.student.sectionInfo);

  return (
    <>
    {console.log(section)}
        Bienvenido
    </>
  )
}

export default StudentUI;