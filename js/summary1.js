const hit=document.getElementById("main-container"); //id diye khuja hoi....class,tagName,Id diye khuja hoi


const ahsan=document.createElement("section");
ahsan.innerHTML=`

<h1>My Name is Ahsan</h1>

<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>

`  //innerHtml diye evabe puro HTML dhukanu jai
hit.appendChild(ahsan); // Notun Element js diye dhukanu  jai

//style by JS
ahsan.style.backgroundColor="red";
ahsan.style.fontWeight="bold";
ahsan.style.textAlign="center";