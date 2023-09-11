export const setSelectHandler = (e, set) => {

  e.preventDefault();
  set( prev => {
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

export const selectLevelHandler = (e, set) => {

  e.preventDefault();
  set( prev => {
    return e.target.name = e.target.value;
  })

} 