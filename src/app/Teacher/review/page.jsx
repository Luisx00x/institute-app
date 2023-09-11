'use client'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { callHomeworksAnswers } from "./reviewHandler";
import StudentsHomework from "@/components/StudentsHomework/StudentsHomework";
import s from './review.module.css';
import BackButton from "@/components/backButton/BackButton";

const SetReviews = () => {
  
  const params = useSelector(state => state.teacher.reviewsParam);
  const [homework, setHomework] = useState();
  const modal = useSelector(state => state.primarySlice.modal);

  useEffect( () => {

    if(params) callHomeworksAnswers(setHomework, params.homeworkId);

  },[params, modal])


  return (
    <>

      <div className={s.answerContainer}>

        <BackButton />

        <h2>Asignación: {homework?.asignation}</h2>

        <StudentsHomework students={homework?.HomeworksAnswers} />

      </div>


    </>
  )
}

export default SetReviews;