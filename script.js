const btn  = document.getElementById('menubtn')
const nav = document.getElementById('menu');



btn.addEventListener('click',()=>{
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})