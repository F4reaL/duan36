const humbergerBtn = document.getElementById('humberger');
const mbSidebar = document.getElementById('mb-sidebar');
humbergerBtn.addEventListener('click',function(){
    humbergerBtn.classList.toggle('open')
    mbSidebar.classList.toggle('open')
})