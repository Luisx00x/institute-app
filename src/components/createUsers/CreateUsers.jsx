import s from './createUser.module.css';

const CreateUsers = ({children, attributes, ...rest}) => {

  return(
    <div className={s.component}>

      {
        rest.title ? <h2>{rest.title}</h2> : null
      }

      <div className={s.flex}>
        <div className={`${s.container}`}>
          {
            attributes.map( (attribute,index) => {
              if(attribute.attribute === "gender" || attribute.attribute === "level"){
                
                return (
                  <div className={s.flexItems}>
                    <label className={s.labels} key={index} htmlFor={`input${index}`}>{attribute.name}</label>
                    <select 
                    name={attribute.attribute} 
                    className={s.items} 
                    key={attribute.name} 
                    value={rest.values[attribute.attribute]} 
                    id={`input${index}`} 
                    type="text" 
                    onChange={(e) => rest.handler(e, rest.set)}
                    >
                      {
                        attribute.options.map( (option,index) => {
                          return (
                            <>
                              <option key={`${option}_${index}`} 
                              value={index !== 0  ? option : ""}
                              >{option}</option>
                            </>
                          )
                        })
                      }
                    </select>         
                  </div>
                  )
                  
              }
              return (
              <div className={s.flexItems}>
                <label className={s.labels} key={index} htmlFor={`input${index}`}>{attribute.name}</label>
                <input 
                name={attribute.attribute} 
                className={s.items} 
                key={attribute.name} 
                value={rest.values[attribute.attribute]} 
                id={`input${index}`} 
                type="text" 
                onChange={(e) => rest.handler(e, rest.set)}
                />
                
              </div>
              )
            })
          }
        </div>
        
        <div className={s.aditionals}>
          {children}
        </div>
      </div>

          {
            rest.info ? 
            <div>
              <h4>Secciones agregadas para asignar: </h4>
              
              {
                rest.info.map( sec => `"${sec}"/`)
              }

              <h3>Nota: Una vez agregadas todas las Secciones deseadas para un Grado, presionar Asignar para completar el registro del grado</h3>
            </div> 
            : null
          }
        

    </div>
  )
}

export default CreateUsers;