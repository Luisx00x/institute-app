
const useFetch =  async (url, method, body) => {

  try{

    let fechingData;

    if(body)
    {
      fechingData = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
    }else{
      fechingData = await fetch(url);
    }

    return fechingData;

  }catch(err){
    console.error(err)
  }

}

export default useFetch;