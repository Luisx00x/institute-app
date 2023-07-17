import { STUDENT, TEACHER, YEAR } from '@/const';
import ShowStudents from '../showStudents/ShowStudents';
import s from './Information.module.css';

const Information = () => {
  
  return (
    <div className={s.container}>

      <p>
        Aqui va un resumen de cuantos alumnos incritos hay este año escolar, profesores activos, Secciones
        Las listas que están debajo no van ahi, solo estan visibles para ver los datos que se guardan en la base de datos por ahora y
        los items podran ser seleccionados para ver los detalles del alumno, sección o profesor.

      </p>

      <ShowStudents type={STUDENT}/>

      <ShowStudents type={TEACHER}/>

      <ShowStudents type={YEAR} display={true}/>
    </div>
  )
}

export default Information;