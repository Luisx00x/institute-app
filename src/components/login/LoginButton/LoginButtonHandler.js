import useFetch from "@/Hooks/useFetch";
import { FAILURE } from "@/const";
import { setModal, setUser } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const loginHandler = async (userName, password, dispatch) => {

  try{
    
    let status;

    const feching = await useFetch(`${LOGIN_URL}/login`, "POST", {userName, password})

    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status !== 200) throw new Error(res);
      
      dispatch(setUser(res));
    })
    .catch(err => {
      const error = {
        type: FAILURE,
        title: err.name,
        msg: err.message,
        isActive: true
      }
      dispatch(setModal(error));
    })

    


  }catch(err){
    console.error(err)
  }

}