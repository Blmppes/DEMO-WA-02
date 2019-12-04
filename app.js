var obj = document.getElementById("header");
var count = 0;
var searchInput = document.getElementsByClassName("searchInput")[0];
var searchButton = document.getElementsByClassName("searchButton")[0];
var suggestion = document.getElementsByClassName("suggestion");
var intro1 = document.getElementById("intro1");
var intro2 = document.getElementById("intro2");
var container = document.getElementById("container");
var body = document.getElementsByTagName("body")[0];
var sendButton = document.getElementById("sendButton");
var games = ["assasin's creed","far cry 5","gta 5","watch dogs 2","aaaaa","fffff","gggg","wwwww","playerunknown's battlegrounds","call of duty: modern warfare"]
var data_js = {
    "access_token": "u1n1ox2uwypehgmgof9cw17h"
};
count_lang = 0;

window.onload = () =>{
    intro1.style.transition = "1s";
    intro2.style.transition = "1s";
    intro1.style.left = "0%";
    intro2.style.right = "0%";
};
function unintro(){
    container.style.display = "block";
    intro1.style.left = "100%";
    intro2.style.right = "100%";
    setTimeout(() => {
        intro1.style.display = "none";
        intro2.style.display = "none";
        body.style.overflow = "auto";
        $("#languages").css("display","block");
        $("#arr").css("display","block");
    },900);    
}
setInterval(() => {
    count += 1;
    if(count >= 5){
        count = 0;
    }
    if(count == 0){
        obj.style.background = "url('images-main/assasin creed.jpg')";
        obj.style.backgroundRepeat = "no-repeat";
        obj.style.backgroundSize = "cover";
    }else if(count == 1){
        obj.style.background = "url('images-main/gta 5.jpg')";
        obj.style.backgroundRepeat = "no-repeat";
        obj.style.backgroundSize = "cover";
    }else if(count == 2){
        obj.style.background = "url('images-main/far cry5.jpg')";
        obj.style.backgroundRepeat = "no-repeat";
        obj.style.backgroundSize = "cover";
    }else if(count == 3){
        obj.style.background = "url('images-main/watch dogs 2.jpg')";
        obj.style.backgroundRepeat = "no-repeat";
        obj.style.backgroundSize = "cover";
    }
    else if(count == 4){
        obj.style.background = "url('images-main/call of duty.jpg')";
        obj.style.backgroundRepeat = "no-repeat";
        obj.style.backgroundSize = "cover";
    }
},5000);

function suggest(){
    for(var i = 0; i < 5; i++){
        document.getElementById("suggestion"+String(i+1)).innerHTML = "";
        document.getElementById("suggestion"+String(i+1)).style.display = "none";
    }
    var count = 0;
    for(var i = 0; i < games.length; i++){
        if(searchInput.value.toLowerCase() != ""){
            if(games[i].substr(0, searchInput.value.length) == searchInput.value.toLowerCase()){
                count += 1;
                document.getElementById("suggestion"+String(count)).style.display = "block";
                document.getElementById("suggestion"+String(count)).innerHTML = games[i];
                document.getElementById("suggestion"+String(count)).style.backgroundColor = 'white';
            }
            if(count >= 5){
                break;
            }
        }
    }
}
function fill_blank(suggestionip){
    var s = "suggestion"+suggestionip;
    var b = document.getElementById(s).innerHTML;
    if(b != ""){
        searchInput.value = b;
    }
}

function changeSearchBar(){
    searchInput.style.width =  "300px";
    searchInput.style.padding = "0 6px";
    searchButton.style.background = "white";
    searchButton.style.color = "#2f3640";
}

