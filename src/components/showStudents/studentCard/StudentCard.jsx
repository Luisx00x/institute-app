import s from './StudentCard.module.css';

const StudentCard = ({student}) => {
  return (
    <div key={student.id} className={s.container}>
      <label className={s.label}>Nombre: {student.name} {student.lastName}</label>
      <label className={s.label}>Grado: { student.Sections.length < 1 ? "No tiene asignado en el año actual" : "Aqui va" }</label> 
    </div>
  )
}

export default StudentCard;