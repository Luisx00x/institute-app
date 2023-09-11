'use client'
import s from './layout.module.css';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const layout = ({children}) =>{

  const user = useSelector(state => state.primarySlice.userLog);
  const router = useRouter();

  useEffect( () => {
    if(user?.RolId !== 1) router.push("/");
  },[user])

  const menuRoutes = [
    {name: "Resumen", route: "/Admin"},
    {name: "Crear un nuevo año escolar", route: "/Admin/createYear"},
    {name: "Registrar Alumno", route: "/Admin/RegisterStudent"},
    {name: "Registrar Profesor", route: "/Admin/registerTeacher"},
    {name: "Crear un nuevo Curso", route: "/Admin/createCourse"},
    {name: "Asignar alumno a una sección", route: "/Admin/assignStudent"},
    {name: "Enviar un comunicado/citación", route: "/Admin/releases"}
  ]

  return (
    <>
    {
      <div className={s.container}>
        <Header />
        <div className={s.uiContainer}>
          <Sidebar menus={menuRoutes} />
            {children}
        </div>
      </div>
    }
    </>
  )

}

export default layout;