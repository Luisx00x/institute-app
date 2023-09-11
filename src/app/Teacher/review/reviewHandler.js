import useFetch from "@/Hooks/useFetch"
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const SEARCH_ANSWERS = process.env.NEXT_PUBLIC_OBTAIN_ANSWERS;

export const callHomeworksAnswers = (setData, homeworkId) => {

  let status;

  useFetch(`${LOGIN_URL}/${SEARCH_ANSWERS}?homeworkId=${homeworkId}`).
  then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return setData( prev => res);
    throw new Error(res);
  })

}