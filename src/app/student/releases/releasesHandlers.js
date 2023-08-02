import useFetch from "@/Hooks/useFetch"
import { setReleases } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const ALL_STUDENT_RELEASES = process.env.NEXT_PUBLIC_STUDENT_RELEASES;

export const searchReleases = (dispatch, studentId, sectionId) => {

  let status

  useFetch(`${LOGIN_URL}/${ALL_STUDENT_RELEASES}?studentId=${studentId}&sectionId=${sectionId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setReleases(res));
    throw new Error(res);
  })

}