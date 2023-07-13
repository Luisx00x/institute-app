import useFetch from "@/Hooks/useFetch";
import { setAllGrades } from '@/redux/slice.js';

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;


export const searchGrades = async (dispatch) => {

  let status;

  const currentDate = new Date().getFullYear();

  const sections = await useFetch(`${LOGIN_URL}/queries/searchGrades?year=${currentDate}`, "GET")
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then(res => {
    if(status !== 200) throw new Error(res);

    dispatch(setAllGrades(res));

  })
  .catch(err => {
    dispatch(setAllGrades([]));
    console.error(err);
  });

}
