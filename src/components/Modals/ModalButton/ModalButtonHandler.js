import useFetch from "@/Hooks/useFetch";
import { ADMIN, ALLSECTIONS, COURSE, FAILURE, REPRESENTATIVE, SECTION, STUDENT, SUCCESS, UPHOMEWORK } from "@/const";
import { setModal } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const CREATE_RELEASE = process.env.NEXT_PUBLIC_CREATE_RELEASE;

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

export const submitInfo = (e, body, dispatch, url, msg) => {

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
    if(msg) return dispatch(setModal({...res, isActive:true, alterModal: true, type: SUCCESS}))
    dispatch(confirm);
  })

}

export const getReleaseFile = (e) => {
  const [ file ] = e.target.files;
 
  const fileTemp = {
    fileRaw: file,
    fileName: file.name
  }
  return fileTemp;
}

export const submitReleaseFile = (e, data, input, dispatch, setData, setInput, url) => {
  
  if(!data) return

  const sendUrl = `${LOGIN_URL}/${url}`
  
  let status

  const body = new FormData();

  if(input.type === UPHOMEWORK){
    body.append('newAnswer', data.fileRaw, data.fileName);
  }else{
    body.append('newRelease', data.fileRaw, data.fileName);
  }

  if(input.title){
    body.append('title', input.title);
  }

  if(input.sender){
    if(input.sender === ADMIN){
      body.append('sender', "Administración")
    }
    else{
      body.append('sender', input.sender);
    }
  }
  
  if(input.userRol){
    body.append('userRol', input.userRol);
  }

  if(input.type === COURSE) body.append(`courseId`, input.courseId);
  if(input.type === STUDENT) body.append(`studentId`, input.studentId);
  if(input.type === SECTION) body.append(`sectionId`, input.sectionId);
  if(input.type === ALLSECTIONS) body.append(`sectionId`, "all");
  if(input.type === REPRESENTATIVE) {
    body.append(`studentId`, input.studentId);
    body.append(`representative`, input.representativeId);
  }
  if(input.type === UPHOMEWORK){
    body.append(`studentId`, input.studentId);
    body.append(`homeworkId`, input.homeworkId);
  }

  e.preventDefault();
  useFetch(`${sendUrl}`, "POST", body, true)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status === 200){
      const modalBody = {
        isActive: false,
        type: null,
        title: "",
        msg: ""
      }
      setData(prev => undefined);
      setInput(prev => {
        return {
          ...prev,
          title: ""
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