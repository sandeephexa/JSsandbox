document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // create xhr object
    var xhr = new XMLHttpRequest();
    // open xhr
    xhr.open('GET','data.txt',true);

    xhr.onload = function(){
        console.log("ready state ",xhr.readyState);
        if(this.status === 200)
        {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // on error
    xhr.onerror = function(){
        console.log("something went wrong ...");
    }
    // send xhr object
    xhr.send();

}