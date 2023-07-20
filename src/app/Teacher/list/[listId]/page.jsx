'use client'
import List from "@/components/List/List";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AbsencesList = ({params}) => {
  
  const {listId} = params;
  const [data, setData] = useState();
  
  const user = useSelector(state => state.primarySlice.userLog);
  const allSections = useSelector(state => state.teacher.courses);
  const section = allSections.find( course => course.id == listId);

  useEffect( () => {
    
    if(user?.RolId === 3){
      setData( prev => {
        return section.Section.Students
      });
    }
    
  },[])
  
  return (
    <>
 {   console.log(data)}

        <List listItems={data} />
    </>
  )
} 

export default AbsencesList;