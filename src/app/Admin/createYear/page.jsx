'use client'
import s from './page.module.css';
import { useState } from "react";
import GradesAssignment from '@/components/gradesAssignment/GradesAssignment';
import { inputHandler, createYearData, SubmitYearHandler } from '../registersHandler';

const initialAttributes = [
  {name: "Ciclo", attribute: "gradeName" },
  {name: "Seccion", attribute: "section"}
];

const CreateYear = () => {

  const thisYear = new Date();

  const [year, setYear] = useState({year: thisYear.getFullYear()})
  
  const [initialColec, setInitialColec] = useState([]);

  const [primaryCollec, setPrimaryCollect] = useState([]);

  const [secundaryCollec, setSecundaryCollect] = useState([]);

  return (
    <form className={s.form}>

      <h2 className={s.title}>Nuevo año escolar</h2>

      <div className={s.year}>
        <label htmlFor="newYear">Ingrese el nuevo año escolar: </label>
        <input type="number" name="year" id="newYear" value={year.year} onChange={(e) => inputHandler(e, setYear)}/>
      </div>

      {/* Props: title, attributes, collection, setCollection */}

      <GradesAssignment title={"Educación inicial"} attributes={initialAttributes} collection={initialColec} setCollection={setInitialColec} />  

      <GradesAssignment title={"Primaria"} attributes={initialAttributes} collection={primaryCollec} setCollection={setPrimaryCollect} />

      <GradesAssignment title={"Secundaria"} attributes={initialAttributes} collection={secundaryCollec} setCollection={setSecundaryCollect} />

      <button className={s.button} type="button" onClick={(e) => {
        e.preventDefault();
        const data = createYearData(year.year, initialColec, primaryCollec, secundaryCollec);
        SubmitYearHandler(data);

      }}>Registrar año escolar</button>

    </form>
  )
}

export default CreateYear;