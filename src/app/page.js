'use client'
import Login from '@/components/login/Login';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {

  const user = useSelector(state => state.primarySlice.userLog);
  const router = useRouter();

  useEffect( () => {
    if(user.RolId === 1){
      router.push("/Admin");
    }
  },[user])

  return (
    <>
          <Login />
    </>      
  )
}
