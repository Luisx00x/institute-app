import useFetch from "@/Hooks/useFetch";
import { setModal } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

const confirm = {
  isActive: false,
  msg: "",
  title: "",
  type: null
}

export const confirmModal = (e, dispatch) => {

  e.preventDefault();
  dispatch(setModal(confirm));

}

export const submitInfo = (e, body, dispatch, url) => {

  e.preventDefault();
  //FALTA AGREGARLE LA URL A AUSENCIAS

  let status

  useFetch(`${LOGIN_URL}/${url}`, "POST", body)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(res === 400 || res === 404) throw new Error(res)
    console.log(res);
    dispatch(setModal(confirm))
  })

}