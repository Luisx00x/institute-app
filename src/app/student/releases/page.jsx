'use client'
import ShowReleases from "@/components/ShowReleases/ShowReleases";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchReleases } from "./releasesHandlers";
import TabMenu from "@/components/TabMenu/TabMenu";

const StudentReleases = () => {
  
  const dispatch = useDispatch();
  const releases = useSelector(state => state.student.releases);
  const studentId = useSelector(state => state.student.studentInfo?.id);
  const sectionId = useSelector(state => state.student.sectionInfo?.id);
  const [activeTab, setActiveTab] = useState(1);
  const tabOptions = ["Secciones", "Cursos", "Personales"]

  useEffect( () => {
    
    searchReleases(dispatch, studentId, sectionId)

  },[])
  
  return (
    <>

      <TabMenu active={activeTab} tabs={tabOptions} activeOption={setActiveTab} >
        {
          activeTab == 1
          ?
          <ShowReleases releases={releases?.section} />
          :
          activeTab == 2
          ?
          <ShowReleases courseReleases={releases?.courses} />
          :
          activeTab == 3
          ?
          <ShowReleases releases={releases?.student} />
          :
          null
        }

      </TabMenu>
    </>
  )
}

export default StudentReleases;