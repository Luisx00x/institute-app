'use client'
import Information from "@/components/information/Information";
import { setTeacherInformation } from "@/globalHandlers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const thisYear = new Date().getFullYear();

const TeacherUI = () => {
  
  const router = useRouter();
  const user = useSelector(state => state.primarySlice.userLog);
  const dispatch = useDispatch();

  console.log(user)

 /*  useEffect( () => {
    if(user?.RolId !== 3) router.push("/");
  }, [])
   */

  useEffect( () => {

    setTeacherInformation(user.id, user.RolId, user.RolId, thisYear, dispatch);

  },[]);

  return (
    <>
      
    </>
  )
}

export default TeacherUI;