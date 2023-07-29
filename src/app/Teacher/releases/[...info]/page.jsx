'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './page.module.css';
import { useEffect } from 'react';
import Releases from '@/components/Releases/Releases';
import { searchSectionReleases, searchSectionStudents } from './releasesHandler';
import { useRouter } from 'next/navigation';
import ShowStudents from '@/components/showStudents/ShowStudents';

const ReleaseDetails = ({params}) => {
  
  //?PARAMS
  const [releaseType, courseId, teacherId, sectionId, gradeId, studentId] = params.info;

  const dispatch = useDispatch();
  const router = useRouter();
  const modal = useSelector(state => state.primarySlice.modal);
  const user = useSelector(state => state.primarySlice.userLog);
  
  useEffect( () => {
    
    if(releaseType == "section") searchSectionReleases(dispatch, sectionId);
    if(releaseType == "student") searchSectionStudents(dispatch, sectionId);
    
  },[modal])
  
  const sectionStudents = useSelector(state => state.teacher.sectionStudents);
  const sectionReleases = useSelector(state => state.teacher.sectionReleases);
 /*  const releases = [
    {title:"titulo1",sender: "Administracion", location: "location1"},
    {title:"titulo2",sender: "Coba Otro", location: "location2"},
    {title:"titulo3",sender: "Fulanito Fulano", location: "location3"}] */

  
  return (
    <>
    {
      releaseType === "section"
      ?
        <div className={s.listContainer}>

          <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
        
          <Releases releases={sectionReleases} submitData={{sender: teacherId, userRol: user.RolId, sectionId}} />
          
        </div> 
      :
      releaseType === "student" && studentId
      ?
        <>
            <h3>Student ID ACEPTADO</h3>
        </>
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
      releaseType === "representative"
      ?
        <div className={s.listContainer}>

          aqui va los comunicados de apoderados

        </div>
      :
      null
    }

    </>
  )
}

export default ReleaseDetails;