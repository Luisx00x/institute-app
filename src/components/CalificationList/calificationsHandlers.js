import useFetch from "@/Hooks/useFetch";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const CALIFICATIONS = process.env.NEXT_PUBLIC_GET_CALIFICATIONS;

const { setModal, setTeacherCalifications } = require("@/redux/slice");

export const calificationsChange = (e, student, calif, dispatch) =>{

  e.preventDefault();
  const modal = {
    isActive: true,
    title: "",
    msg: "",
    type: null,
    student: student,
    calif: calif
  }
  dispatch(setModal(modal))
}

export const getCalifications = (dispatch, courseId) => {

  let status;

  useFetch(`${LOGIN_URL}/${CALIFICATIONS}?courseId=${courseId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setTeacherCalifications(res));
    throw new Error(res);
  })
  .catch( err => {
    console.log(err)
  })
}