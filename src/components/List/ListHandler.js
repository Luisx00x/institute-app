import { setModal } from "@/redux/slice"

export const setListModal = (title, studentId, dispatch) => {

  const modal = {
    isActive: true,
    studentId: studentId
  }

  dispatch(setModal(modal));

}