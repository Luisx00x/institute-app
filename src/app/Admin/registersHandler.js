import useFetch from "@/Hooks/useFetch";
import { FAILURE, STUDENT, SUCCESS, TEACHER } from "@/const";
import { setModal } from "@/redux/slice";
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

export async function submitHandler (e, inputs, type, dispatch){
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
      if(status === 200) {
        const info = {
          type: SUCCESS,
          msg: res,
          isActive: true
        }
        dispatch(setModal(info));
      }
      else throw new Error(res);
    })
    .catch(err => {
      const error = {
        type: FAILURE,
        title: err.name,
        msg: err.message,
        isActive: true
      }
      dispatch(setModal(error));
    })

  }catch(err){
    console.error(err)
  }
}

export const createYearData = (year, initial, elementary, secundary) => {

  const compatData = {
    newYear: year,
    initial,
    elementary,
    secundary
  }

  return compatData;

}

export const SubmitYearHandler = async (data) => {

  try{

    let status;

    const fechingData = await useFetch(`${LOGIN_URL}/academyYear`,"POST", data)
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then( res => {
      if(status === 200) console.log(res);
      else throw new Error(res);
    })
    .catch(err => console.log(err))


  }catch(err){
    console.error(err)
  }

}