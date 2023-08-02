'use client'
import { usePathname } from 'next/navigation';
import s from './layout.module.css';
import Sidebar from '@/components/sidebar/Sidebar';


const layout = ({children}) =>{

  const path = usePathname();

  const menuRoutes = [
    {name: "Inicio", route: `${path}`},
    {name: "Horario", route: `${path}/schedules`},
    {name: "Ver comunicados", route: `${path}/releases`},
    {name: "Ver libreta de calificaciones", route: `${path}/reportCard`},
  ]

  return (
    <>
    {
      <div className={s.container}>
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