'use client'
import { useState } from "react";
import { getFile, submitFile } from "./uploadHandler.js";
import { useDispatch, useSelector } from "react-redux";
import ModalMsg from "../Modals/ModalMsg/ModalMsg.jsx";

const UploadFiles = () => {

  const [data, setData] = useState();
  const dispatch = useDispatch();
  const modal = useSelector(state => state.primarySlice.modal);

  return(
    <>
      {

        modal.isActive ? <ModalMsg {...modal} />
        :
        <div>

          <input type="file" name="hwSelect" id="hwSelect" onChange={(e) => setData( prev => getFile(e))} />
          <button onClick={(e) => submitFile(e, data, dispatch, setData)}>Enviar</button>

        </div>

      }

      {console.log(data, "DATA")}
    </>
  )
}

export default UploadFiles;