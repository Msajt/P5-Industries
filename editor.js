
function showPreview(){
    var content = "";
    var contentScripts = "";
    content += "<style>" + document.getElementById("csseditor").innerText + "<\/style>";
    content += "<script>" + document.getElementById("jseditor").innerText + "<\/script>";
    content += "<body>" + document.getElementById("htmleditor").innerText + "<\/script>";
    
    contentScripts = "<head>" + 
                     "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js'><\/script>" + 
                     "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.js'><\/script>" +
                     "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.js'><\/script>" +
                     "<script src='https://cdn.jsdelivr.net/gh/molleindustria/p5.play@master/lib/p5.play.js'><\/script>" +
                     "<\/head>";

    document.getElementById("preview").src = "data:text/html; charset=UTF-8, <html>" + contentScripts + content + "<\/html>";   
}

function openEditor(editorName){
    var i;
    var x = document.getElementsByClassName("editor");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(editorName).style.display = "block";
}