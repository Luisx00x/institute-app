export const initialHandler = (e, set) => {

  set( prev => {

    if(e.target.name === "section" && e.target.value.length > 0){
      return {
        ...prev,
        section: e.target.value[0].toUpperCase()
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
    
    return {
      ...prev,
      sections: [...prev.sections, prev.section],
      section: ""
    } 

  });

}

export const assingLevel = (set, values) => {

  const {gradeName, sections} = values

  set( prev => {

    return [...prev, {gradeName, sections}]

  });

}