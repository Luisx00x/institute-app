
import s from './ShowReleases.module.css';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const ShowReleases = ({releases, courseReleases}) => {

  const render = releases || courseReleases;

  return (
    <>

      <div className={s.releasesContainer}>

        <section className={releases ? s.gridContainer : s.gridCourseContainer}>

          <div className={s.gridCol1}>Enviado por:</div>

          <div className={s.gridCol2}>Título:</div>

          {
            courseReleases
            ?
            <div className={s.gridCol3}>Curso: </div>
            :
            null
          }

          <div className={releases ? s.gridCol3 : s.gridCol4}>Archivo:</div>

          <div className={releases ? s.gridCol4 : s.gridCol5}>Fecha</div>

          {
            render?.map( release => {
              return (
                <>

                  <div className={s.gridCol1}>{release.sender}</div>
                  <div className={s.gridCol2}>{release.title}</div>
                  {
                    courseReleases
                    ?
                    <div className={s.gridCol3}>{release.Course.courseName}</div>
                    :
                    null
                  }
                  <div className={releases ? s.gridCol3 : s.gridCol4}>
                    <a href={`${LOGIN_URL}/${release.location}`} target='_blank'>Abrir</a>
                  </div>
                  <div className={releases ? s.gridCol4 : s.gridCol5}>{release.createdAt.slice(0,10)}</div>

                </>
              )
            })
          }

        </section>

      </div>

    </>
  )
}

export default ShowReleases;