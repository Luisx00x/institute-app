'use client'
import Link from 'next/link';
import s from './StudentCard.module.css';
import { usePathname } from 'next/navigation';

const StudentCard = ({list, search, oneStep, additionalParam, ...rest}) => {

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
      oneStep
      ?
      <div key={rest.passList.id} className={s.container}>
       {
         search == "course"
         ?
          <Link href={`${path}/${additionalParam ? `${additionalParam}/`: "/"}${rest.passList.id}`}>
            <label className={s.label}>Materia: {rest.passList.courseName}</label>
            <label className={s.label}>Sección: {rest.passList.Section.sectionName}</label>
            <label className={s.label}>Grado: {rest.passList.Section.Grade.grade}</label>
            <label className={s.label}>Nivel Educativo: {rest.passList.Section.Grade.level}</label>
          </Link>
         :
         search == "students"
         ?
          <Link href={`${path}/${rest.passList.id}`}>
            <label className={s.label}>DNI: {rest.passList.DNI}</label>
            <label className={s.label}>Nombres: {rest.passList.names} {rest.passList.fatherLastName} {rest.passList.motherLastName}</label>
          </Link>
         :
         null
       }
        
      </div>
      :
      <div key={rest.passList.id} className={s.container}>
        {
          rest.passList ?
          <Link className={s.links} href={`${path}/${additionalParam ? `${additionalParam}/` : "/"}${rest.passList.id}/${rest.passList.TeacherId}/${rest.passList.Section.id}/${rest.passList.Section.Grade.id}`}>
            <label className={s.label}>Materia: {rest.passList.courseName}</label>
            <label className={s.label}>Sección: {rest.passList.Section.sectionName}</label>
            <label className={s.label}>Grado: {rest.passList.Section.Grade.grade}</label>
            <label className={s.label}>Nivel Educativo: {rest.passList.Section.Grade.level}</label>
          </Link>
          : null
        }
      </div>
    }
    </>

  )
}

export default StudentCard;