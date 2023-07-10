import useFetch from "@/Hooks/useFetch"
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const submitHandler = async (e, data) =>{
  e.preventDefault();

  try{
  
    let status;

    const fechingData = await useFetch(`${LOGIN_URL}/register`)

  }catch(err){

  }
}