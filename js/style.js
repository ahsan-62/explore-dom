console.log(document);

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
