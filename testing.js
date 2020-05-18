let req = new XMLHttpRequest();
let radiovalue = "";
let jsondata = {};

function collect(){
    let radios = document.querySelectorAll('.form-check-input');
    for (const x of radios) {
        if(x.checked){
            radiovalue = x.value;
        }
    }
    if(radiovalue == "option4"){
        jsondata = {
            "sender": "Meyla-chan",
            "gift": radiovalue,
            "value": document.querySelector('.text-box').value}
    } else {
        jsondata = {
            "sender": "Meyla-chan",
            "gift": radiovalue
        }
    }
    submit_data(JSON.stringify(jsondata))
}

function submit_data(data){
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };

    req.open("POST", "https://api.jsonbin.io/b", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("secret-key", "$2b$10$pC37rHqrXHn4ISkfekshBeq0DOWKJDnAeN2GLnZZw5YtOBVlklTv.");
    req.send(data);
    alert('Berhasil dikirim!');
    document.querySelector('.text-box').value = '';
}

function enable(){
    document.querySelector('.text-box').disabled = false;
}

function disable(){
    document.querySelector('.text-box').disabled = true;
}
