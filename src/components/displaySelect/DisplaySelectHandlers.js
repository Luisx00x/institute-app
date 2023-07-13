export const setSelectHandler = (e, set) => {

  e.preventDefault();
  set( prev => {
    console.log(e.target.name)
    if(e.target.name !== "gradeId" && e.target.value !== prev.gradeId){
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    }
    return {
      ...prev,
      [e.target.name]: e.target.value,
      sectionId: null
    }
  })

}