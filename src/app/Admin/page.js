'use client'
import Information from "@/components/information/Information";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminUI = () => {

  const router = useRouter();
  const user = useSelector(state => state.primarySlice.userLog);

  useEffect( () => {
    if(user?.RolId !== 1 || user === null) router.push("/");
  },[])

  return (
    <>
      { 
      <Information />
      }
    </>
  )
}

export default AdminUI;