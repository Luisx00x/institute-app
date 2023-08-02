'use client'
import s from '../Admin/layout.module.css';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';


const layout = ({children}) =>{

  const menuRoutes = [
    {name: "Inicio", route: "/student"},
    {name: "Horario", route: "/student/schedules"},
    {name: "Subir tarea", route: "/Admin/createYear"},
    {name: "Ver comunicados", route: "/Admin/registerTeacher"},
    {name: "Ver libreta de calificaciones", route: "/student/reportCard"},
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