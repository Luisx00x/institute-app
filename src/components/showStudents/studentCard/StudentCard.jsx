import s from './StudentCard.module.css';

const StudentCard = ({list, ...rest}) => {

  return (
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
  )
}

export default StudentCard;