//Show Side Nav.
function showSideNav() {
    var side = document.getElementById("sidenav");
    side.style.display = ("block");
}
//hide side nav.
function hideSideNav() {
    var side = document.getElementById("sidenav");
    side.style.display = ("none");
}
//Show Search
function showSearch() {
    alert("This Function Isn't Available Yet ,This Will Be Enabled When More Projects Are Hosted.");
}
//Show Settings
function showSettings(){
    var dialog = document.getElementById("settings");
    dialog.style.display = ("block");
}
function closeIt() {
    var dialog = document.getElementById("settings");
    dialog.style.display = ("none");
}
function toggleAnimations() {
    var switcher = document.getElementById("animationSwitch");
    if( switcher.checked ) {
        allAnimations();
    } else {
        noAnimations();
    }
}
function toggleSound() {
    var sound = document.getElementById("sound");
    var switcher = document.getElementById("soundSwitch");
    if( switcher.checked ) {
        sound.volume = 1;
    } else {
        sound.volume = 0;
    }
}
//Loading Script __________________________
window.setTimeout(function loader() { var loading = document.getElementById("loading");
loading.style.display = ("none")},2800);
loader();
//________________________________
//Show and hide the text under the topper div __________
function show1() {
    var span1 = document.getElementById("span1");
    span1.style.display = ("block");
}
function show2() {
    var span2 = document.getElementById("span2");
    span2.style.display = ("block");
}
function show3() {
    var span3 = document.getElementById("span3");
    span3.style.display = ("block");
}
function hide1() {
    var span1 = document.getElementById("span1");
    span1.style.display = ("none");
}
function hide2() {
    var span2 = document.getElementById("span2");
    span2.style.display = ("none");
}
function hide3() {
    var span3 = document.getElementById("span3");
    span3.style.display = ("none");
}
//________________________
// Dialog SCRIPT.
//To Close It.
function hideThisDialog() {
document.getElementById('dialog').close();
}
//To Reduce Animations.
function noAnimations() {
var element1 = document.getElementById("welcome");
var img = document.getElementById("imgpc");
var boxer= document.getElementById("boxing");
var clouds = document.getElementById("clouds");
var check = document.getElementById("animationSwitch").click();
clouds.style.display = ("none");
boxer.style.animationName = ("none");
boxer.style.backgroundImage = ("none");
boxer.style.backgroundImage = ("#213")
img.style.animationName = ("none");
element1.style.animationName = ("none");
var dialog = document.getElementById("dialog");
dialog.close();
}
//to bring back animations if needed
function allAnimations() {
var element1 = document.getElementById("welcome");
var img = document.getElementById("imgpc");
var boxer= document.getElementById("boxing");
var clouds = document.getElementById("clouds");
element1.style.animationName = ("leftToRight");
clouds.style.display = ("block");
boxer.style.animationName = ("bg-spin");
boxer.style.backgroundImage = ("conic-gradient(from var(--border-angle),#213,#112 50%,#213),conic-gradient(from var(--border-angle),transparent 20%,#08f,#f03)");
img.style.animationName = ("float");
}
//Computer Script Which show The Animation of Blur after clicking send Button.And Shows the notification.
function closeMessage() {
var btn = document.getElementById("butt");
var input = document.getElementById("message");
var message = document.getElementById("message").value;
let note = document.getElementById("hismessage");
var text = document.getElementById("groundtext");
var notification = document.getElementById("notification");
var computer = document.getElementById("computer");
var sound = document.getElementById("sound");
input.style.transition = ("2s");
input.style.filter = ("blur(1500px)");
text.style.display = ("block");
setTimeout(function() {input.style.display = ("none");btn.style.display =("none");text.style.filter = ("none");text.style.transition = ("2s");},2000);
note.innerText = "Visitor : " +  message;
notification.style.transform = ("translateY(0%)");
notification.style.transition = ("1s");
sound.play();
setTimeout(function() {notification.style.display = ("none")},5000);
}
//------
//Text shadow follow mouse.
var mouse = {x: 0, y: 0};
var h1 = document.querySelector('#addtext');

document.addEventListener('mousemove', function(e){ 
mouse.x = e.clientX || e.pageX; 
mouse.y = e.clientY || e.pageY;
var posX = parseInt((mouse.x) - (window.innerWidth / 4));
var posY = parseInt((mouse.y) - (window.innerHeight / 10));
h1.style.filter = "drop-shadow(" + posX/-100+"px " + posY/-100+"px 1px #0091dc)";
}, false);
//--------------------------
//Rating stars.
function rateVeryBad() {
    var star = document.getElementById("star1");
    var rating = document.getElementById("rating");
    
    rating.innerText = ("Very Bad");
}
function rateBad() {
    var star = document.getElementById("star2");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Bad");
}
function rateOrdinary() {
    var star = document.getElementById("star3");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Ordinary");
}
function rateGood() {
    var star = document.getElementById("star4");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Good");
}
function rateExcellent() {
    var star = document.getElementById("star5");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Excellent");
}
//Show thanks after submitting the rating.
function showThanks() {
    var rateform = document.getElementById("rateform");
    rateform.style.transition = ("1s");
    rateform.style.transform = ("translate(1000px");
    var tnks = document.getElementById("tnks")
    setTimeout( function() {rateform.style.display = ("none");tnks.innerText = "Thank You For Your Feedback."},1700);
    var under = document.getElementById("finish");
    setTimeout(function() {under.style.top = ("25%")},1000);
    
}
//show text under the socials buttons..
function showCaption1() {
    var caption = document.getElementById("ppm");
    caption.style.color = ("white");
}
function showCaption2() {
    var caption = document.getElementById("ppf");
    caption.style.color = ("white");
}
function showCaption3() {
    var caption = document.getElementById("ppi");
    caption.style.color = ("white");
}
function showCaption4() {
    var caption = document.getElementById("ppt");
    caption.style.color = ("white");
}
function showCaption5() {
    var caption = document.getElementById("ppg");
    caption.style.color = ("white");
}
//on mouse out hide the text under socials.
function hideCaption() {
    var caption1 = document.getElementById("ppm");
    caption1.style.color = ("rgb(12, 12, 34)");
    var caption2 = document.getElementById("ppt");
    caption2.style.color = ("rgb(12, 12, 34)");
    var caption3 = document.getElementById("ppf");
    caption3.style.color = ("rgb(12, 12, 34)");
    var caption4 = document.getElementById("ppg");
    caption4.style.color = ("rgb(12, 12, 34)");
    var caption5 = document.getElementById("ppi");
    caption5.style.color = ("rgb(12, 12, 34)");
}