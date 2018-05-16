document.getElementById('button1').addEventListener('click', getCustomer);
document.getElementById('button2').addEventListener('click', getCustomers);
// get customer
function getCustomer(e){
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customer.json',true);
    xhr.onload = function(){
     if(this.status === 200){
         
        const customer = JSON.parse(this.responseText);
     
       const ouptut1 = `<ul>
        <li>ID : ${customer.id}</li>
        <li>Name : ${customer.name}</li>
        <li>Company : ${customer.company}</li>
        <li>Phone : ${customer.phone}</li>
        </ul>`;

        document.getElementById('output1').innerHTML = ouptut1;
     }

    }

    xhr.send();
     e.preventDefault();
}

// get customers
function getCustomers(e){
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customers.json',true);
    xhr.onload = function(){
     if(this.status === 200){
         
        const customers = JSON.parse(this.responseText);
       
        let output2 = '';
        customers.forEach(function(customer){
        output2 += `<ul>
        <li>ID : ${customer.id}</li>
        <li>Name : ${customer.name}</li>
        <li>Company : ${customer.company}</li>
        <li>Phone : ${customer.phone}</li>
        </ul>`;

        document.getElementById('output2').innerHTML = output2;
        }
        )}

    }

    xhr.send();
     e.preventDefault();
}
