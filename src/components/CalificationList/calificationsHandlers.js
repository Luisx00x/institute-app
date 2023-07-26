const { setModal } = require("@/redux/slice");

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