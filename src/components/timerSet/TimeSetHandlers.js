
export const validateInput = (e, validating) => {
          
  if(e.key == 'Backspace') {

      return validating.slice(0, validating.length-1);

    }


  let pattern = /[0-9]/;

    if(pattern.test(e.key)){
        if(validating.length < 2) return validating + e.key;
    }

    return validating

}

export const timeInputHandler = (e, set, value) => {

  set( prev =>{
    return {
      ...prev,
      [e.target.name]: value
    }
  })
}

export const formatingData = (setData, input, time, index) => {

  const {hour, min, period} = time;

  setData( prev => {

    let newHour;

      newHour = {
        ...prev.days[index],
        [input]: `${hour}:${min}`
      }

    const array = prev.days;
    
    array[index] = newHour

    return {
      ...prev,
      days: array
    }
  })
}


/* 

{
    courseName: "",
    gradeId: null,
    sectionId: null,
    teacherId: null,
    days: []
  }

*/

/* 

const {hour, min, period} = time;

  setData( prev => {
    return {
      ...prev,
      [input]: `${hour}:${min}${period}`,
      [`${input}Per`]: period
    }
  })

*/

/* 

if(e.key == 'Backspace') {
    
    set( prev => {
      return prev = prev.slice(0, prev.length-1);
  
    })

  }
  let pattern = /[0-9]/;

    if(pattern.test(e.key)){
      set(prev => {
        if(prev.length < 2) return prev = prev + e.key;
        return prev
      })
    }
*/