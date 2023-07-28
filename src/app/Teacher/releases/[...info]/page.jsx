'use client'
import { useDispatch, useSelector } from 'react-redux';
import s from './page.module.css';
import { useEffect } from 'react';
import Releases from '@/components/Releases/Releases';
import { searchReleases } from './releasesHandler';
import { useRouter } from 'next/navigation';

const ReleaseDetails = ({params}) => {
  
  //?PARAMS
  const [courseId, teacherId, sectionId, gradeId] = params.info;

  const modal = useSelector(state => state.primarySlice.modal);
  const user = useSelector(state => state.primarySlice.userLog);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect( () => {
  
    searchReleases(dispatch, sectionId);

  },[modal])
  
  const sectionReleases = useSelector(state => state.teacher.sectionReleases);
 /*  const releases = [
    {title:"titulo1",sender: "Administracion", location: "location1"},
    {title:"titulo2",sender: "Coba Otro", location: "location2"},
    {title:"titulo3",sender: "Fulanito Fulano", location: "location3"}] */

  
  return (
    <>
    {console.log(sectionReleases)}
     <div className={s.listContainer}>

      <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
    
      <Releases releases={sectionReleases} submitData={{sender: teacherId, userRol: user.RolId, sectionId}} />
      
    </div> 

    </>
  )
}

export default ReleaseDetails;