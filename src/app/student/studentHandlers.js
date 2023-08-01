import useFetch from "@/Hooks/useFetch"
import { setSectionInfo, setStudentInfo } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const STUDENT_SECTION = process.env.NEXT_PUBLIC_STUDENT_SECTION;
const STUDENT_INFO = process.env.NEXT_PUBLIC_STUDENT_INFO;

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

export const studentInfo = (dispatch, userId, year) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_INFO}?userId=${userId}&year=${year}`)
  .then( res => {
    status = res.status;
    return res.json()
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setStudentInfo(res)); 
    throw new Error(res);
  })

}