function search(){
    console.log(searchInput.value);
    if(searchInput.value == "assasin's creed"){
        window.open("http://127.0.0.1:5500/assassins-creed.html");
    }else if(searchInput.value == "far cry 5"){
        window.open("http://127.0.0.1:5500/game1.html");
    }else if(searchInput.value == "gta 5"){
        window.open("http://127.0.0.1:5500/game1.html");
    }else if(searchInput.value == "watch dogs 2"){
        window.open("http://127.0.0.1:5500/game1.html");
    }else if(searchInput.value == "playerunknown's battlegrounds"){
        window.open("http://127.0.0.1:5500/A.PUBG.html");
    }
}

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
    if($(this).scrollTop() > 700 && $(this).scrollTop() < 1600){
        $("#inner-trailer video").get(0).play();
    }else{
        $("#inner-trailer video").get(0).pause();
    }
    if($(this).scrollTop() > 350){
        $(".topnav").css({"position":"fixed","top":"0px","opacity":".8"});
        $("#arr").css({"position":"fixed","top":"10px","opacity":".8"});
        $("#languages").css({"position":"fixed","top":"10px","opacity":".8"});
        $(".searchBox").css({"position":"fixed","top":"-30px","left": "355px","opacity":".8"});
        $(".searchInput").css({"width": "300px","padding": "0 6px"});
        $(".searchButton").css({"background-color":"#2f3640","color":"white"});
        $("#suggest-container").css({"position":"fixed","top":"60px","left": "170px","opacity":".8"});
        $("#header img").css({"position":"fixed","top":"-50px","left":"-70px","width":"175px","height":"55px","z-index":"1"});
    }else{
        $(".topnav").css({"position":"absolute","top":"70px","right":"70px","opacity":"1"});
        $("#arr").css({"position":"absolute","top":"80px","right":"20px","opacity":"1"});
        $("#languages").css({"position":"absolute","top":"80px","right":"20px","opacity":"1"});
        $(".searchBox").css({"position":"absolute","top":"60%","left":"51%","opacity":"1"});
        $(".searchButton").css({"background-color":"#2f3640","color":"white"});
        $("#suggest-container").css({"position":"absolute","top":"450px","left": "510px","opacity":"1"});
        $("#header img").css({"position":"unset","width":"235px","height":"90px","margin":"50px 70px"});
        $(".searchInput").css({"width": "0px","padding": "0px"});
        $("#suggestion1").css("display","none");
        $("#suggestion2").css("display","none");
        $("#suggestion3").css("display","none");
        $("#suggestion4").css("display","none");
        $("#suggestion5").css("display","none");
    }
});
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},700);
    return false;
});
function change_video(game){
    if(game == "GTA 5"){
        $("#inner-trailer video").attr("src","videos/Grand Theft Auto V Official Gameplay Video (online-video-cutter.com).mp4");
        $("#inner-trailer video").get(0).play();
        $("#trailer h2").text("GTA 5");
    }else if(game == "Assasins Creed"){
        $("#inner-trailer video").attr("src","videos/Assassin’s Creed Syndicate Cinematic Trailer FULL Cinematic Trailer.mp4");
        $("#inner-trailer video").get(0).play();
        $("#trailer h2").text("Assasins Creed");
    }else if(game == "Call Of Duty"){
        $("#inner-trailer video").attr("src","videos/Official Call of Duty® Modern Warfare® - Reveal Trailer.mp4");
        $("#inner-trailer video").get(0).play();
        $("#trailer h2").text("Call Of Duty");
    }else if(game == "Playerunknowns Battlegrounds"){
        $("#inner-trailer video").attr("src","videos/PUBG - Sanhok Trailer (New Map).mp4");
        $("#inner-trailer video").get(0).play();
        $("#trailer h2").text("Playerunknowns Battlegrounds");
    }else if(game == "Watch Dogs 2"){
        $("#inner-trailer video").attr("src","videos/Watch Dogs 2 Trailer Cinematic Reveal - E3 2016  Ubisoft [NA].mp4");
        $("#inner-trailer video").get(0).play();
        $("#trailer h2").text("Watch Dogs 2");
    }else if(game == "Far cry 5"){
        $("#inner-trailer video").attr("src","videos/Far Cry 5 Launch Gameplay Trailer Ubisoft [NA] (online-video-cutter.com).mp4");
        $("#inner-trailer video").get(0).play();
        $("#trailer h2").text("Far cry 5");
    }else if(game == "Minecraft"){
        $("#inner-trailer video").attr("src","videos/Village  Pillage Official Trailer.mp4");
        $("#inner-trailer video").get(0).play();
        $("#trailer h2").text("Far cry 5");
    }
}
function js_send() {
    sendButton.value='Sending…';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();

    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#text-content").value;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
    alert("Sended! Thanks for your feedback, we will response to you soon!")
    return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}
function scrolltopart(name){
    if(name == "home"){
        $('html, body').animate({scrollTop : 0},700);
        return false;
    }else if(name == "most-popular"){
        $('html, body').animate({scrollTop :635},700);
        return false;
    }else if(name == "trailer"){
        $('html, body').animate({scrollTop : 1170},700);
        return false;
    }else if(name == "contact"){
        $('html, body').animate({scrollTop : 1690},700);
        return false;
    }
}
function show_languages(){
    if(count_lang % 2 == 0){
        if($(window).scrollTop() > 100){
            $("#languages").css("height","236px");
            $("#arr").attr("class","fas fa-sort-up");
            $("#arr").css("top","17px");
        }else{
            $("#languages").css("height","236px");
            $("#arr").attr("class","fas fa-sort-up");
            $("#arr").css("top","87px");
        }
    }else{
        if($(window).scrollTop() > 100){
            $("#languages").css("height","32px");
            $("#arr").attr("class","fas fa-sort-down");
            $("#arr").css("top","10px");
        }else{
            $("#languages").css("height","32px");
            $("#arr").attr("class","fas fa-sort-down");
            $("#arr").css("top","80px");
        }
    }
    count_lang+=1;
}