window.onload = function(){
  document.querySelector(".menuMobile").addEventListener("click", function(){
  if(document.querySelector(".menu nav ul").style.display == 'flex'){
      document.querySelector(".menu nav ul").style.display = 'none'
  }else{
      document.querySelector(".menu nav ul").style.display = 'flex'
  }
});
}


var radio = document.querySelector('.manual-btn');
var cont = 1
rolar = true

document.querySelector('#radio1').checked = true;

let radio1 = document.querySelector('#radio1')
radio1.addEventListener('click', () => {
    cont = 1
    rolar = false
})
let radio2 = document.querySelector('#radio2')
radio2.addEventListener('click', () => {
    cont = 2
    rolar = false
})
let radio3 = document.querySelector('#radio3')
radio3.addEventListener('click', () => {
    cont = 3
    rolar = false
})
let radio4 = document.querySelector('#radio4')
radio4.addEventListener('click', () => {
    cont = 4
    rolar = false
})

setInterval(() => {
    previousImg()
}, 5000)

function previousImg(){
    cont++
    if(cont >4){
        cont = 1
    }
    document.querySelector('#radio'+cont).checked = true;
        
}