import s from './Schedules.module.css';

const Schedules = ({shcedule}) => {
  return (
    <>
      <div className={s.gridContainer}>
        <div className={s.gridLeft}>
          <h3>Dia</h3>
        </div>
        <div className={s.gridRight}>
          <h3>Hora</h3>
        </div>

      {
        shcedule.map( schedle => {
          return (
            <>
              <div className={s.gridLeft}>
                {schedle.day}
              </div>
              <div className={s.gridRight}>
                {schedle.init}-{schedle.end}
              </div>
            </>
          )
        })
      }

      </div>

    </>
  )
}

export default Schedules;