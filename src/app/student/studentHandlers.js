import useFetch from "@/Hooks/useFetch"
import { setSectionInfo } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const STUDENT_SECTION = process.env.NEXT_PUBLIC_STUDENT_SECTION;

export const studentSection = (dispatch, userId, year) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_SECTION}?userId=${userId}&year=${year}`)
  .then( res => {
    status = res.status;
    return res.json()
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setSectionInfo(res)); 
    throw new Error(res);
  })

}