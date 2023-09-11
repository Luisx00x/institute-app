'use client'
import s from './layout.module.css';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ADMINROUTES as menuRoutes } from '@/routes';


const layout = ({children}) =>{

  const user = useSelector(state => state.primarySlice.userLog);
  const router = useRouter();

  useEffect( () => {
    if(user?.RolId !== 1) router.push("/");
  },[user])

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