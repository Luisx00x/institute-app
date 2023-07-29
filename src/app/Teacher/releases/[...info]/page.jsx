'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './page.module.css';
import { useEffect } from 'react';
import Releases from '@/components/Releases/Releases';
import { findOneStudentInfo, searchSectionReleases, searchSectionStudents } from './releasesHandler';
import { useRouter } from 'next/navigation';
import ShowStudents from '@/components/showStudents/ShowStudents';
import { SECTION, STUDENT } from '@/const';

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
    if(studentId) findOneStudentInfo(dispatch, studentId);
    
  },[modal])
  
  const sectionStudents = useSelector(state => state.teacher.sectionStudents);
  const sectionReleases = useSelector(state => state.teacher.sectionReleases);
  const studentReleases = useSelector(state => state.teacher.studentReleses);

  
  return (
    <>
    {
      releaseType === "section"
      ?
        <div className={s.listContainer}>

          <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
        
          <Releases releases={sectionReleases} submitData={{sender: teacherId, userRol: user.RolId, sectionId, type: SECTION }} />
          
        </div> 
      :
      releaseType === "student" && studentId
      ?
      <div className={s.listContainer}>

      <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
    
      <Releases releases={studentReleases} submitData={{sender: teacherId, userRol: user.RolId, studentId, type: STUDENT}} />
      
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
      releaseType === "representative"
      ?
        <div className={s.listContainer}>
          //TODO AQUI VA EL RENDERIZADO DE LA LISTA PARA STUDIANTES
          aqui va los comunicados de apoderados

        </div>
      :
      null
    }

    </>
  )
}

export default ReleaseDetails;