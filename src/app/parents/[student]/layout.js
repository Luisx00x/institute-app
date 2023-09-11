'use client'
import { usePathname } from 'next/navigation';
import s from './layout.module.css';
import Sidebar from '@/components/sidebar/Sidebar';

const layout = ({children}) =>{

  const path = usePathname();

  const param = path.split("/")[2]

  const menuRoutes = [
    {name: "Inicio", route: `/parents/${param}`},
    {name: "Horario", route: `/parents/${param}/schedules`},
    {name: "Ver comunicados", route: `/parents/${param}/releases`},
    {name: "Ver libreta de calificaciones", route: `/parents/${param}/reportCard`},
  ]

  const AlterRoute = {name: "Seleccionar hijo", route: `/parents`}

  return (
    <>
    {
      <div className={s.container}>
        <div className={s.uiContainer}>
          <Sidebar menus={menuRoutes} altMenu={AlterRoute} />
            {children}
        </div>
      </div>
    }
    </>
  )

}

export default layout;