'use client'
import Information from "@/components/information/Information";
import { searchIndividual } from "@/globalHandlers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const TeacherUI = () => {
  
  const router = useRouter();
  const user = useSelector(state => state.primarySlice.userLog);
  const dispatch = useDispatch();

 /*  useEffect( () => {
    if(user?.RolId !== 3) router.push("/");
  }, [])
   */

  useEffect( () => {

    searchIndividual(8, 3, 3, dispatch);

  },[]);

  return (
    <>
      
    </>
  )
}

export default TeacherUI;