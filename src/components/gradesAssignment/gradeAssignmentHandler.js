export const initialHandler = (e, set) => {

  set( prev => {

    if(e.target.name === "section" && e.target.value.length > 0){
      return {
        ...prev,
        section: e.target.value.toUpperCase()
      }
    }

    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  });
 
}

export const pushSection = (set) => {
  
  set( prev => {
    if(prev.section.length > 0){
      return {
        ...prev,
        sections: [...prev.sections, prev.section],
        section: ""
      } 
    }else{
      return { ...prev }
    }

  });

}

export const assingLevel = (set, values) => {

  const {gradeName, sections} = values
 
  set( prev => {
 
    if(prev.length === 0) return [...prev, {gradeName, sections}]

    const findGrade = prev.find( grade => grade.gradeName === gradeName);

    if(!findGrade){
      return [...prev, {gradeName, sections}]
    }else{
      return prev
    }

  });

}