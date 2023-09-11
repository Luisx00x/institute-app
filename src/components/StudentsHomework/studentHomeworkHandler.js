import { setModal } from "@/redux/slice";

export const callModal = (e, dispatch, homeworkAnswerId) => {
  
  e.preventDefault();
  const modal = {
    isActive: true,
    homeworkAnswerId
  }

  dispatch(setModal(modal))

}