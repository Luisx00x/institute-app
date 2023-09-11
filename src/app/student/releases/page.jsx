'use client'
import ShowReleases from "@/components/ShowReleases/ShowReleases";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchReleases } from "./releasesHandlers";
import TabMenu from "@/components/TabMenu/TabMenu";
import s from './page.module.css';

const StudentReleases = ({parent}) => {
  
  const dispatch = useDispatch();
  const releases = useSelector(state => state.student.releases);
  const studentId = useSelector(state => state.student.studentInfo?.id);
  const sectionId = useSelector(state => state.student.sectionInfo?.id);
  const [activeTab, setActiveTab] = useState(1);
  const tabOptions = !parent ? ["Secciones", "Cursos", "Personales"] : ["Secciones","Cursos", "Personales", "Apoderados"]

  useEffect( () => {
    
    searchReleases(dispatch, studentId, sectionId)

  },[])
  
  return (
    <>

    <div className={s.tabContainer}>

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
          activeTab == 4
          ?
          <ShowReleases releases={releases?.representative} />
          :
          null
        }

      </TabMenu>

    </div>
    </>
  )
}

export default StudentReleases;