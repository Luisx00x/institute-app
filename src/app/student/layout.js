'use client'
import s from '../Admin/layout.module.css';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { STUDENT_ROUTES as menuRoutes } from '@/routes';

const layout = ({children}) =>{

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