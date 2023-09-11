import { setReleases, setReport, setSchedules, setSectionInfo, setUser } from "@/redux/slice";

export const logout = (dispatch) => {
  dispatch(setUser(null));
  dispatch(setSectionInfo(null));
  dispatch(setSchedules(null));
  dispatch(setReleases(null));
  dispatch(setReport(null));
}