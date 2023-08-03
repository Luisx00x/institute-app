'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tutorSections } from "./tutorHandlers";

const TutorInterface = () => {

  const user = useSelector(state => state.primarySlice.userLog);
  const dispatch = useDispatch();

  useEffect( () => {

    tutorSections(dispatch, user.id);

  },[])

  return (
    <>
    
    </>
  )

}

export default TutorInterface;