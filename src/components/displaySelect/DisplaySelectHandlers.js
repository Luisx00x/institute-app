export const setSelectHandler = (e, set) => {

  e.preventDefault();
  set( prev => {
    console.log(e.target.value, "DENRO DE FUNCIOn")
    if(e.target.name !== "gradeId"){
      return {
        ...prev,
        [e.target.name]: parseInt(e.target.value),
      }
    }
    return {
      ...prev,
      [e.target.name]: parseInt(e.target.value),
      sectionId: null
    }
  })

}