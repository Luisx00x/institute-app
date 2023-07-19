import useFetch from "@/Hooks/useFetch"
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const callData = async (id, rolId, setData) => {

  let status;

  await useFetch(`${LOGIN_URL}/queries/searchById?searchId=${id}&rolId=${rolId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status === 200){
      setData( prev => {
        return res;
      })
    }
    throw new Error (res);
  })
  .catch( err => {
    console.error(err)
  })

}