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

      <p>
        En esta version de la creación del año escolar se debe ingresar el año al inicio, pero esto lo cambiaré
        para que busque un año escolar que corresponda con el año en curso en la base de datos, en caso de no conseguilo
        le pida al admin que lo cree, esto para evitar duplicidad, conflictos, y que se cree un año escolar no correspondiente a la fecha.
      </p>

      <h2 className={s.title}>Nuevo año escolar</h2>

      <div className={s.year}>
        <label htmlFor="newYear">Ingrese el nuevo año escolar: </label>
        <input type="number" name="year" id="newYear" value={year.year} onChange={(e) => inputHandler(e, setYear)}/>
      </div>

      <p>
        CICLO: En el ciclo se agrega el nombre del grado que se desea ingresar al año escolar
      </p>
      <p>
        SECCION: Indica la sección que se desea agregar a dicho grado y se presiona el boton "agregar seccion" para agregar la seccion al grado.
      </p>
      <p> 
        ASIGNAR: Luego de tener el nombre del grado y las secciones correspondientes para el mismo, se preciona asingar para confirmar la información
      </p>

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