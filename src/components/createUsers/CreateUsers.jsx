import s from './createUser.module.css';

const CreateUsers = ({children, attributes, ...rest}) => {

  return(
    <div className={s.component}>
      <h2>{rest.title}</h2>
      <div className={s.flex}>
        <div className={`${s.container} ${s.labels}`}>
          {
            attributes.map( (attribute,index) => {
              return <label className={s.items} key={index} htmlFor={`input${index}`}>{attribute.name}</label>
            })
          }
        </div>

        <div className={s.container}>
          {
            attributes.map((attribute, index) => {
              return <input name={attribute.attribute} className={s.items} key={attribute.name} id={`input${index}`} type="text" 
              onChange={(e) => rest.handler(e, rest.set)}
              />
            })
          }
        </div>
        <div className={s.aditionals}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CreateUsers;