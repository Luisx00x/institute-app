'use client'
import s from '@/app/Admin/layout.module.css'
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { TUTOR_ROUTES as menuRoutes } from '@/routes';


const tutorLayout = ({children}) =>{

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