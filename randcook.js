    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var num=getCookie("number");
    if (num == "") {       
    	num = Math.floor((Math.random() * 10) + 1);
           setCookie("number", num, 1);
    }
  document.getElementById("demo").innerHTML = num
}
