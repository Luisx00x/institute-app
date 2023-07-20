import { setModal } from "@/redux/slice"

export const setListModal = (title, dispatch) => {

  const modal = {
    isActive: true,
  }

  dispatch(setModal(modal));

}