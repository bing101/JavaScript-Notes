
console.log('HTTP requesting');

// Event listerners
document.getElementById('get-text').addEventListener('click', loadText)
document.getElementById('hide-text').addEventListener('click', hideText);
document.getElementById('get-users').addEventListener('click', getUsers);
document.getElementById('hide-users').addEventListener('click', hideUsers);

// Get local text file
function loadText(){
    console.log('Function Called')
    // xhr object
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'sample.txt', true);


    // Onload is a callback
    xhr.onload = function() { 
        if(this.status == 200){
            document.getElementById('text').innerHTML = this.responseText;
        }else{
            console.log('failed')
        }
    };

    xhr.onerror = () => console.log('Requestgo Error.. ');

    // Send request to server
    xhr.send();
}



function hideText(){
    let p = document.getElementById('text');
    p.innerHTML = '';
}

// Requesting local json file
function getUsers(){
    let output = "";
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'sample.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            const data = JSON.parse(this.responseText);
            data.forEach(element => {
                output += `<li> ${element.name} : ${element.email} </li>`;
            });
            document.getElementById('user-list').innerHTML =  `<ul> ${output} </ul>`;
        }else{
            console.log('Something Went wrong');
        }
    }

    xhr.onerror = () => console.log("An Error occured !!");

    xhr.send();

}

function hideUsers(){
    document.getElementById('user-list').innerHTML = '';
}


