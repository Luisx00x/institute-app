'use client'
import ReportCard from "@/app/student/reportCard/page";
import { useSelector } from "react-redux";

const ParentReportCard = () => {

  const userId = useSelector(state => state.parent.studentUId);

  return (
    <>
    
      <ReportCard user={userId} />

    </>
  )
}

export default ParentReportCard;