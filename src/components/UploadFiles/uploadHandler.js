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

export const submitFile = (e, data, input, dispatch, setData, setInput) => {

  let status;

  if(!data) return

  const body = new FormData();
  body.append('newHomework', data.fileRaw, data.fileName);
  body.append('title', input.inputValue);
  body.append('courseId', input.courseId);
  body.append('teacherId', input.teacherId);

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
      setData(prev => undefined);
      setInput(prev => {
        return {
          ...prev,
          inputValue: ""
        }
      });
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
    setData(prev => undefined);
    setInput(prev => "");
  })

}