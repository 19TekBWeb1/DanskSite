
var linkBox = document.getElementById("References");
function Add_Links(link, title){
    var a = document.createElement('a');
    a.href = link;
    a.title = title;
    a.innerHTML = title;
    a.className = "Generated_a";
    linkBox.appendChild(a);
}
Add_Links("index.html", "Home");
Add_Links("kultur.html", "Culture");
Add_Links("traditions.html", "Traditions");
Add_Links("sights.html", "Sights")