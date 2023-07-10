'use client'
import s from './layout.module.css';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';


const layout = ({children}) =>{

  const menuRoutes = [
    {name: "Resumen", route: "/Admin"},
    {name: "Registrar Alumno", route: "/Admin/registerStudent"},
    {name: "Registrar Profesor", route: "/Admin/registerTeacher"}
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