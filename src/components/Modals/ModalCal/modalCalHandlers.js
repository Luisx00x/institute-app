import { setModal } from "@/redux/slice";

export const closeModal = (e, dispatch) => {
  
  e.preventDefault();

  const modal = {
    isActive: false,
    title: "",
    msg: "",
    type: null
  } 

  dispatch(setModal(modal));

}

export const promHandlers = (e, setInputs) => {

  if(e.target.value.toUpperCase().charCodeAt() >= 65 && e.target.value.toUpperCase().charCodeAt() <= 70)
  {
    setInputs( prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value.slice(0,1).toUpperCase()
      }
    })
  }

  if(!e.target.value.toUpperCase().charCodeAt()){
    setInputs( prev => {
      return {
        ...prev,
        [e.target.name] : ""
      }
    })
  }

}

export const BMhandler = (e, setInputs) => {
  const values = e.target.name.split("/");
  //values[0] => B
  //values[1] => posicion

  if(e.target.value.toUpperCase().charCodeAt() >= 65 && e.target.value.toUpperCase().charCodeAt() <= 70)
  {
    setInputs( prev => {
      prev[`${values[0]}`][`${values[1]}`] = e.target.value.slice(0,1).toUpperCase();
      
      return {
       ...prev
      }
    })
  }

  if(!e.target.value.toUpperCase().charCodeAt()){
    setInputs( prev => {
      prev[`${values[0]}`][`${values[1]}`] = ""

      return { ...prev }
    })
  }


}