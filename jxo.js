function choos_X_O() {
    document.querySelector(".main_choose_player").classList.add("hidden");
    document.querySelector(".main_choose_X_O").classList.remove("hidden");
    document.querySelector(".playdiv").classList.add("hidden");
}
function go_home() {
    reset();
    document.querySelector(".main_choose_player").classList.remove("hidden");
    document.querySelector(".main_choose_X_O").classList.add("hidden");
    document.querySelector(".playdiv").classList.add("hidden");
}
function go_play() {
    document.querySelector(".main_choose_player").classList.add("hidden");
    document.querySelector(".main_choose_X_O").classList.add("hidden");
    document.querySelector(".playdiv").classList.remove("hidden");
}



var cpu = false;
var multiplayer = false;
var chois = " ";
var xo = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var cpt = 0;
var win = false;
var cptx = 0;
var cpto = 0;
var choisr = " ";


function reset() {
    var r = document.querySelectorAll(".carre");
    for (var i2 = 0; i2 < r.length; i2++) {
        r[i2].innerHTML = " ";
    }
    xo = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    cpt = 0;
    win = false;
    chois = choisr;
}

function case_is_empty(a) {
    if (xo[a] !== " ") return false;
    else return true;
}

function result(){
    document.querySelector(".x").innerText = cptx.toString();
    document.querySelector(".o").innerText = cpto.toString();
}

document.querySelector(".but1").onclick=()=>{
    cpu = true;
    multiplayer = false;
    choos_X_O();
}
document.querySelector(".but2").onclick=()=>{
    cpu = false;
    multiplayer = true;
    choos_X_O();
}
document.querySelector(".but3").onclick=()=>{
    chois = "X";
    choisr = chois;
    go_play();
}
document.querySelector(".but4").onclick=()=>{
    chois = "O";
    choisr = chois;
    go_play();
}
document.querySelectorAll(".but5")[0].onclick = () => {
    cpto = 0;
    cptx = 0;
    result();
    go_home();
}
document.querySelectorAll(".but5")[1].onclick = () => {
    cpto = 0;
    cptx = 0;
    result();
    go_home();
}
document.querySelector(".but6").onclick = () => {
    cpto = 0;
    cptx = 0;
    result();
    reset();
}



for (let j1 = 0; j1 < 9; j1++) {
    document.querySelectorAll(".carre")[j1].onclick=()=>{
        if (case_is_empty(j1) ) {
            playmultiplayer(j1);
            setTimeout(() => {
                return winner();
            }, 500);
            setTimeout(() => {
                return playcpu();
            },500);
            setTimeout(() => {
            if (win === true) reset();   
            }, 500);
        }
        else alert(" Case already toking !");
    }
}



function winner() {
    var matric1 = [[xo[0], xo[1], xo[2]], [xo[3], xo[4], xo[5]], [xo[6], xo[7], xo[8]]];
    var matric2 = [[xo[0], xo[3], xo[6]], [xo[1], xo[4], xo[7]], [xo[2], xo[5], xo[8]]];
    var l1 = matric1[0].join("").toString();
    var l2 = matric1[1].join("").toString();
    var l3 = matric1[2].join("").toString();
    var c1 = matric2[0].join("").toString();
    var c2 = matric2[1].join("").toString();
    var c3 = matric2[2].join("").toString();
    var d1 = (matric1[0][0] + matric1[1][1] + matric1[2][2]).toString();
    var d2 = (matric1[0][2] + matric1[1][1] + matric1[2][0]).toString();
    var tableau = [l1, l2, l3, c1, c2, c3, d1, d2];
    var winx = false;
    var wino = false;
    var pr = 0;
    while (winx === false && wino === false && pr < 8) {
        if (tableau[pr] === "XXX") winx = true;
        else if (tableau[pr] === "OOO") wino = true;
        else pr = pr + 1;
    }
    if (winx === true) {
        win = true;
        alert(" X win !!");
        cptx += 1;
        result();
        win = true;
        return false;
    } else if (wino === true) {
        win = true;
        alert(" O win !!");
        cpto += 1;
        result();
        win = true;
        return false;
    } else if (wino===false && winx===false && cpt===9) {
        win = true;
        alert(" No one win !!");
        win = true;
        return false;
    }else return false;
}


function playmultiplayer(a) {
    document.querySelectorAll(".carre")[a].innerHTML = "<p>" + chois + "</p>";
    xo[a] = chois;
    if (chois === "X") chois = "O";
    else chois = "X";
    cpt = cpt + 1;
    return false;
}

function playcpu() {
    if (cpu === true && cpt < 9 && win === false) {
        var rand = Math.floor(Math.random() * 9);
        while (!case_is_empty(rand)) {
            var rand = Math.floor(Math.random() * 9);
        }
        var interm = chois;
        cpt = cpt + 1;
        document.querySelectorAll(".carre")[rand].innerHTML = "<p>" + interm + "</p>";
        xo[rand] = chois;
        if (chois === "X") chois = "O";
        else chois = "X";
        setTimeout(() => {
            setTimeout(() => {
                if (win === true) reset();
            }, 500);
            return winner();
        }, 500);
    }
    return false;
}









