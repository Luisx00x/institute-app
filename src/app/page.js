'use client'
import Login from '@/components/login/Login';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ModalMsg from '@/components/Modals/ModalMsg/ModalMsg';

export default function Home() {

  const modal = useSelector(state => state.primarySlice.modal);

  const user = useSelector(state => state.primarySlice.userLog);
  const router = useRouter();

  useEffect( () => {
    if(user?.RolId === 1){
      router.push("/Admin");
    }
    if(user?.RolId === 3) router.push("/Teacher");
    if(user?.RolId === 2) router.push("/student");
    if(user?.RolId === 4) router.push("/parents");
  },[user])

  return (
    <>
      {modal.isActive ? <ModalMsg {...modal} /> : null}
      <Login />
    </>      
  )
}
