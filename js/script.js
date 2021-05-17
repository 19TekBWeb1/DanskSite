
var linkBox = document.getElementById("References");
function Add_Links(link, title){
    var a = document.createElement('a');
    a.href = link;
    a.title = title;
    a.appendChild(title);
    linkBox.appendChild(a);
}
Add_Links("kultur.html", "Culture")