import useFetch from "@/Hooks/useFetch"
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const VERIFY = process.env.NEXT_PUBLIC_VERIFY;

export const submitComprobation = (event, studentDNI, motherDNI, fatherDNI, setValidation, setInputs) => {

  let status;

  event.preventDefault();

  useFetch(`${LOGIN_URL}/${VERIFY}?studentDNI=${studentDNI}&motherDNI=${motherDNI}&fatherDNI=${fatherDNI}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) {
      setValidation( prev => {
        return {
          ...prev,
          isValidated: true
        }
      })

      setInputs( prev => {
        return {
          ...prev,
          ...res.payload
        }
      })
    }
  })

}