import useFetch from "@/Hooks/useFetch";
import { setAbsences, setModal } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const GET_ABSENCES = process.env.NEXT_PUBLIC_GET_ABSENCES;

export const setListModal = (title, studentId, justifiedFault, absences, delays, dispatch) => {

  const modal = {
    isActive: true,
    studentId: studentId,
    title: title,
    justifiedFault,
    absences, 
    delays
  }

  dispatch(setModal(modal));

}

export const getAbsences = (dispatch, courseId) => {

  let status;

  useFetch(`${LOGIN_URL}/${GET_ABSENCES}?courseId=${courseId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setAbsences(res));
    throw new Error(res)
  })
  .catch( error =>{
    console.error(error)
  })

}