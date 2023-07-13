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