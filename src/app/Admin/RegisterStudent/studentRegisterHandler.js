import useFetch from "@/Hooks/useFetch";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export function inputHandler (e, set){
  e.preventDefault();
  set( prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
}

export async function submitHandler (e, inputs){
  e.preventDefault(e);

  try{

    let status

    const fechingData = await useFetch(`${LOGIN_URL}/register`,"POST", inputs)
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if(status === 200) console.log(res);
      else throw new Error(res);
    })
    .catch(err => {console.log(err)})

  }catch(err){
    console.error(err)
  }
}