let cc = document.getElementById("contentContainer");
cc.style.width = (window.innerWidth*4/5).toString()+"px";
cc.style.height = ((window.innerWidth*4/5)/(1440/732)).toString()+"px";
cc.style.left = (window.innerWidth*1/10).toString()+"px";
class slide {
    constructor() {
        this.toptext = "";
        this.imgurl = "";
        this.bottomtext = "";
        this.toptextsize = 0;
        this.bottomtextsize = 0;
        this.imgsize = 0;
        this.offset = 0;
    }
}
let currentslidenum = 0;
let slidearray = [];
let slide1 = new slide();
slide1.toptext = "Cigarette butts";
slide1.toptextsize = 6;
slide1.bottomtext = "Why they are harmful and what you can do:";
slide1.bottomtextsize = 3;
slide1.imgurl = "Slide1.PNG";
slide1.imgsize = 60;
slide1.offset = 17;
slidearray.push(slide1);
let slide2 = new slide();
slide2.toptext = "Cigarette butts are the most common type of small litter in Canada.";
slide2.toptextsize = 3.7;
slide2.bottomtext = "They account for 50% of the litter in Canada and over half a million were found on the shorelines in 2018.";
slide2.bottomtextsize = 2;
slide2.imgurl = "Slide2.PNG";
slide2.imgsize = 40;
slide2.offset = 17;
slidearray.push(slide2);
let slide3 = new slide();
slide3.toptext = "Cigarette butts are more harmful to the environment than other small litter because they are made up of hundreds of toxic chemicals.";
slide3.toptextsize = 3.5;
slide3.bottomtext = "<a href=https://www.hamad.qa/EN/your%20health/Stop%20Smoking/About-Smoking/Pages/Make-up-of-Cigarettes.aspx>Image source<a>";
slide3.bottomtextsize = 1.5;
slide3.imgurl = "Slide3.PNG";
slide3.imgsize = 53;
slide3.offset = 17;
slidearray.push(slide3);
let slide4 = new slide();
slide4.toptext = "A viable alternative to cigarette butts would reduce the amount of toxic chemicals in the environment.";
slide4.toptextsize = 4;
slide4.imgurl = "Slide4.PNG";
slide4.imgsize = 90;
slide4.offset = 14;
slidearray.push(slide4);
let slide5 = new slide();
slide5.toptext = "Please sign my petition so that the government will consider my proposal to add a $1 fee onto cigarette packs to fund further research into finding a viable alternative to cigarette butts.";
slide5.toptextsize = 2.3;
slide5.bottomtext = "<a href=https://petitions.ourcommons.ca/en/Petition/Sign/e-3258>Link to petition<a>";
slide5.bottomtextsize = 2.5;
slide5.imgurl = "Slide5.PNG";
slide5.imgsize = 90;
slide5.offset = 10;
slidearray.push(slide5); 
// let slide6 = new slide();
// slide6.toptext = "Thank you for watching this presentation and signing my petition!";
// slide6.toptextsize = 3.5;
// slide6.imgurl = "slide6.PNG";
// slide6.imgsize = 45;
// slide6.offset = 10;
// slidearray.push(slide6); 


function displaySlide(slidenum) {
    currentslide = slidearray[slidenum];
    phystoptext = document.createElement("p");
    phystoptext.innerHTML = currentslide.toptext;
    phystoptext.style.fontSize = currentslide.toptextsize.toString()+"vw";
    document.getElementById("TopText").appendChild(phystoptext);
    physimg = document.createElement("img");
    physimg.src = currentslide.imgurl;
    physimg.style.width = ((currentslide.imgsize/100)*parseInt(cc.style.width)).toString()+"px";
    document.getElementById("ImgContainer").style.left = ((100-currentslide.imgsize)/2).toString()+"%";
    document.getElementById("ImgContainer").appendChild(physimg);
    physbottomtext = document.createElement("p");
    physbottomtext.innerHTML = currentslide.bottomtext;
    physbottomtext.style.fontSize = currentslide.bottomtextsize.toString()+"vw";
    document.getElementById("BottomText").appendChild(physbottomtext);
    //topoffset = document.getElementById("TopText").getBoundingClientRect().top;
    //bottomoffset = document.getElementById("BottomText").getBoundingClientRect().top;
    //cc.style.top = currentslide.offset;
    cc.style.top = (((window.innerHeight/2)-(parseInt(cc.style.height))/2)-(currentslide.offset/100)*window.innerHeight).toString()+"px";
    wait = setInterval(function() {
        // document.getElementById("ImgContainer").style.top = ((window.innerHeight/2)-(physimg.naturalHeight*(parseInt(physimg.style.width)/physimg.naturalWidth))/2).toString()+"px";
        // document.getElementById("TopText").style.top = ((((window.innerHeight/2)-(physimg.naturalHeight*(parseInt(physimg.style.width)/physimg.naturalWidth))/2)*1/4)-topoffset).toString()+"px";
        // document.getElementById("BottomText").style.top = ((((window.innerHeight/2)-(physimg.naturalHeight*(parseInt(physimg.style.width)/physimg.naturalWidth))/2)+parseInt(physimg.style.width))-bottomoffset).toString()+"px";
        clearInterval(wait);
    }, 10)
}

function NextSlide() {
    document.getElementById("TopText").innerHTML = '';
    document.getElementById("BottomText").innerHTML = '';
    document.getElementById("ImgContainer").innerHTML = '';
    // document.getElementById("TopText").style.top = "0px";
    // document.getElementById("BottomText").style.top = "100%";
    currentslidenum += 1;
    if (currentslidenum == 4) {
        document.getElementById("next-button").style.display = 'none';
    }
    if (currentslidenum == 1) {
        document.getElementById("prev-button").style.display = 'block';
    }
    displaySlide(currentslidenum)
}
function PrevSlide() {
    document.getElementById("TopText").innerHTML = '';
    document.getElementById("BottomText").innerHTML = '';
    document.getElementById("ImgContainer").innerHTML = '';
    // document.getElementById("TopText").style.top = "0px";
    // document.getElementById("BottomText").style.top = "100%";
    currentslidenum -= 1;
    if (currentslidenum == 0) {
        document.getElementById("prev-button").style.display = 'none';
    }
    if (currentslidenum == 3) {
        document.getElementById("next-button").style.display = 'block';
    }
    displaySlide(currentslidenum)
}
displaySlide(currentslidenum)
