import { setModal } from "@/redux/slice";

export const confirmModal = (e, dispatch) => {

  const confirm = {
    isActive: false,
    msg: "",
    title: "",
    type: null
  }

  e.preventDefault();
  dispatch(setModal(confirm));

}