import { setModal } from "@/redux/slice"

export const newRelease = (dispatch, submitData) => {

  const modal = {
    isActive: true,
    title: "Enviar un nuevo comunicado",
    ...submitData
  }

  dispatch(setModal(modal));
}