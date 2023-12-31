import useFetch from "@/Hooks/useFetch"
import { setCalifications, setReport } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const STUDENT_CALIFICATIONS = process.env.NEXT_PUBLIC_STUDENT_CALIFICATIONS;
const CALL_REPORT = process.env.NEXT_PUBLIC_CALL_REPORT;
const REPORT_URL = process.env.NEXT_PUBLIC_REPORT_URL;

export const studentCalifications = (dispatch, studentId, sectionId) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_CALIFICATIONS}?studentId=${studentId}&sectionId=${sectionId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setCalifications(res));
    throw new Error(res);
  })

}

export const callReport = (dispatch, e, studentId, sectionId, userId) => {

  e.preventDefault();
  let status;

  const body = { url: `${REPORT_URL}/${sectionId}/${studentId}/${userId}`}

  useFetch(`${LOGIN_URL}/${CALL_REPORT}`, "POST", body)
  .then( res => {
    status = res.status;
    return res.blob();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setReport(res));
    throw new Error(res);
  })

}