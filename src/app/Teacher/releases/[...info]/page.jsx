'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './page.module.css';
import { useEffect } from 'react';
import Releases from '@/components/Releases/Releases';
import { findOneStudentInfo, findParentReleaes, searchCoursesReleases, searchSectionStudents } from './releasesHandler';
import { useRouter } from 'next/navigation';
import ShowStudents from '@/components/showStudents/ShowStudents';
import { COURSE, REPRESENTATIVE, SECTION, STUDENT } from '@/const';

const ReleaseDetails = ({params}) => {
  
  //?PARAMS
  const [releaseType, courseId, teacherId, sectionId, gradeId, studentId] = params.info;

  const dispatch = useDispatch();
  const router = useRouter();
  const modal = useSelector(state => state.primarySlice.modal);
  const user = useSelector(state => state.primarySlice.userLog);
  
  useEffect( () => {
    
    if(releaseType == "course") searchCoursesReleases(dispatch, courseId);
    if(releaseType == "student" || releaseType == "parents") searchSectionStudents(dispatch, sectionId);
    if(studentId && releaseType == "student") findOneStudentInfo(dispatch, studentId);
    if(studentId && releaseType == "parents") findParentReleaes(dispatch, studentId);
    
  },[modal])
  
  const sectionStudents = useSelector(state => state.teacher.sectionStudents);
  const coursesReleases = useSelector(state => state.teacher.coursesReleases);
  const studentReleases = useSelector(state => state.teacher.studentReleses);
  const parentReleases = useSelector(state => state.teacher.parentReleases);
  
  return (
    <>

    {
      releaseType === "course"
      ?
        <div className={s.listContainer}>

          <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
        
          <Releases releases={coursesReleases} submitData={{sender: teacherId, userRol: user.RolId, courseId, type: COURSE }} />
          
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
      releaseType === "parents" && studentId
      ?
        <div className={s.listContainer}>

          <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
        
          <Releases releases={parentReleases} studentId={studentId} submitData={{sender: teacherId, userRol: user.RolId, studentId, representative:true, type: REPRESENTATIVE}} />
        
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

export default ReleaseDetails;