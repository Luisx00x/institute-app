import useFetch from "@/Hooks/useFetch"
import { setTutorSections } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const TUTOR_SECTIONS = process.env.NEXT_PUBLIC_TUTOR_SECTIONS;
const SECTION_STUDENTS = process.env.NEXT_PUBLIC_SECTION_STUDENTS;
const SECTION_ABSENCES = process.env.NEXT_PUBLIC_SECTION_ABSENCES;
const ABSENCES_NOTES = process.env.NEXT_PUBLIC_SECTION_NOTES;

export const tutorSections = (dispatch, userId) => {
  
  let status;

  useFetch(`${LOGIN_URL}/${TUTOR_SECTIONS}?userId=${userId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setTutorSections(res));
    throw new Error(res)
  })
  .catch(err => {
    console.error(err)
  })

}

export const sectionSelected = (setData, sectionId) => {

  let status;

  useFetch(`${LOGIN_URL}/${SECTION_STUDENTS}?sectionId=${sectionId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return setData( prev => res.Students);
    throw new Error(res);
  })
  .catch(err => {
    console.error(err)
  })

}

export const searchAbsences = (setData, students, sectionId) => {

  let status;

  const body = {
    students,
    sectionId
  }

  useFetch(`${LOGIN_URL}/${SECTION_ABSENCES}`, 'POST', body, false)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return setData( prev => res);
    throw new Error(res);
  })
  .catch( res => {
    console.error(res)
  })
}

export const searchNotes = (setData, students, sectionId) => {

  let status;

  const body = {
    students,
    sectionId
  }

  useFetch(`${LOGIN_URL}/${ABSENCES_NOTES}`, "POST", body, false)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return setData( prev => res);
    throw new Error(res);
  })
  .catch( res => {
    console.error(res)
  })

}