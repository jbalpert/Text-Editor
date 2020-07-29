document.getElementById("heading").innerHTML = localStorage["title"] || "";
document.getElementById("term").innerHTML = localStorage["term"] || "";
document.getElementById("definition").innerHTML = localStorage["definition"] || "";

setInterval( () =>{
    localStorage["title"] = document.getElementById("heading").innerHTML;
    localStorage["term"] = document.getElementById("term").innerHTML;
    localStorage["definition"] = document.getElementById("definition").innerHTML;
}, 1000);

