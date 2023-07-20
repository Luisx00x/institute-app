import s from './List.module.css';

const List = ({listItems}) => {
  return(
    <>
      <div className={s.container}>

        <div className={s.gridContainer}>

          <div className={s.grid1}>
            <h3>Nombres</h3>
          </div>

          <div className={s.grid2}>
            <h3>Apellidos</h3>
          </div>

          <div className={s.grid3}>
            <h3>Inasistencias</h3>
          </div>

          {

            listItems?.map( item => {
              return (
                <>
                  <div className={s.grid1}>
                    {item.name}
                  </div>
                  <div className={s.grid2}>
                    {item.lastName}
                  </div>
                  <div className={s.grid3}>
                    Aqui van las inasistencias
                  </div>
                </>
              )
            })

          }

        </div>

      </div>
    </>
  )
}

export default List;