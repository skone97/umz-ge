
const m=document.querySelector('.menu'), l=document.querySelector('.links');
if(m&&l)m.addEventListener('click',()=>l.classList.toggle('open'));
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Das Formular ist vorbereitet. Für den Live-Versand muss noch das Backend verbunden werden.');}));
