'use client'
import s from './layout.module.css';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';


const layout = ({children}) =>{

  const menuRoutes = [
    {name: "Resumen", route: "/Admin"},
    {name: "Registrar Alumno", route: "/Admin/RegisterStudent"},
    {name: "Registrar Profesor", route: "/Admin/registerTeacher"},
    {name: "Crear un nuevo año escolar", route: "/Admin/createYear"},
    {name: "Crear un nuevo Curso", route: "/Admin/createCourse"},
    {name: "Asignar alumno a una sección", route: "/Admin/assignStudent"}
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