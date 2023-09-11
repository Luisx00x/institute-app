'use client'
import s from '@/app/Admin/layout.module.css'
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { TEACHER_ROUTES as menuRoutes } from '@/routes';


const teacherLayout = ({children}) =>{

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