import useFetch from "@/Hooks/useFetch";
import { setAllGrades, setTeachers } from '@/redux/slice.js';

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;


export const searchGrades = async (dispatch) => {

  let status;

  const currentDate = new Date().getFullYear();

  try{

    const sections = await useFetch(`${LOGIN_URL}/queries/searchGrades?year=${currentDate}`, "GET")
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status !== 200) throw new Error(res);
  
      dispatch(setAllGrades(res));
  
    })
    .catch(err => {
      dispatch(setAllGrades([]));
      console.error(err);
    });

  }catch(err){
    console.error(err);
  }


}

export const searchTeachers = async (dispatch) => {

  let status;

  try{

    const teachers = await useFetch(`${LOGIN_URL}/queries/searchTeachers`)
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status != 200) throw new Error(res);
      dispatch(setTeachers(res));
    })


  }catch(err){
    dispatch(setTeachers([]));
    console.error(err);
  }

}

export const setDay = (set) => {
  set( prev => {
    return {
      ...prev,
      days: [...prev.days, {day: "", init: "", end: ""}]
    }
  })
}

export const dayHandler = (e, set, index) => {
  set( prev => {
    
    const newDay = {
      ...prev.days[index],
      day: e.target.value
    }
    
    const modifier = prev.days
    modifier[index] = newDay;

    return {
      ...prev,
      days: modifier
    }
  })
}

export const submitHandler = async (e, data) => {

  e.preventDefault();
  try{

    let status;

    const fechingData = useFetch(`${LOGIN_URL}/courseCreation`, "POST", data)
    .then( res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status != 200) throw new Error(res);
      console.log(res);
    })

  }catch(err){
    console.error(err)
  }

}