// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// alert('hello!');

// document.querySelector('html').onclick = function() {
//   alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');
let buttonElements = document.getElementsByTagName('button');
let h1Elements = document.getElementsByTagName('h1');
let aElements = document.getElementsByTagName('a');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beaker-logo.png') {
      myImage.setAttribute ('src','images/beaker-logo2.png');
      document.documentElement.style.background = '#016CD8';
      buttonElements[0].style.background='#016CD8';
      h1Elements[0].style.color = '#016CD8';
      for(var i = 0; i < aElements.length; i++) {
        aElements[i].style.color = "#016CD8";
      }

    } else {
      myImage.setAttribute ('src','images/beaker-logo.png');
      document.documentElement.style.background = '#5543FF';
      buttonElements[0].style.background='#5543FF';
      h1Elements[0].style.color = '#5543FF';
      for(var i = 0; i < aElements.length; i++) {
        aElements[i].style.color = "#5543FF";
      }    
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Beaker is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Beaker is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}