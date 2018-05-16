/**
 * custome HTTP library using Async Await
 * version 3
 * sandeep kumar boda
 */

 class easyHttp{
     // make HTTP GET
    async get(url){
         const users = await fetch(url);
         const data =  users.json();
         return data;
         }
        
     

      // make HTTP GET
 async post(url,data) {
    
     const response = await fetch(url, {
           method : 'POST',
           headers : {
               'Content-type' : 'application/json'
           },
           body : JSON.stringify(data)

       });

       const post = await response.json();
       return post;
      
    
   
}

     // make HTTP PUT
  async put(url,data) {
       
       const response = await fetch(url, {
               method : 'PUT',
               headers : {
                   'Content-type' : 'application/json'
               },
               body : JSON.stringify(data)
    
           })
           const post = await response.json();
       return post;
        
       
    }

     // make HTTP DELETE
  async delete(url){
      
        const response = await fetch(url, {
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
 
        })
        const post = await 'resource deleted';
        return post;
      
       
    }


}


