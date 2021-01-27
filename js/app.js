let loadBgC = "";
let loadC = "";
let loadSrc = "";
(function(){
    
    loadBgC = localStorage.getItem("bgColor");
    loadC = localStorage.getItem("color");
    loadSrc = "url('"+localStorage.getItem("photoSrc")+"')";
    
    
    
    if(loadBgC != "")
    $("body").css("backgroundColor",loadBgC);
    
    if(loadC != "")
    $("body").css("color",loadC);
    
    if(localStorage.getItem("photoSrc"))
    $("#home").css("backgroundImage",loadSrc);
    
}());

let eee = $("#colors-options");
$("#options i").click(function(){
    $(eee).toggle(200);
})

$("#colors-options #bg li").eq(0).css("backgroundColor","#6610f2")
$("#colors-options #bg li").eq(1).css("backgroundColor","#fff")
$("#colors-options #bg li").eq(2).css("backgroundColor","#161616")
$("#colors-options #bg li").eq(3).css("backgroundColor","#777")
$("#colors-options #bg li").eq(4).css("backgroundColor","rgba(230, 97, 97,0.5)")
$("#colors-options #color li").eq(0).css("backgroundColor","#fff")
$("#colors-options #color li").eq(1).css("backgroundColor","#777")
$("#colors-options #color li").eq(2).css("backgroundColor","#000")

let lis = $("#colors-options #bg li");

for(var i=0; i<lis.length;i++)
    lis[i].addEventListener("click",function(){
      
        let bgC = $(this).css("backgroundColor");
        
        localStorage.setItem("bgColor",bgC);
    
        if(bgC != "#fff")
            $("body").css("backgroundColor",bgC);
        else
            $("body").css("backgroundColor","transparent");
        
})

let lis2 = $("#colors-options #color li");

for(var i=0;i<lis2.length;i++)
    {
        lis2[i].addEventListener("click",function(){
            localStorage.setItem("color",$(this).css("backgroundColor"));
            $("body").css("color",$(this).css("backgroundColor"));
        })
    }

let photos = $("#photo li img");

for(var i=0 ; i<photos.length;i++)
    {
        photos[i].addEventListener("click",function(){
            localStorage.setItem("photoSrc",$(this).attr("src"));
            $("#home").css("backgroundImage","url('"+$(this).attr("src")+"')");
            $("#home").css("backgroundSize","100% 100%");
        })
    }

$(window).scroll(function(){
    
    let top = $(window).scrollTop();
    
        if(top >= $("#chef").offset().top)
        $("nav").css("backgroundColor","rgba(0,0,0,0.6)");
    else
        $("nav").css("backgroundColor","transparent");
 
    if(top >= $("#chef").offset().top)
        $("#iHome").show(500);
    else 
        $("#iHome").hide(500);
    
})

$("#iHome").click( function(){
    $("body,html").animate({scrollTop:0},500);
})


$("nav a").click(function(){
    let href = $(this).attr("href");
    
    let top = $(href).offset().top;
    
    if(href != "#developer")
    $("body,html").animate({scrollTop:top},500);
    
})


$(document).ready(function()
{
    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow","auto");
    });
})

$("#chef button").click(function(){
    $("body,html").animate({scrollTop:$("#bgAttachment").offset().top},1000);
})


$("nav ul li a[href='#developer']").click(function(){
    $("body,html").animate({scrollTop:$("#developer").offset().top},1000,function(){
        $("#shadow").css("boxShadow","0px 0px 20px rgba(0,0,255,0.5)");
    })
})

$(document).click(function(){
            $("#shadow").css("boxShadow","0px 0px 5px rgba(0,0,255,0.3)");
})

const burger = document.querySelector('.burger');
const navUl = document.querySelector('nav ul');
const navLi = document.querySelectorAll('nav ul li');
const navA = document.querySelectorAll('nav ul li a');

burger.addEventListener('click',function() {
    navUl.classList.toggle('open');
    
    navLi.forEach(e => {
        e.classList.toggle('my-fade');
    })
});

$(navA).click(function()
{
    navUl.classList.remove('open');
    $(navLi).removeClass('my-fade');
});

