import { setUser } from "@/redux/slice";

export const logout = (dispatch) => {
  dispatch(setUser(null));
}