import useFetch from "@/Hooks/useFetch";
import { FAILURE, SUCCESS } from "@/const";
import { setModal, setStudents } from "@/redux/slice";

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const searchStudents = (dispatch) => {

  let status

  useFetch(`${LOGIN_URL}/queries/searchActiveStudents`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then(res => {
    if(status !== 200) {
      const error = {
        isActive: true,
        msg: res.message,
        title: res.name,
        type: FAILURE
      }
      throw new Error(res)
    }
    
    dispatch(setStudents(res));
  })

}

export const submitAssign = (e, data, dispatch) => {

  e.preventDefault();

  let status
  
  useFetch(`${LOGIN_URL}/assignStudents`, "POST", data)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then(res => {
    if(status !== 200) {
      const error = {
        isActive: true,
        msg: res.message,
        title: res.name,
        type: FAILURE 
      }

      dispatch(setModal(error))
      throw new Error(res)
    };
    
    const success = {
      isActive: true,
      msg: res,
      type: SUCCESS
    }
    dispatch(setModal(success));

  })
  .catch(err => {
    console.error(err)
  })
}