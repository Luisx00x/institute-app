
export const inputHandler = (e, setInputs) => {
  setInputs( prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
}