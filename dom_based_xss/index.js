var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


let objk = document.getElementById("btn");

function escape(s) {
    let k = eval(s);
    return k;
}

objk.onclick =  function() {
    let txt1 = document.getElementById("txt1").value;
    let txt2 = escape(txt1);
    let body = document.getElementById("pickMe");
    body.innerHTML = txt2;
    console.log('done');
}



