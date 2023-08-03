import useFetch from "@/Hooks/useFetch"
import { setTutorSections } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const TUTOR_SECTIONS = process.env.NEXT_PUBLIC_TUTOR_SECTIONS;

export const tutorSections = (dispatch, userId) => {
  
  let status;

  useFetch(`${LOGIN_URL}/${TUTOR_SECTIONS}?userId=${userId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setTutorSections(res));
    throw new Error(res)
  })
  .catch(err => {
    console.error(err)
  })

}