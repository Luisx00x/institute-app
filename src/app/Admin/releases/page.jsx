'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './page.module.css';
import TabMenu from "@/components/TabMenu/TabMenu";
import ShowStudents from "@/components/showStudents/ShowStudents";
import { findCourses, getAllCourses, getAllSections } from "./adminReleasesHandler";
import { inputHandler } from "@/globalHandlers";

const AdminReleases = () => {

  const modal = useSelector(state => state.primarySlice.modal);
  const dispatch = useDispatch();
  
  useEffect( () => {
    
    getAllSections("", setAllSections);
    getAllCourses(dispatch, "");
    
  },[modal])
  
  const courses = useSelector(state => state.admin.allCourses);
  const [sections, setAllSections] = useState([]);
  const [tabActive, setTabActive] = useState(1);
  const tabOptions = ["Comunicados para secciones completas", "Comunicado para un curso", "Comunicados para un alumno", "Comunicado para apoderados"]

  return (
    <>
      <section className={s.componentContainer}>

        <h4>releases menu</h4>

        <TabMenu active={tabActive} tabs={tabOptions} activeOption={setTabActive}>
            {
              tabActive == 1
              ?
            <>

              <div className={s.sectionContainer}>

                <div className={s.allSecButton}> Enviar comunicado a todas las secciones</div>

               {/*  <section>
                  <label>Seleccione un nivel académcico</label>
                  <select name="academyLevel" id="academyLevel" onChange={(e) => inputHandler(e, setSectionSelect)}>
                    <option value="">- Seleccione un nivel académico -</option>
                    <option value={"Inicial"}>Inicial</option>
                    <option value={"Primaria"}>Primaria</option>
                    <option value={"Secundaria"}>Secundaria</option>
                  </select>
                </section>

                <section>
                  <label>Seleccior una sección:</label>
                  <select 
                  name="sectionOption" 
                  id="sectionOption" 
                  onChange={(e) => {
                    inputHandler(e, setSectionSelect);
                    findCourses(sections, sectionSelect, setSectionSelect);
                    }}>
                    <option value="">- Seleccione una sección -</option>
                    {
                    sections?.map( section => {
                      if(section.Grade.level === sectionSelect.academyLevel){
                        return (
                          <option value={section.sectionName}>
                            {section.sectionName}
                          </option>
                        )
                      }
                    })
                    }  
                  </select> 
                </section> */}

                <ShowStudents 
                aditional={sections} 
                display={true} 
                additionalParam={"section"} 
                sectionReleases={true} 
                />

              </div>
            
            </>
              :
              tabActive == 2
                ?
              <>
                 <ShowStudents 
                 aditional={courses} 
                 display={true} 
                 additionalParam={"course"} 
                 sectionReleases={true}
                 />
              </>
                :

              tabActive == 3
              ?
            <>
                <ShowStudents 
                aditional={sections} 
                display={true} 
                search={"course"}
                additionalParam={"student"}
                sectionReleases={true}
                />
            </>
              :
              tabActive == 3
              ?
                <ShowStudents
                aditional={sections}
                display={true}
                search={"course"}
                additionalParam={"parents"}
                sectionReleases={true}
                />
              :
              null  
              }
        </TabMenu>

      </section>

    </>
  )
}

export default AdminReleases;