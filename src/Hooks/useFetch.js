
const useFetch =  async (url, method, body, formBody) => {

  try{

    let fechingData;
    
    
    if(body){
      
      if(formBody){
  
        fechingData = await fetch(url, {
          method: "post",
          body: body,
          mode: "cors"
        })
        
      }else{

        fechingData = await fetch(url, {
          method: method,
          body: JSON.stringify(body),
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        });

      }
      
  
    }else{
      fechingData = await fetch(url);
    }

    return fechingData;

  }catch(err){
    console.error(err)
  }

}

export default useFetch;