import useFetch from "@/Hooks/useFetch";
import { setParentInfo, setParentStudents } from "@/redux/slice";

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const PARENT_CHILDS = process.env.NEXT_PUBLIC_PARENT_CHILDS;
const PARENT_INFO = process.env.NEXT_PUBLIC_PARENT_INFO;

export const findParentInfo = (dispatch, userId) => {

  let status;

  useFetch(`${LOGIN_URL}/${PARENT_INFO}?userId=${userId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setParentInfo(res));
    throw new Error(res)
  })

}

export const findParentStudents = (dispatch, parentId) => {

  let status;

  useFetch(`${LOGIN_URL}/${PARENT_CHILDS}?representativeDNI=${parentId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setParentStudents(res));
    throw new Error(res)
  })

}