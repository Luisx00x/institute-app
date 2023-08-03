'use client'
import s from '@/app/Admin/layout.module.css'
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';


const tutorLayout = ({children}) =>{

  const menuRoutes = [
    {name: "Resumen", route: "/tutor"},
    {name: "Cargar calificaciones de conducta bimestrales", route: "/tutor/behavior"}
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

export default tutorLayout;