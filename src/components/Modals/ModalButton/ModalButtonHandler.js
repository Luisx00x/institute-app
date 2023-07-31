import useFetch from "@/Hooks/useFetch";
import { ADMIN, ALLSECTIONS, COURSE, FAILURE, REPRESENTATIVE, SECTION, STUDENT, SUCCESS } from "@/const";
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

  body.append('newRelease', data.fileRaw, data.fileName);

  body.append('title', input.title);
  if(input.sender === ADMIN){
    body.append('sender', "Administración")
  }
  else{
    body.append('sender', input.sender);
  }
  body.append('userRol', input.userRol);

  if(input.type === COURSE) body.append(`courseId`, input.courseId);
  if(input.type === STUDENT) body.append(`studentId`, input.studentId);
  if(input.type === SECTION) body.append(`sectionId`, input.sectionId);
  if(input.type === ALLSECTIONS) body.append(`sectionId`, "all");
  if(input.type === REPRESENTATIVE) {
    body.append(`studentId`, input.studentId);
    body.append(`representative`, input.representativeId);
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