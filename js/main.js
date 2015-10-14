$(document).ready(
    function() {
        iconsGrid();
        openApps();
    }
);

var apps = [
    "apps",
    "calculator",
    "calendar",
    "camera",
    "contacts",
    "drive",
    "email",
    "facebook",
    "files",
    "firefox",
    "games",
    "googleplay",
    "messages",
    "music",
    "phone",
    "pictures",
    "settings",
    "spotify",
    "video",
    "whatsapp",
    "wifi",
    "youtube"];

function iconsGrid() {
    var htmlTemplate = document.querySelector('#gridItem');
    var host = document.querySelector("#iconSection");
    for(i = 0; i < apps.length; i++) {
        var clone = document.importNode(htmlTemplate.content, true);
        $(clone.children[0]).attr("id", apps[i]);
        $(clone.children[0].children[0]).attr(
            {
              src: "img/" + apps[i] + ".png",
              alt: apps[i]
            });
        $(clone.children[0].children[1]).text(apps[i]);
        host.appendChild(clone);
    }
}

function openApps() {
   $("#iconSection").find("li").each(
       function() {
            $(this).click(
                function() {
                    var nameWindow = $(this).attr("id");
                    if($("#window"+ nameWindow).length == 0){
                        var windowTemplate =  document.querySelector("#ventana");
                        var barTemplate = document.querySelector("#barTemplate");
                        var cloneWindow = document.importNode(windowTemplate.content, true);
                        var cloneBar = document.importNode(barTemplate.content, true); 
                        var host = document.querySelector("#mainDashboard");
                        $(cloneWindow.children[0]).attr("id", "window" + nameWindow);
                        $(cloneBar.children[0]).attr("src", 'img/'+ nameWindow +'.png');
                        $(cloneBar.children[1]).text(nameWindow);
                        $(cloneWindow.children[0].children[0]).html(cloneBar);
                        $(cloneWindow.children[0].children[1]).html('<img src="img/'+ nameWindow +'.png">');
                        host.appendChild(cloneWindow);
                        toolbarActions(nameWindow);
                    }
            });
       });
}
function toolbarActions(nameWindow) {
    var ref = $("#window"+ nameWindow);
    $("#window"+ nameWindow +" .close").click(
        function(){
            ref.remove()
        });
    $("#window"+ nameWindow +" .min").click(
        function(){
            ref.addClass("minimized");
        });
}
