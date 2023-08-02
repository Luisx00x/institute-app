'use client'

import { getSchedules } from "@/app/student/schedules/schedulesHandlers";
import { studentInfo, studentSection } from "@/app/student/studentHandlers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChildOption = ({params}) => {

  const studentId = params.student;
  const dispatch = useDispatch();

  const childs = useSelector(state => state.parent.parentStudents)
  const sectionInfo = useSelector(state => state.student.sectionInfo)

  const student = childs?.find( child => child.id == studentId)

  useEffect( () => {

    studentSection(dispatch, student.UserId, "");
    studentInfo(dispatch, student.UserId, "");

  },[])

  useEffect( () => {

    if(sectionInfo) getSchedules(dispatch, sectionInfo.id, "");

  },[sectionInfo])

  return(
    <>
        {console.log(sectionInfo)}
    </>
  )
}

export default ChildOption;