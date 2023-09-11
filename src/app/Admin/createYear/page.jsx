'use client'
import s from './page.module.css';
import { useState } from "react";
import GradesAssignment from '@/components/gradesAssignment/GradesAssignment';
import { inputHandler, createYearData, SubmitYearHandler } from '../registersHandler';
import { initialAttributes } from '@/const';
import TabMenu from '@/components/TabMenu/TabMenu';

const CreateYear = () => {

  const thisYear = new Date();

  const [year, setYear] = useState({year: thisYear.getFullYear()})

  const [tabActive, setTabActive] = useState(1);
  const tabOptions = ["Inicial", "Primaria", "Secundaria"];
  
  const [initialColec, setInitialColec] = useState([]);

  const [primaryCollec, setPrimaryCollect] = useState([]);

  const [secundaryCollec, setSecundaryCollect] = useState([]);

  return (
    <form className={s.form}>

      <h2 className={s.title}>Nuevo año escolar</h2>

      <p className={s.instructions}>
        <b>CICLO:</b> En el ciclo se agrega el nombre del grado que se desea ingresar al año escolar
      </p>
      <p className={s.instructions}>
        <b>SECCION:</b> Indica la sección que se desea agregar a dicho grado y se presiona el boton "agregar seccion" para agregar la seccion al grado.
      </p>
      <p className={s.instructions}> 
        <b>ASIGNAR:</b> Luego de tener el nombre del grado y las secciones correspondientes para el mismo, se preciona asingar para confirmar la información
      </p>

      <div className={s.year}>
        <label htmlFor="newYear"><b>Ingrese el nuevo año escolar: </b></label>
        <input type="number" name="year" id="newYear" value={year.year} onChange={(e) => inputHandler(e, setYear)}/>
      </div>
      {/* Props: title, attributes, collection, setCollection */}

      <TabMenu active={tabActive} tabs={tabOptions} activeOption={setTabActive}>

      {
        tabActive == 1
        ?
        <GradesAssignment title={"Educación inicial"} attributes={initialAttributes} collection={initialColec} setCollection={setInitialColec} />  
        :
        tabActive == 2
        ?
        <GradesAssignment title={"Primaria"} attributes={initialAttributes} collection={primaryCollec} setCollection={setPrimaryCollect} />
        :
        tabActive == 3
        ?
        <GradesAssignment title={"Secundaria"} attributes={initialAttributes} collection={secundaryCollec} setCollection={setSecundaryCollect} />
        :
        null
      }

      </TabMenu>




      <button className={s.button} type="button" onClick={(e) => {
        e.preventDefault();
        const data = createYearData(year.year, initialColec, primaryCollec, secundaryCollec);
        SubmitYearHandler(data);

      }}>Registrar año escolar</button>

    </form>
  )
}

export default CreateYear;