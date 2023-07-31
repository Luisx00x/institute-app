'use client'
import TabMenu from '@/components/TabMenu/TabMenu';
import { useState } from 'react';
import s from './page.module.css';
import { useSelector } from 'react-redux';
import ShowStudents from '@/components/showStudents/ShowStudents';

const ReleasesMenu = () => {

  const [tabActive, setTabActive] = useState(1);
  const tabOptions = ["Cominicados para todo el curso", "Comunicados para un alumno", "Comunicado para apoderados"]
  const courses = useSelector(state => state.teacher.courses);

  return (
    <>
      <section className={s.componentContainer}>

        <h4>releases menu</h4>

        <TabMenu active={tabActive} tabs={tabOptions} activeOption={setTabActive}>
            {
              tabActive == 1
              ?
            <>

              <div>

                <ShowStudents aditional={courses} display={true} additionalParam={"course"} />

              </div>
            
            </>
              :
              tabActive == 2
              ?
            <>
                <ShowStudents 
                aditional={courses} 
                display={true} 
                search={"course"}
                additionalParam={"student"}
                />
            </>
              :
              tabActive == 3
              ?
                <ShowStudents
                aditional={courses}
                display={true}
                search={"course"}
                additionalParam={"parents"}
                />
              :
              null  
              }
        </TabMenu>

      </section>
    </>
  )
}

export default ReleasesMenu;