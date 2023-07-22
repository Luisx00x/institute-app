const { default: useFetch } = require("@/Hooks/useFetch")
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const getHomeworks = (courseId, teacherId, rol, setData) => {

  let status;

  useFetch(`${LOGIN_URL}/homeworks/getHomeworks?courseId=${courseId}&teacherId=${teacherId}&rol=${rol}`, "GET")
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status === 200 || status === 304) return setData(prev => res);
    
    throw new Error(res);
  })
  .catch( err => {
    console.error(err)
  })

}