import useFetch from "@/Hooks/useFetch";
import { FAILURE, SUCCESS } from "@/const";
import { setModal } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const getFile = (e) => {
  const [ file ] = e.target.files;
 
  const fileTemp = {
    fileRaw: file,
    fileName: file.name
  }
  return fileTemp;
}

export const submitFile = async (e, data, dispatch, setData) => {

  let status;

  if(!data) return

  const body = new FormData();
  body.append('myFile', data.fileRaw, data.fileName);

  e.preventDefault();
  useFetch(`${LOGIN_URL}/uploads/homeworks`, "POST", body, true)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status === 200){
      const modalBody = {
        isActive: true,
        type: SUCCESS,
        title: "Envio de tarea",
        msg: res
      }
      setData(prev => undefined)
      return dispatch(setModal(modalBody));
    }
    throw new Error(res);
  })
  .catch(err => {
    const errorBody = {
      isActive: true,
      type: FAILURE,
      title: err.name,
      msg: err.message
    }
    dispatch(setModal(errorBody));
    setData(prev => undefined)
  })

}