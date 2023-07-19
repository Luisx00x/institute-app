'use client'
import { useEffect, useState } from "react";
import { callData } from "./courseHandler";
import { useSelector } from "react-redux";
import Schedules from "@/components/Schedules/Schedules";


const Course = ({params}) => {

  //TODO USAR UN DISMOUNT PARA BORRAR EL STATE
  
  const { id } = params;

  const [data, setData] = useState();
  const user = useSelector(state => state.primarySlice.userLog);
  
  useEffect( () => {
    
    if(user?.RolId === 3){
      callData(id, user.RolId, setData);
    }

  },[user])

  const select = useSelector(state => state.teacher.courses)
  console.log(data)

  return (
    <>
        {
          data?.courseName ?
          <>
            <h2>{data.courseName}</h2>

            <Schedules />

          </>
          : null
        }
      
    </>
  )
}

export default Course;