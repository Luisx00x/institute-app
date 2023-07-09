
const useFetch = (url, method, body) => {

  let fechingData;

  if(body)
  {
    fechingData = fetch(url, {
      method: method,
      body: JSON.stringify(body),
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });

  }else{
    fechingData = fetch(url)
  }

  fechingData
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err))
  
  
  return fechingData

}

export default useFetch;