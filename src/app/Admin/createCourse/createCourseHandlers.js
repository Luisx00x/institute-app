import useFetch from "@/Hooks/useFetch";
import { DAY, FAILURE, SKILL, SUCCESS } from "@/const";
import { setAllGrades, setModal, setTeachers } from '@/redux/slice.js';

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;


export const searchGrades = async (dispatch) => {

  let status;

  const currentDate = new Date().getFullYear();

  try{

    const sections = await useFetch(`${LOGIN_URL}/queries/searchGrades?year=${currentDate}`, "GET")
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status !== 200) throw new Error(res);
  
      dispatch(setAllGrades(res));
  
    })
    .catch(err => {
      dispatch(setAllGrades([]));
      console.error(err);
    });

  }catch(err){
    console.error(err);
  }


}

export const searchTeachers = async (dispatch) => {

  let status;

  try{

    const teachers = await useFetch(`${LOGIN_URL}/queries/searchTeachers`)
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status != 200) throw new Error(res);
      dispatch(setTeachers(res));
    })


  }catch(err){
    dispatch(setTeachers([]));
    console.error(err);
  }

}

export const setData = (prop, set) => {
  set( prev => {
    if(prop === DAY){
      return {
        ...prev,
        days: [...prev.days, {day: "", init: "", end: ""}]
      }
    }
    if(prop === SKILL){
      return {
        ...prev,
        skills: [...prev.skills, {skill: "", abbrev: ""}]
      }
    }
  });
}

export const dayHandler = (e, set, index) => {
  set( prev => {
    
    const newDay = {
      ...prev.days[index],
      day: e.target.value
    }
    
    const modifier = prev.days
    modifier[index] = newDay;

    return {
      ...prev,
      days: modifier
    }
  })
}

export const submitHandler = async (e, data, dispatch, setInputs) => {

  let skills = []
  let abbrev = []

  data.skills.map( element => {
    skills.push(element.skill);
    abbrev.push(element.abbrev);
  })
  
  const convertData = {...data, skills: skills, Abbrev: abbrev}

  e.preventDefault();
  try{

    let status;

    const fechingData = useFetch(`${LOGIN_URL}/courseCreation`, "POST", convertData)
    .then( res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status == 200 || status == 304) {
      
        setInputs( prev => {
          return {
            courseName: "",
            gradeId: null,
            sectionId: null,
            teacherId: null,
            days: [],
            skills: [],
            Abbrev: []
          }
        })
        return dispatch(setModal({msg:res, type:SUCCESS, isActive: true}));
      
      }
      dispatch(setModal({msg:res, type:FAILURE, isActive: true}));
    })

  }catch(err){
    console.error(err)
  }

}

export const deleteSkill = (e, element, index, setInputs) => {

  e.preventDefault();

  setInputs( prev => {
    
    prev[element].splice(index,1);

    return {
      ...prev
    }

  })

}