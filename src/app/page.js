'use client'
import Login from '@/components/login/Login';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Home() {

  const user = useSelector(state => state.primarySlice.userLog);
  const router = useRouter();

  return (
    <>
        { user.RolId === 1 ? router.push('/Admin') : null}
          <Login />
    </>      
  )
}
