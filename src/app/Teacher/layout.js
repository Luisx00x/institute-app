'use client'
import s from '@/app/Admin/layout.module.css'
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';


const teacherLayout = ({children}) =>{

  const menuRoutes = [
    {name: "Resumen", route: "/Teacher"},
    {name: "Ver materias", route: "/Teacher/courses"},
    {name: "Dejar tarea", route: "/Teacher/homeworks"},
    {name: "Calificar tareas", route: "/Teacher/reviews"},
    {name: "Enviar comunicado", route: "/Teacher/releases"},
    {name: "Subir clases", route: "/Teacher/class"},
    {name: "Asistencias", route: "/Teacher/list"},
    {name: "Cargar calificación bimestreal", route: "/Teacher/uploadNotes"}
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

export default teacherLayout;