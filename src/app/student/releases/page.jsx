'use client'
import ShowReleases from "@/components/ShowReleases/ShowReleases";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchReleases } from "./releasesHandlers";

const StudentReleases = () => {
  
  const dispatch = useDispatch();
  const releases = useSelector(state => state.student.releases);
  const studentId = useSelector(state => state.student.studentInfo.id);
  const sectionId = useSelector(state => state.student.sectionInfo.id);

  useEffect( () => {
    
    searchReleases(dispatch, studentId, sectionId)

  },[])
  
  return (
    <>
        {
          releases
          ?
          <ShowReleases releases={releases?.student} />
          :
          null
        }
    </>
  )
}

export default StudentReleases;