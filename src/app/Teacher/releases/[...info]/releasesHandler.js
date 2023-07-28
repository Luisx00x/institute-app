import useFetch from "@/Hooks/useFetch";
import { setSectionReleases } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const SEARCH_SECTION = process.env.NEXT_PUBLIC_SECTION_SEARCH_RELEASES;

export const searchReleases = (dispatch, sectionId) => {

  let status

  useFetch(`${LOGIN_URL}/${SEARCH_SECTION}?sectionId=${sectionId}`)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304){
      return dispatch(setSectionReleases(res));
    }
    throw new Error(res)
  })

}