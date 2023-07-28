'use client'
import TabMenu from '@/components/TabMenu/TabMenu';
import { useState } from 'react';
import s from './page.module.css';

const ReleasesMenu = () => {

  const [tabActive, setTabActive] = useState(1);
  const tabOptions = ["Cominicados para secciones completas", "Comunicados para un alumno", "Comunicado para apoderados"]

  return (
    <>
      <section className={s.componentContainer}>

        <h4>releases menu</h4>

        <TabMenu active={tabActive} tabs={tabOptions} activeOption={setTabActive}>
            {
              tabActive == 1
              ?
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente maxime enim expedita quis qui debitis, porro nam repudiandae aut possimus minima asperiores repellat, quibusdam eaque beatae illum recusandae eum.
            </>
              :
              tabActive == 2
              ?
            <>
              Soy la tab 2
            </>
            :
            null  
            }
        </TabMenu>

      </section>
    </>
  )
}

export default ReleasesMenu;