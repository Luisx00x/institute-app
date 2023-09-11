'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './page.module.css';
import { useEffect } from 'react';
import { findParentInfo, findParentStudents } from './parentsHandler';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const ParentsHome = () => {

  const user = useSelector(state => state.primarySlice.userLog);
  const parentId = useSelector( state => state.parent.parentInfo?.DNI);
  const students = useSelector( state => state.parent.parentStudents);
  const dispatch = useDispatch();
  const path = usePathname();

  useEffect( () => {

    if(user?.RolId) findParentInfo(dispatch, user.id);
    
  },[])
  
  useEffect( () => {

    if(parentId) findParentStudents(dispatch, parentId);
    
  },[parentId])

  return (
    <>

      <div className={s.container}>

        <h2>Por favor, seleccione al alumno del cual desea ver información</h2>

      <div className={s.itemsContainer}>

        {
          students
          ?
          students.map( student => {
            return (

              <Link key={student.id} className={s.link} href={`${path}/${student.id}`}>
                <div className={s.studentLink}>
                  <p>Nombre: {student.names} {student.fatherLastName} {student.motherLastName}</p>
                  <p>DNI: {student.DNI}</p>
                </div>
              </Link>

            )
          })
          :
          null
        }

      </div>

      </div>

    </>
  )
}

export default ParentsHome;