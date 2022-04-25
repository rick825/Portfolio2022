const ham=()=>{
  const ham= document.querySelector('.ham');
  const navitem = document.querySelectorAll('.navitem');
  const backblack = document.querySelector('.backblack');
  var i,j;
  ham.addEventListener('click',()=>{
 for(i = 0; i < navitem.length;i++){
   navitem[i].classList.toggle('navshow');
}
   backblack.classList.toggle('backblackshow');
  });
}

ham();