'use client'
import s from './layout.module.css';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
/* import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux'; */

const layout = ({children}) =>{

  /* const router = useRouter();
  const user = useSelector(state => state.primarySlice.userLog); */

  const menuRoutes = [
    {name: "Resumen", route: "/Admin"},
    {name: "Registrar alumno", route: "/Admin/RegisterStudent"}
  ]

  return (
    <>
    {
      /* user?.RolId !== 1 || user === null ? router.push("/") :  */

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