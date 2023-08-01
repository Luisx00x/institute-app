import useFetch from "@/Hooks/useFetch"
import { setSchedules } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const GET_SCHEDULES = process.env.NEXT_PUBLIC_GET_SCHEDULES;

export const getSchedules = (dispatch, sectionId, year) => {

  let status

  useFetch(`${LOGIN_URL}/${GET_SCHEDULES}?sectionId=${sectionId}&year=${year}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setSchedules(res));
    throw new Error(res);
  })

}