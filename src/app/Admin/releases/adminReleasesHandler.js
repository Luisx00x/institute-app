import useFetch from "@/Hooks/useFetch"
import { setAllSectionReleases } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const ALL_SECTIONS = process.env.NEXT_PUBLIC_ALL_SECTIONS;
const ALL_SECTIONS_RELEASES = process.env.NEXT_PUBLIC_FIND_ALL_SECTIONS_RELEASES;

let status;

export const getAllSections = (year, setData) => {
  
  useFetch(`${LOGIN_URL}/${ALL_SECTIONS}?year=${year}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304){
      return setData(prev => res)
    }
    throw new Error(res);
  })

}

export const findCourses = (sections, data, setData) => {

  const searchCourse = sections.filter( section => section.Grade.level === data.academyLevel);

  console.log(searchCourse, "SEARCH")

  setData( prev => {
    return {
      ...prev,
      courses: searchCourse
    }
  })
}

export const getSectionsReleases = (dispatch, year) => {

  useFetch(`${LOGIN_URL}/${ALL_SECTIONS_RELEASES}?year=${year}`)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) {
     return dispatch(setAllSectionReleases(res));
    }
    throw new Error(res);
  })

}