import useFetch from "@/Hooks/useFetch";
import { setAttendance } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const ATTENDANCE = process.env.NEXT_PUBLIC_STUDENT_ATTENDANCE;

export const searchAttencance = (dispatch, studentId) => {

  let status = 0;

  useFetch(`${LOGIN_URL}/${ATTENDANCE}?studentId=${studentId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setAttendance(res));
    throw new Error(res);
  })

}