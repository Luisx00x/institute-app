'use client'
import Header from "@/components/header/Header.jsx";
import s from './page.module.css';
import Sidebar from "@/components/sidebar/Sidebar";
import Information from "@/components/information/Information";
import RegisterStudent from "./RegisterStudent/page";
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