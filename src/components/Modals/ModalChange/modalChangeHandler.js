
export const absencesChange = (e, setInput) => {

  setInput(  prev => {
    return {
      ...prev,
      [e.target.name]: parseInt(e.target.value)
    }
  })

}

export const changeSelect = (e, setInput) => {

  const values = e.target.name.split("/")

  console.log(values)

  setInput ( prev => {  
    return {
      ...prev,
      [values[1]]: e.target.value
    }
  })
}