import { setSelectHandler } from './DisplaySelectHandlers.js';

const DisplaySelect = ({title, choices, feature, setValue, ... rest}) => {

  return(
    <>  
        {
          choices ?
          <>
          <label htmlFor={`${title.name}`}>{title.name}</label>
          <select name={`${title.attribute}`} id={`${title.name}`} onChange={(e) => setSelectHandler(e, setValue)}>

            <option value={false} >-- Seleccione un grado --</option>
            
            {
              choices?.map( choice => {
                console.log(choice.id)
                return (
                  <option 
                  key={`${choice.id}${choice[feature]}`} 
                  value={choice.id} >
                    {
                    rest.additionalFeat ? 
                    `${choice[rest.additionalFeat]} ${choice[feature]}` 
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

export default DisplaySelect;