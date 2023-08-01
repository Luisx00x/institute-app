'use client'
import { useSelector } from 'react-redux';
import s from './page.module.css';

/* const Materias = [
  {
    id:1, 
    course: "Matematica", 
    skills: [
      {
        skill: "Competencia1",
        cal1: "A",
        cal2: "A",
        cal3: "B",
        cal4: "A"
      },
      {
        skill: "Competencia2",
        cal1: "A",
        cal2: "A",
        cal3: "A",
        cal4: "A"
      },
      {
        skill: "Competencia3",
        cal1: "B",
        cal2: "A",
        cal3: "C",
        cal4: "D"
      }
    ]
  },
  {
    id:2, 
    course: "Fisica", 
    skills: [
      {
        skill: "Competencia1",
        cal1: "B",
        cal2: "A",
        cal3: "A",
        cal4: "B"
      },
      {
        skill: "Competencia2",
        cal1: "C",
        cal2: "D",
        cal3: "C",
        cal4: "D"
      }]
  },
  {
    id:3, 
    course: "Literatura", 
    skills: [
      {
        skill: "Competencia1 Competencia1 Competencia1 Competencia1 Competencia1 Competencia1 Competencia1 Competencia1",
        cal1: "A",
        cal2: "B",
        cal3: "A",
        cal4: "C"
      },
      {
        skill: "Competencia2",
        cal1: "A",
        cal2: "B",
        cal3: "C",
        cal4: "D"
      },
      {
        skill: "Competencia3",
        cal1: "B",
        cal2: "B",
        cal3: "B",
        cal4: "B"
      },
      {
        skill: "Competencia4",
        cal1: "A",
        cal2: "B",
        cal3: "B",
        cal4: "B"
      }
    ],
  },
  {
    id:4, 
    course: "Fisica", 
    skills: [
      {
        skill: "Competencia1",
        cal1: "B",
        cal2: "A",
        cal3: "A",
        cal4: "B"
      },
      {
        skill: "Competencia2",
        cal1: "C",
        cal2: "D",
        cal3: "C",
        cal4: "D"
      }]
  },
  {
    id:5, 
    course: "Fisica", 
    skills: [
      {
        skill: "Competencia1",
        cal1: "B",
        cal2: "A",
        cal3: "A",
        cal4: "B"
      },
      {
        skill: "Competencia2",
        cal1: "C",
        cal2: "D",
        cal3: "C",
        cal4: "D"
      }]
  },
  {
    id:6, 
    course: "Fisica", 
    skills: [
      {
        skill: "Competencia1",
        cal1: "B",
        cal2: "A",
        cal3: "A",
        cal4: "B"
      },
      {
        skill: "Competencia2",
        cal1: "C",
        cal2: "D",
        cal3: "C",
        cal4: "D"
      }]
  },
  {
    id:7, 
    course: "Literatura", 
    skills: [
      {
        skill: "Competencia1 Competencia1 Competencia1 Competencia1 Competencia1 Competencia1 Competencia1 Competencia1",
        cal1: "A",
        cal2: "B",
        cal3: "A",
        cal4: "C"
      },
      {
        skill: "Competencia2",
        cal1: "A",
        cal2: "B",
        cal3: "C",
        cal4: "D"
      },
      {
        skill: "Competencia3",
        cal1: "B",
        cal2: "B",
        cal3: "B",
        cal4: "B"
      },
      {
        skill: "Competencia4",
        cal1: "A",
        cal2: "B",
        cal3: "B",
        cal4: "B"
      }
    ],
  }
]; */

