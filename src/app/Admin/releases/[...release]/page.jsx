'use client'
import s from './page.module.css';
import Releases from "@/components/Releases/Releases";
import { ADMIN, ALLSECTIONS, COURSE, REPRESENTATIVE, SECTION, STUDENT } from "@/const";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAdminParentReleases, findStudentReleases, getAdminCoursesReleases, getSectionsReleases, searchAdminSectionStudents } from "../adminReleasesHandler";
import { useRouter } from 'next/navigation';
import ShowStudents from '@/components/showStudents/ShowStudents';

const AdminReleaseDetails = ({params}) => {

  const [releaseType, sectionId, courseId, studentId] = params.release;

  const user = useSelector(state => state.primarySlice.userLog);
  const modal = useSelector(state => state.primarySlice.modal);
  const router = useRouter();
  
  useEffect( () => {
    
    getSectionsReleases(dispatch, "");
    if(releaseType == "student" || releaseType == "parents") searchAdminSectionStudents(dispatch, sectionId);
    if(releaseType == "student" && studentId) findStudentReleases(dispatch, studentId);
    if(releaseType == "parents" && studentId) findAdminParentReleases(dispatch, studentId);
    if(releaseType == "course") getAdminCoursesReleases(dispatch, "", courseId);
    
  },[modal])
  
  const sectionReleases = useSelector(state => state.admin.allSectionReleases);
  const sectionStudents = useSelector(state => state.admin.sectionStudents);
  const studentReleases = useSelector(state => state.admin.studentReleases);
  const parentReleases = useSelector(state => state.admin.parentReleases);
  const coursesReleases = useSelector(state => state.admin.coursesReleases);
  const dispatch = useDispatch();

  return (
    <>
    {console.log(coursesReleases)}
      {
         releaseType === "course"
          ?
           <div className={s.listContainer}>
   
             <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
           
             <Releases releases={coursesReleases} submitData={{sender: ADMIN, userRol: user.RolId, courseId, type: COURSE }} />
             
           </div> 
          :
         releaseType === "section"
          ?
           <div className={s.listContainer}>
   
             <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
           
             <Releases releases={sectionReleases} submitData={{sender: ADMIN, userRol: user.RolId, sectionId, type: SECTION }} />
             
           </div> 
          :
         releaseType === "student" && studentId
          ?
            <div className={s.listContainer}>

              <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
            
              <Releases releases={studentReleases} submitData={{sender: ADMIN, userRol: user.RolId, studentId, type: STUDENT}} />
            
            </div>
          :
          releaseType === "student"
          ?
            <div className={s.listContainer}>
              
              {
                sectionStudents
                ?
                <ShowStudents aditional={sectionStudents.Students} display={true} search={"students"} oneStep={true} />
                :
                null
              }

            </div>
          :
          releaseType === "parents" && studentId
          ?
            <div className={s.listContainer}>

              <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
            
              <Releases releases={parentReleases} studentId={studentId} submitData={{sender: ADMIN, userRol: user.RolId, studentId, representative:true, type: REPRESENTATIVE}} />
            
            </div>
          :
          releaseType === "parents"
          ?
            <div className={s.listContainer}>
              
              {
                sectionStudents
                ?
                <ShowStudents aditional={sectionStudents.Students} display={true} search={"students"} oneStep={true} />
                :
              null
              }
          </div>
        :
         null
      }

    </>
  )
}

export default AdminReleaseDetails;