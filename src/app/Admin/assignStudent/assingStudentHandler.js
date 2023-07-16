import useFetch from "@/Hooks/useFetch";
import { setStudents } from "@/redux/slice";

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const searchStudents = (dispatch) => {

  let status

  useFetch(`${LOGIN_URL}/queries/searchActiveStudents`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then(res => {
    if(status !== 200) throw new Error(res);
    dispatch(setStudents(res));
  })

}

export const submitAssign = (e, data) => {

  e.preventDefault();

  let status
  
  useFetch(`${LOGIN_URL}/assignStudents`, "POST", data)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then(res => {
    if(status !== 200) throw new Error(res);
    console.log(res)
  })
}