const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')

setTimeout(function(){one.setAttribute("style", "visibility: visible")}, 1000);
setTimeout(function(){two.setAttribute("style", "visibility: visible")}, 2000);
setTimeout(function(){three.setAttribute("style", "visibility: visible")}, 3000);
setTimeout(function(){four.setAttribute("style", "visibility: visible")}, 4000);
setTimeout(function(){five.setAttribute("style", "visibility: visible")}, 5000);
setTimeout(function(){six.setAttribute("style", "visibility: visible")}, 6000);
setTimeout(function(){six.setAttribute("style", "visibility: hidden")}, 7000);
setTimeout(function(){five.setAttribute("style", "visibility: hidden")}, 8000);
setTimeout(function(){four.setAttribute("style", "visibility: hidden")}, 9000);
setTimeout(function(){three.setAttribute("style", "visibility: hidden")}, 10000);
setTimeout(function(){two.setAttribute("style", "visibility: hidden")}, 11000);
setTimeout(function(){one.setAttribute("style", "visibility: hidden")}, 12000);
