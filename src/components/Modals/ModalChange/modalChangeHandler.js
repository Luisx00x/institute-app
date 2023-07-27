
export const absencesChange = (e, setInput) => {

  setInput(  prev => {
    return {
      ...prev,
      [e.target.name]: parseInt(e.target.value)
    }
  })

}