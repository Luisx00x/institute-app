import useFetch from "@/Hooks/useFetch";

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const STUDENT_CALIFICATIONS = process.env.NEXT_PUBLIC_STUDENT_CALIFICATIONS;
const STUDENT_SECTION = process.env.NEXT_PUBLIC_STUDENT_SECTION;
const STUDENT_INFO = process.env.NEXT_PUBLIC_STUDENT_INFO;

export const setCalifications = (setData, studentId, sectionId) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_CALIFICATIONS}?studentId=${studentId}&sectionId=${sectionId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return setData( prev => {
      return {
        ...prev,
        califications: res
      }
    });
    throw new Error(res);
  })

}

export const setSection = (setData, userId, year) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_SECTION}?userId=${userId}&year=${year}`)
  .then( res => {
    status = res.status;
    return res.json()
  })
  .then( res => {
    if(status == 200 || status == 304) return setData( prev => {
      return {
        ...prev,
        sectionInfo: res
      }
    }); 
    throw new Error(res);
  })

}

export const setStudent = (setData, userId, year) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_INFO}?userId=${userId}&year=${year}`)
  .then( res => {
    status = res.status;
    return res.json()
  })
  .then( res => {
    if(status == 200 || status == 304) return setData(prev => {
      return {
        ...prev,
        studentInfo: res
      }
    })
    throw new Error(res);
  })

}