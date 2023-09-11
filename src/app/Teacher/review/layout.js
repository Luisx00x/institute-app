'use client'
import s from '@/app/Admin/layout.module.css'
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const teacherLayout = ({children}) =>{

  const user = useSelector(state => state.primarySlice.userLog); 
  const router = useRouter();

   /*  if(!user?.RolId) router.push("/"); */

  return (
    <>
            {children}
    </>
  )

}

export default teacherLayout;