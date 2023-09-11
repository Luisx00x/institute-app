'use client'
import List from "@/components/List/List";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AbsencesList = ({params}) => {
  
  const {listId} = params;
  const [data, setData] = useState();
  
  const user = useSelector(state => state.primarySlice.userLog);
  const allSections = useSelector(state => state.teacher.courses);
  const course = allSections.find( course => course.id == listId);

  useEffect( () => {
    
    if(user?.RolId === 3){
      setData( prev => {
        return course.Section.Students
      });
    }
    
  },[allSections])
  
  return (
    <>
        <List listItems={data} course={course} />
    </>
  )
} 

export default AbsencesList;