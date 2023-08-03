import { setParentInfo, setParentStudents, setReleases, setReport, setSchedules, setSectionInfo, setStudentUId, setUser } from "@/redux/slice";

export const logout = (dispatch) => {
  dispatch(setUser(null));
  dispatch(setSectionInfo(null));
  dispatch(setSchedules(null));
  dispatch(setReleases(null));
  dispatch(setParentInfo(null));
  dispatch(setParentStudents(null));
  dispatch(setStudentUId(null))

}