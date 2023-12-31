import { selectLevelHandler, setSelectHandler } from './DisplaySelectHandlers.js';

const DisplaySelect = ({title, choices, feature, setValue, value, level, ... rest}) => {
if(level){
  
  return(
    <>  
        {
          choices ?
          <>
          <label htmlFor={`${title.name}`}>{title.name}</label>
          <select value={value} name={`${title.attribute}`} id={`${title.name}`} onChange={(e) => selectLevelHandler(e, setValue)}>

            <option value={false} >-- Seleccione un Nivel --</option>
            
            {
              choices?.map( choice => {
                return (
                  <option 
                  key={`${choice.id}${choice.level}`} 
                  value={choice.level} >
                    {choice.level}
                  </option>
                )
              })
            }
          </select>
          </>
          : <p>No hay Niveles Educativos seleccionado</p>
        } 

    </>
  )

}else{
    return(
      <>  
          {
            choices ?
            <>
            <label htmlFor={`${title.name}`}>{title.name}</label>
            <select value={value} name={`${title.attribute}`} id={`${title.name}`} onChange={(e) => setSelectHandler(e, setValue)}>

              <option value={false} >-- Seleccione un grado --</option>
              
              {
                choices?.map( choice => {
                  return (
                    <option 
                    key={`${choice.id}${choice[feature]}`} 
                    value={choice.id} >
                      {
                      rest.additionalFeat ? 
                      `${choice[rest.additionalFeat.father]} ${choice[rest.additionalFeat.mother]} ${choice[feature]}` 
                      : 
                      choice[feature]}
                    </option>
                  )
                })
              }
            </select>
            </>
            : <p>No hay secciones asignadas al grado seleccionado</p>
          } 

      </>
    )
  }
}

export default DisplaySelect;