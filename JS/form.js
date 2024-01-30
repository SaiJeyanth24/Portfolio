const button=document.querySelector('button');
const form=document.querySelector('form');

const Response = () =>{
    form.innerHTML='<h1>Thanks for taking the time to reach out. Let me get back to you :)</h1>';
    document.querySelector('h1').style.fontSize='40px';
    form.style.height='150px';
}

const cancelListener = () =>{
    document.body.style.display='none';
}

button.addEventListener('click', Response);

const cancel=document.querySelector('.cancel');

cancel.addEventListener('click',cancelListener);
