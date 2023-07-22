'use client'
import Link from 'next/link';
import s from './StudentCard.module.css';
import { usePathname } from 'next/navigation';

const StudentCard = ({list, ...rest}) => {

  const path = usePathname();

  return (
    
    <>
    {
      list ?
      <div key={list.id} className={s.container}>
        
        {
          list.name ?
          <label className={s.label}>Nombre: {list.name} {list.lastName}</label>
          : null
        }

        {

          list.Sections && !rest.alt ? 
          <label className={s.label}>Grado: { list.Sections.length < 1 ? "No tiene asignado en el año actual" : "Aqui va" }</label> 
          : null
        }

        {
          list.grade ?
          <>
            <label className={s.label}>Grado: {list.grade ? list.grade : null} </label>
            <label className={s.label}>Secciones: 
            { list.Sections.map( section => ` "${section.sectionName}" `)}
            </label>
          </>
          : null
        }

      </div>
      :
      rest.courseData 
      ?
      <div key={rest.passList.id} className={s.container}>
        {
          rest.passList ?
          <Link href={`${path}/${rest.passList.id}`}>
            <label className={s.label}>id: {rest.passList.id}</label>
            <label className={s.label}>Materia: {rest.passList.courseName}</label>
          </Link>
          : null
        }
      </div>
      :
      <div key={rest.passList.id} className={s.container}>
        {
          rest.passList ?
          <Link href={`${path}/${rest.passList.id}/${rest.passList.TeacherId}`}>
            <label className={s.label}>id: {rest.passList.id}</label>
            <label className={s.label}>Materia: {rest.passList.courseName}</label>
          </Link>
          : null
        }
      </div>
    }
    
    </>

  )
}

export default StudentCard;