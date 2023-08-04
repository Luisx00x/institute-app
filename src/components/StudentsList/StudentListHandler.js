import { setModal } from "@/redux/slice";

export const submitCalifications = (dispatch, studentId, sectionId, notes) => {

  const modal = {
    isActive: true,
    sectionId,
    studentId,
    title: "Calificacion del Bimestre",
    absences: notes.absences,
    justifiedFault: notes.justifiedFault,
    delays: notes.delays,
    attendanceId: notes.id
  }

  dispatch(setModal(modal));

}