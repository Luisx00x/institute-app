'use client'
import { useState } from "react";
import { getFile, submitFile } from "./uploadHandler.js";
import { useDispatch, useSelector } from "react-redux";
import ModalMsg from "../Modals/ModalMsg/ModalMsg.jsx";
import { inputHandler } from "@/globalHandlers.js";

const UploadFiles = ({courseId, teacherId}) => {

  console.log(courseId, "COURSEID")
  console.log(teacherId, "TEACHERID")

  const [data, setData] = useState();
  const [input, setInput] = useState({
    courseId,
    teacherId,
    inputValue: ""
  }); //TODO AGREGAR EL USER Y EL COURSE
  const dispatch = useDispatch();
  const modal = useSelector(state => state.primarySlice.modal);
  const user = useSelector(state => state.primarySlice.userLog);

  return(
    <>
    {console.log(input)}
      {

        modal.isActive ? <ModalMsg {...modal} />
        :
        <div>

          <label>Ingrese un nombre para la asignación</label>

          <input type="text" name="inputValue" value={input.inputValue} onChange={(e) => inputHandler(e, setInput) }/>

          <input type="file" name="hwSelect" id="hwSelect" onChange={(e) => setData( prev => getFile(e))} />

          <button onClick={(e) => submitFile(e, data, input, dispatch, setData, setInput)}>Enviar</button>

        </div>

      }
    </>
  )
}

export default UploadFiles;