const Page = () => {

  const studentInfo = useSelector(state => state.student.studentInfo);
  const sectionInfo = useSelector(state => state.student.sectionInfo);
  const califications = useSelector(state => state.student.califications);

  let count;
  return (
    <>
    {console.log(studentInfo)}
    {console.log(califications, "CALIFICACIONS")}      
      {/* Primer componente */}

      <div id="reportCard" className={s.reportContainer}>


        <div className={s.mainTitleContainer}>
          <h2 className={s.h2Title}>Boletín de información "año"</h2>
          <h2 className={s.h2Title }>I.E.P.C. HEFZIBÁ</h2>
        </div>

        <div className={s.gridData}>

          <div className={`${s.label} ${s.col1} ${s.camp}`}>
            Correo electrónico
          </div>

          <div className={`${s.label} ${s.col2}`}>
            hefzibaiepc@gmail.com
          </div>

          <div className={`${s.label} ${s.col3} ${s.camp}`}>
            Teléfono
          </div>

          <div className={`${s.label} ${s.col4}`}>
            972 335 889
          </div>


          <div className={`${s.label} ${s.col1} ${s.camp}`}>
            Nivel:
          </div>

          <div className={`${s.label} ${s.cols_3}`}>
            {studentInfo.level}
          </div>

          <div className={`${s.label} ${s.col1} ${s.camp}`}>
            Grado:
          </div>

          <div className={`${s.label} ${s.col2}`}>
            {studentInfo.grade} °
          </div>
          
          <div className={`${s.label} ${s.col3} ${s.camp}`}>
            Sección
          </div>

          <div className={`${s.label} ${s.col4}`}>
            {sectionInfo.sectionName}
          </div>

          <div className={`${s.label} ${s.col1} ${s.camp}`}>
            Estudiante:
          </div>

          <div className={`${s.label} ${s.cols_3}`}>
            {studentInfo.names} {studentInfo.fatherLastName} {studentInfo.motherLastName}
          </div>

          <div className={`${s.label} ${s.col1} ${s.camp}`}>
            DNI:
          </div>

          <div className={`${s.label} ${s.cols_3}`}>
            {studentInfo.DNI}
          </div>

          <div className={`${s.label} ${s.col1} ${s.camp}`}>
            Docente tutor:
          </div>
  
          <div className={`${s.label} ${s.cols_3}`}>
            "primerNombre SegundoNombre TercerNombre CuartoNombre"
          </div>

        </div>

      </div>

      {/* Primer componente FIN*/}

      {/* Segundo componente Inicio */}

      <div className={s.califications}>

        <div className={s.gridLayout}>

          <div className={`${s.cells} ${s.cell1} ${s.camp} ${s.centerCell}`}>
            <p>Área curricular</p>
          </div>

          <div className={`${s.cells} ${s.cell2} ${s.centerCell}`}>
            <p>Compentencias</p>
          </div>

          <div className={`${s.cells} ${s.cell3} ${s.up}`}>
            1° Bimestre
          </div>

          <div className={`${s.cells} ${s.cell3} ${s.down}`}>
            Promedio
          </div>

          <div className={`${s.cells} ${s.cell4} ${s.up}`}>
            2° Bimestre
          </div>

          <div className={`${s.cells} ${s.cell4} ${s.down}`}>
            Promedio
          </div>

          <div className={`${s.cells} ${s.cell5} ${s.up}`}>
            3° Bimestre
          </div>

          <div className={`${s.cells} ${s.cell5} ${s.down}`}>
            Promedio
          </div>

          <div className={`${s.cells} ${s.cell6} ${s.up}`}>
            4° Bimestre
          </div>

          <div className={`${s.cells} ${s.cell6} ${s.down}`}>
            Promedio
          </div>
          
          <div className={`${s.cells} ${s.cell7} ${s.centerCell}`}>
            Calificación anual
          </div>
        </div>

      </div>

      {/* Segundo componente FIN */}

      {/* Tercer componente Inicio */}

      <div className={`${s.courseContainer}`}>

        <div className={s.skillsGrid}>

        {
          califications?.map( curso => {
            count = 1;
            return (
              <>
                <div className={`${s.gridCol1} ${s.borders}`}>
                  {curso.course}
                </div>

                  <div className={s.gridCol2}>

                    {
                      curso.skills?.map( ele => {
                        count++;
                        return (
                          <>
                            <div className={s.col2_1}>
                              <div className={` ${s.borders}`}>
                                  {ele.skill}
                              </div> 
                            </div>

                            <div className={`${s.col2_2} ${s.centerGrid} ${s.borders}`}>
                                {ele.cal1}
                            </div>

                            <div className={`${s.col2_4} ${s.borders} ${s.centerGrid}`}>
                              {ele.cal2}
                            </div>

                            <div className={`${s.col2_6} ${s.borders} ${s.centerGrid}`}>
                              {ele.cal3}
                            </div>

                            <div className={`${s.col2_8} ${s.borders} ${s.centerGrid}`} >
                              {ele.cal4}
                            </div>

                          </>
                        )
                      })
                    }
                      <div className={`${s.col2_3} ${s.borders} ${s.centerGrid}`} style={{gridRow:`1/${count}`}}>
                        {curso.proms.prom1}
                      </div>

                      <div className={`${s.col2_5} ${s.centerGrid} ${s.borders}`} style={{gridRow:`1/${count}`}} >
                        {curso.proms.prom2}
                      </div>

                      <div className={`${s.col2_7} ${s.centerGrid} ${s.borders}`} style={{gridRow:`1/${count}`}}>
                        {curso.proms.prom3}
                      </div>

                      <div className={`${s.col2_9} ${s.centerGrid} ${s.borders}`} style={{gridRow:`1/${count}`}}>
                        {curso.proms.prom4}
                      </div>

                  </div>
                  
                  <div className={`${s.gridCol3} ${s.borders} ${s.centerGrid}`}> final</div>
              </>
            )
          })
        }
        
        </div>

        <div className={s.skillsGrid}>

          <div className={`${s.gridCol1} ${s.borders} ${s.bordersAssis}`}>
            Asistencia
          </div>

          <div className={`${s.gridCol2}`}>
            
            <div className={`${s.col2_1} ${s.borders} ${s.bordersAssis}`}>
              Tardanza
            </div>
            <div className={`${s.col2_1} ${s.borders}`}>
              Falta Justificada
            </div>
            <div className={`${s.col2_1} ${s.borders}`}>
              Falta injustificada
            </div>
      
            <div className={`${s.colAssis1} ${s.borders} ${s.centerGrid}`}>

            </div>

            <div className={`${s.colAssis2} ${s.borders} ${s.centerGrid}`}>

            </div>

            <div className={`${s.colAssis3} ${s.borders} ${s.centerGrid}`}>

            </div>

            <div className={`${s.colAssis4} ${s.borders} ${s.centerGrid}`}>
              
            </div>

          </div>

            <div className={`${s.gridCol3} ${s.borders} ${s.bordersAssis}`}>

            </div>

        </div>

      </div>

      {/* Tercer componente FIN */}

      {/* Cuarto componente Inicio*/}

      <div className={s.repreContainer}>

        <div className={s.repreGrid}>

          <div className={`${s.repreTitle} ${s.centerGrid} ${s.cells}`}>
            ÁREA DEL PADRE DE FAMILIA
          </div>

          <div className={`${s.repreCol1} ${s.cells}`}>
            CRITERIOS DE EVALUACIÓN
          </div>

          <div className={`${s.repreCol2} ${s.cells}`}>
            1B
          </div>

          <div className={`${s.repreCol3} ${s.cells}`}>
            2B
          </div>

          <div className={`${s.repreCol4} ${s.cells}`}>
            3B
          </div>

          <div className={`${s.repreCol5} ${s.cells}`}>
            4B
          </div>

          <div className={`${s.repreCol1} ${s.centerGrid}`}>
              Asiste a las reuniones convocadas por la institución
          </div>

          <div className={`${s.repreCol2}`}>
            
          </div>

          <div className={`${s.repreCol3}`}>
            
          </div>

          <div className={`${s.repreCol4}`}>
            
          </div>

          <div className={`${s.repreCol5}`}>
            
          </div>

          <div className={`${s.repreCol1} ${s.centerGrid}`}>
            Realiza el control de la agenda y otros documentos
          </div>

          <div className={`${s.repreCol2}`}>
            
          </div>

          <div className={`${s.repreCol3}`}>
            
          </div>

          <div className={`${s.repreCol4}`}>
            
          </div>

          <div className={`${s.repreCol5}`}>
            
          </div>

          <div className={`${s.repreCol1} ${s.centerGrid} ${s.cells}`}>
            PROMEDIO
          </div>

          <div className={`${s.repreCol2}`}>
            
          </div>

          <div className={`${s.repreCol3}`}>
            
          </div>

          <div className={`${s.repreCol4}`}>
            
          </div>

          <div className={`${s.repreCol5}`}>
            
          </div>

        </div>

      </div>

      {/* Cuarto componente FIN */}

      {/* Quinto componente Inicio */}

      <div className={s.tutorGrid}>

        <div className={`${s.tutorTitle} ${s.cells}`}>
          COMENTARIO DEL TUTOR
        </div>

        <div className={`${s.tutorB}`}>
          1B
        </div>

        <div className={`${s.tutorCommnent}`}>
          "comentario del tutor"
        </div>

        <div className={`${s.tutorB}`}>
          2B
        </div>

        <div className={`${s.tutorCommnent}`}>
          "comentario del tutor"
        </div>

        <div className={`${s.tutorB}`}>
          3B
        </div>

        <div className={`${s.tutorCommnent}`}>
          "comentario del tutor"
        </div>

        <div className={`${s.tutorB}`}>
          4B
        </div>

        <div className={`${s.tutorCommnent}`}>
          "comentario del tutor"
        </div>

      </div>

      {/* Quinto componente fin */}
    </>
  )
}

export default Page;