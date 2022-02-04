export const getJSON = async function(url){
   try{
    const resp =  await fetch(url)
   const resp1 = await resp.json()
   return resp1
   }catch(err){
       alert(err)
   }
}