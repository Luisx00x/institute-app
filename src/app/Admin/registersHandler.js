import useFetch from "@/Hooks/useFetch";
import { STUDENT, TEACHER } from "@/const";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export function inputHandler (e, set){
  e.preventDefault();
  set( prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
}

export async function submitHandler (e, inputs, type){
  e.preventDefault(e);

  if(type === STUDENT) inputs = {...inputs, userRol: 2};
  if(type === TEACHER) inputs = {...inputs, userRol: 3};

  try{

    let status

    const fechingData = await useFetch(`${LOGIN_URL}/register`,"POST", inputs)
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status === 200) console.log(res);
      else throw new Error(res);
    })
    .catch(err => {console.log(err)})

  }catch(err){
    console.error(err)
  }
}