'use client'
import s from './page.module.css';
import Releases from "@/components/Releases/Releases";
import { ADMIN, ALLSECTIONS, SECTION } from "@/const";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSectionsReleases } from "../adminReleasesHandler";
import { useRouter } from 'next/navigation';

const AdminReleaseDetails = ({params}) => {

  const [releaseType, sectionId, gradeId] = params.release;
  const user = useSelector(state => state.primarySlice.userLog);
  const sectionReleases = useSelector(state => state.admin.allSectionReleases);
  const modal = useSelector(state => state.primarySlice.modal);
  const router = useRouter();
  
  useEffect( () => {
    
    getSectionsReleases(dispatch, "");
    
  },[modal])
  
  const dispatch = useDispatch();

  return (
    <>
      {
         releaseType === "section"
         ?
           <div className={s.listContainer}>
   
             <div className={s.backButton} onClick={() => router.back()}>Regresar</div>
           
             <Releases releases={sectionReleases} submitData={{sender: ADMIN, userRol: user.RolId, sectionId, type: ALLSECTIONS }} />
             
           </div> 
         :
         null
      }

    </>
  )
}

export default AdminReleaseDetails;