
import s from './ShowReleases.module.css';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const ShowReleases = ({releases}) => {

  return (
    <>

      <div className={s.releasesContainer}>

        <section className={s.gridContainer}>

          <div className={s.gridCol1}>Enviado por:</div>

          <div className={s.gridCol2}>Título:</div>

          <div className={s.gridCol3}>Archivo:</div>

          <div className={s.gridCol4}>Fecha</div>

          {
            releases?.map( release => {
              return (
                <>

                  <div className={s.gridCol1}>{release.sender}</div>
                  <div className={s.gridCol2}>{release.title}</div>
                  <div className={s.gridCol3}>
                    <a href={`${LOGIN_URL}/${release.location}`} target='_blank'>Abrir</a>
                  </div>
                  <div className={s.gridCol4}>{release.createdAt.slice(0,10)}</div>

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