import s from './CalificationList.module.css';

const CalificationList = ({list, skills, courseId}) => {

const skillsList = skills.find( skill => skill.id === parseInt(courseId)).skills

  return (
    <>
    {console.log(skillsList)}
      <div id="reportCard" className={s.reportContainer}>
      
      <div className={s.gridData}>
      
        <div className={`${s.label} ${s.col1} ${s.camp}`}>
          <b>Nombres</b>
        </div>

        <div className={`${s.label} ${s.col2}`}>
          <b>Apellidos</b>
        </div>

        <div className={`${s.label} ${s.col3} ${s.camp}`}>
          <b>Opciones</b>
        </div>
      
      {
        list?.map( item => {
          return (
            <>
              <div className={`${s.col1} ${s.label}`}>{item.names}</div>
              <div className={`${s.col2} ${s.label}`}>{item.fatherLastName} {item.motherLastName}</div>
              <div className={`${s.col3} ${s.label}`}><button>Calificar</button></div>

              {
                skillsList?.map( skill => {
                  return (
                    <>
                      <div className={`${s.col4} ${s.label}`}></div>
                    </>
                  )
                })
              }

            </>
          )
        })
      }


      {/* <div className={s.mainTitleContainer}>
        <h2 className={s.h2Title}>Boletín de información "año"</h2>
        <h2 className={s.h2Title }>I.E.P.C. HEFZIBÁ</h2>
      </div> */}



      </div>

      </div>
    </>
  )
}

export default CalificationList;