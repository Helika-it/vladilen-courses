let name;

if (localStorage.getItem('my-name')){
  name = localStorage.getItem('my-name');
}else {
  name = prompt('Как вас зовут?');
  localStorage.setItem('my-name', name);
}

document.querySelector('h3').textContent = 'Привет, ' + name;
document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString();
setInterval(function(){
  document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString();
}, 1000)

// const colors = ['#8a2be2', '#6495ed', '#5f9ea0', '#7fff00', 'coral', 'indigo'];
// let index = 0;

// document.querySelector('button').onclick = function(){
//   document.body.style.background = colors[index];
//   index++;
//   if (index >= colors.length) {
//     index = 0;
//   }
// }

let backgrounds;
document.querySelector('button').onclick = function(){
  console.log('click')
  backgrounds = 'url("https://source.unsplash.com/1600x900/?nature") center no-repeat';
  document.body.style.background = backgrounds;

}