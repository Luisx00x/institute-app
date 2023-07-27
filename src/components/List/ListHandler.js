import { setModal } from "@/redux/slice"

export const setListModal = (title, studentId, justifiedFault, absences, delays, dispatch) => {

  const modal = {
    isActive: true,
    studentId: studentId,
    title: title,
    justifiedFault,
    absences, 
    delays
  }

  dispatch(setModal(modal));

}