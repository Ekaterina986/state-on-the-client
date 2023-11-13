const textarea = document.getElementById('editor');
textarea.value = localStorage.getItem('value');

textarea.addEventListener('keyup', (e)=>{
    if(e.key != 'Enter'){
        return;
    }
    const textStor =textarea.value.trim();
    localStorage.setItem('value', textStor);
    console.log(localStorage.getItem('value'));
})