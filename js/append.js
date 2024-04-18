var sec=document.getElementById('first');
var newName=document.createElement('h1');
newName.innerText='This is Last Option';

//append
sec.appendChild(newName);
newName.style.color='red';


//attribute
var myjob=document.createAttribute('class');
myjob.value='title';
newName.setAttributeNode(myjob);


//add element by innerHTML
var newSection=document.getElementById('main-container');
console.log(newSection);

var ahsan=document.createElement('section');
ahsan.innerHTML=`
<h1>This My Blog Section</h1>
<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>
`

newSection.appendChild(ahsan);