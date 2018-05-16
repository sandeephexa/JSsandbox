/**
 * custome HTTP library
 * version 2
 * sandeep kumar boda
 */

 class easyHttp{
     // make HTTP GET
     get(url){
         return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));
         })
        
     }

      // make HTTP GET
 post(url,data) {
    return new Promise((resolve,reject)=>{
       fetch(url, {
           method : 'POST',
           headers : {
               'Content-type' : 'application/json'
           },
           body : JSON.stringify(data)

       })
       .then(res => res.json())
       .then(data =>resolve(data))
       .catch(err => reject(err));
    })
   
}

     // make HTTP PUT
     put(url,data) {
        return new Promise((resolve,reject)=>{
           fetch(url, {
               method : 'PUT',
               headers : {
                   'Content-type' : 'application/json'
               },
               body : JSON.stringify(data)
    
           })
           .then(res => res.json())
           .then(data =>resolve(data))
           .catch(err => reject(err));
        })
       
    }

     // make HTTP DELETE
     delete(url){
        return new Promise((resolve,reject)=>{
           fetch(url, {
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
 
        })
           .then(res => res.json())
           .then(data =>resolve('Resource Deleted'))
           .catch(err => reject(err));
        })
       
    }


}


