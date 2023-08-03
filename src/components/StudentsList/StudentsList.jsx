import s from './StudentsList.module.css';

const StudentList = ({students, absences}) => {
  
  const options = ["DNI","Nombres y Apellidos","Faltas justificadas","Faltas Injustificadas","Tardanzas", "Opciones"]


  const formatStudents = students?.map( student => {
    
    const findAbsences = absences?.find( absence => absence.id == student.id)

    return {
      ...student,
      absences: findAbsences
    }

  })

  return (
    <>
    {
      students
      ?
      <div className={s.studentsGrid}>
        {
          options.map( (option, index) => {
            const className = `col${index+1}`;
            return(
              <div key={`${option}${index}`} className={`${s[className]}`}>
                {option}
              </div>
            )
          })
        }

        {
          formatStudents.map( (student, index) => {
            return (
              <>
                <div key={`${student.DNI}${index}`} className={`${s.col1}`} >
                  {student.DNI}
                </div>
                <div key={`${student.names}${index}`} className={`${s.col2}`} >
                  {student.names} {student.fatherLastNames} {student.motherLastName}
                </div>
                <div key={`justified${index}`} className={`${s.col3}`}>
                  {student.absences.justifiedFault}
                </div>
                <div key={`absences${index}`} className={`${s.col4}`}>
                  {student.absences.absences}
                </div>
                <div key={`absences${index}`} className={`${s.col5}`}>
                  {student.absences.delays}
                </div>
             
              </>
            )
          })
        }
      </div>
      :
      <h5>No hay estudiantes en esta sección</h5>
    }    
    </>
  )
}

export default StudentList;