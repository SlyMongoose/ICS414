/**
 * Created by SlyMongoose on 11/8/2015.
 */



var url = document.getElementById("url").value;
var cycleTime = document.getElementById("cycleTime").value;
var range = document.getElementById("range").value;

// potential cycle time function
//myVar = setInterval(myTimer, (cycleTime * 1000));

//function myTimer() {
//    var d = new Date();
//    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
//}

function getInteger(xCoord, yCoord) {
    var homeX = 21.294846;
    var homeY = -157.813323;
    var workX = 21.297614;
    var workY = -157.841039;
    var schoolX = 21.299940;
    var schoolY = -157.819161;
    var queensX = 21.308444;
    var queensY = -157.853346;
    var kaiserX = 21.363877;
    var kaiserY = -157.899807;
    var dangerX = 21.262820;
    var dangerY = -157.824653;
    var a = xCoord;
    var b = yCoord;

    var c = (Math.sqrt(Math.pow(a-homeX,2)+ Math.pow(b-homeY,2)))/1000;
    var d = 0;

    if(c > (Math.sqrt(Math.pow(a-schoolX,2)+ Math.pow(b-schoolY,2))/1000)) {
        c = (Math.sqrt(Math.pow(a-schoolX,2)+ Math.pow(b-schoolY,2)))/1000;
        d = 1;
    }
    if(c > (Math.sqrt(Math.pow(a-workX,2)+ Math.pow(b-workY,2))/1000)) {
        c = (Math.sqrt(Math.pow(a-workX,2)+ Math.pow(b-workY,2)))/1000;
        d = 2;
    }
    if(c > (Math.sqrt(Math.pow(a-queensX,2)+ Math.pow(b-queensY,2))/1000)) {
        c = (Math.sqrt(Math.pow(a-queensX,2)+ Math.pow(b-queensY,2)))/1000;
        d = 3;
    }
    if(c > (Math.sqrt(Math.pow(a-kaiserX,2)+ Math.pow(b-kaiserY,2))/1000)) {
        c = (Math.sqrt(Math.pow(a-kaiserX,2)+ Math.pow(b-kaiserY,2)))/1000;
        d = 4;
    }
    if(c > (Math.sqrt(Math.pow(a-dangerX,2)+ Math.pow(b-dangerY,2))/1000)) {
        c = (Math.sqrt(Math.pow(a-dangerX,2)+ Math.pow(b-dangerY,2)))/1000;
        d = 5;
    }

    if(c > 1) {
        d = 6;
        document.body.style.backgroundColor = "red";
    }

    document.getElementById("answer").innerHTML = d;

    return d;
}

function getCurrentLocation() {
    var a = 6;
    if (navigator.geolocation) {
        a = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("answer").innerHTML = "Geolocation is not supported by this browser.";
    }
    return a;
}

function showPosition(position) {
    var a = getInteger(position.coords.latitude, position.coords.longitude);
    return a;
}

function getNewLocation() {
    var a = getInteger(document.getElementById("xCoord").value, document.getElementById("yCoord").value);
    return a;
}

