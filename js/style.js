console.log(document);


//style change by js

const sections=document.querySelectorAll("section");
for(const section of sections){
    section.style.border="2px solid red";
    section.style.marginTop="5px";
    section.style.borderRadius="15px";
    section.style.paddingLeft="7px";
    section.style.paddingRight="7px";
}

const newStyle=document.getElementById('first').classList;

newStyle.add('title');

const myBoy=document.getElementsByClassName('one');
for(const Boy of myBoy){
    Boy.style.color="red";
}


//DOM nodes


const myPlaces=document.getElementById('dom');

// console.log(myPlaces.firstChild);
// console.log(myPlaces.childNodes);
// console.log(myPlaces.childNodes);
//console.log(myPlaces.isConnected);

console.log(myPlaces.firstElementChild);

