var time=setTimeout("bg1()",1);
function bg1()
{
document.getElementById("body").background="Data/bg1.jpg";
document.getElementById("body").style="background-attachment:fixed;";
document.getElementById("body").style.backgroundRepeat="no-repeat";
document.getElementById("body").style.backgroundSize="100% 100%";
var time=setTimeout("bg2()",4000);
}
function bg2()
{
document.getElementById("body").background="Data/bg2.jpg";
document.getElementById("body").style="background-attachment:fixed;";
document.getElementById("body").style.backgroundRepeat="no-repeat";
document.getElementById("body").style.backgroundSize="100% 100%";
var time=setTimeout("bg3()",4000);
}
function bg3()
{
document.getElementById("body").background="Data/bg3.jpg";
document.getElementById("body").style="background-attachment:fixed;";
document.getElementById("body").style.backgroundRepeat="no-repeat";
document.getElementById("body").style.backgroundSize="100% 100%";
var time=setTimeout("bg4()",4000);
}
function bg4()
{
document.getElementById("body").background="Data/bg4.jpg";
document.getElementById("body").style="background-attachment:fixed;";
document.getElementById("body").style.backgroundRepeat="no-repeat";
document.getElementById("body").style.backgroundSize="100% 100%";
var time=setTimeout("bg5()",4000);
}
function bg5()
{
document.getElementById("body").background="Data/bg5.jpg";
document.getElementById("body").style="background-attachment:fixed;";
document.getElementById("body").style.backgroundRepeat="no-repeat";
document.getElementById("body").style.backgroundSize="100% 100%";
var time=setTimeout("bg6()",4000);
}
function bg6()
{
document.getElementById("body").background="Data/bg6.jpg";
document.getElementById("body").style="background-attachment:fixed;";
document.getElementById("body").style.backgroundRepeat="no-repeat";
document.getElementById("body").style.backgroundSize="100% 100%";
var time=setTimeout("bg1()",4000);
}


function dropdown()
{
if(frm.slt.selectedIndex==1)
home_clk()

else if(frm.slt.selectedIndex==2)
gadgets_clk()

else if(frm.slt.selectedIndex==3)
future_tech_clk()
}



function drp()
{
frm.slt.selectedIndex=0;
}




function home_clk()
{
home_iframe.scrollIntoView({behavior:'smooth'});
frm.slt.selectedIndex=0;
home()
}
function gadgets_clk()
{
gadgets_iframe.scrollIntoView({behavior:'smooth'});
frm.slt.selectedIndex=0;
gadgets()
}
function future_tech_clk()
{
future_tech_iframe.scrollIntoView({behavior:'smooth'});
frm.slt.selectedIndex=0;
future_tech()
}

function profile_clk()
{
profile_iframe.scrollIntoView({behavior:'smooth'});
frm.slt.selectedIndex=0;
profile()
}

function home()
{
document.getElementById("home").className="active_mid";
document.getElementById("gadgets").className="mid";
document.getElementById("future_tech").className="mid";
document.getElementById("tech_gallery").className="mid";
document.getElementById("profile").className="mid";
}
function gadgets()
{
document.getElementById("home").className="mid";
document.getElementById("gadgets").className="active_mid";
document.getElementById("future_tech").className="mid";
document.getElementById("tech_gallery").className="mid";
document.getElementById("profile").className="mid";
}
function future_tech()
{
document.getElementById("home").className="mid";
document.getElementById("gadgets").className="mid";
document.getElementById("future_tech").className="active_mid";
document.getElementById("tech_gallery").className="mid";
document.getElementById("profile").className="mid";
}
function profile()
{
document.getElementById("home").className="mid";
document.getElementById("gadgets").className="mid";
document.getElementById("future_tech").className="mid";
document.getElementById("tech_gallery").className="mid";
document.getElementById("profile").className="active_mid";
}




function login_menu()
{
document.getElementById("signup").style.display="none";
document.getElementById("login").style.display="inline";
document.getElementById("login_menu").className="signup_menu";
document.getElementById("signup_menu").className="login_menu";
}
function signup_menu()
{
document.getElementById("signup").style.display="inline";
document.getElementById("login").style.display="none";
document.getElementById("signup_menu").className="signup_menu";
document.getElementById("login_menu").className="login_menu";
}



var err_n=0;
function form_blur()
{
var val=frm.name.value.toUpperCase();
var nam=document.getElementById("name");
var c=0;
var cc1=val.charCodeAt(0);
if(cc1>0)
{
for(var i=0;i<val.length;i++)
{
var cc=val.charCodeAt(i);
if(cc>90&&cc!=32 || cc<65&&cc!=32)
c++;
}
if(c!=0)
{
nam.innerHTML="<font color=red>Invalid input! (it can only contain alphabets)</font>";
nam.style="font-size:14";
err_n++;
}
else if(c==0)
{
nam.style.display="none";
err_n=0;
}
}
else
{
nam.innerHTML="<font color=red>You can't leave the field blank!</font>";
nam.style="font-size:14";
err_n++;
}
}

var err_b=0;
function birth()
{
var val=frm.yob.value;
var nam=document.getElementById("yob");
var c=0;
var cc1=val.charCodeAt(0);
if(cc1>0)
{
for(var i=0;i<val.length;i++)
{
var cc=val.charAt(i);
if(isNaN(cc))
c++;
}
if(c!=0)
{
nam.innerHTML="<font color=red>Invalid input! (it can only contain numerics)</font>"
nam.style="font-size:14";
err_b++;
}
else if(c==0)
{
nam.style.display="none";
err_b=0;
}
}
else
{
nam.innerHTML="<font color=red>You can't leave the field blank!</font>";
nam.style="font-size:14";
err_b++;
}
}

var err_e=0;
var err_p=0;
var err_c=0;
var j;
function blur2(j)
{
if(j=="e")
{
var val=frm.email.value;
var nam=document.getElementById("email");
}
if(j=="p")
{
var val=frm.password.value;
var nam=document.getElementById("password");
}
if(j=="c")
{
var val=frm.cpassword.value;
var nam=document.getElementById("cpassword");
}
if(j=="u")
{
var val=frm.username.value;
var nam=document.getElementById("username");
}
if(j=="l")
{
var val=frm.lpassword.value;
var nam=document.getElementById("lpassword");
}

if(val=="")
{
nam.innerHTML="<font color=red>You can't leave the field blank</font>";
nam.style="font-size:14";
if(j=="e")
err_e++;
if(j=="p")
err_p++;
if(j=="c")
err_c++;
}
else
{
nam.style.display="none";
if(j=="e")
err_e=0;
if(j=="p")
err_p=0;
if(j=="c")
err_c=0;
}
}




function signup_button()
{
  form_blur();
  birth();
  blur2("e");
  blur2("p");
  blur2("c");
  blur2("u");
  blur2("l");
  if(err_n==0 && err_b==0 && err_e==0 &&  err_p==0 &&  err_c==0)
    {
     if(document.frm.gender[0].checked || document.frm.gender[1].checked)
       {
         var nam=document.getElementById("gender");
         nam.style.display="none";
         if(frm.password.value==frm.cpassword.value)
           {
            if(document.frm.tnc.checked)
            alert("Successfully signed in!");
            else
            alert("Please mark the checkbox!");
           }
         else
            alert("Both password doesn't match!");
       }
     else
       {
        var nam=document.getElementById("gender");
        nam.innerHTML="<font color=red>Please select anyone!</font>";
        nam.style="font-size:14";
       }
    }
  else
   alert("Please fill the form correctly!");

}

var fld;
var btn;
function read_more(fld,btn)
{
document.getElementById(fld).style.display="inline";
document.getElementById(btn).style.display="none";
}



function show_less(fld,btn)
{
document.getElementById(fld).style.display="none";
document.getElementById(btn).style.display="inline";
}



//<SlideShow1>
var ns=1;
var tim=setTimeout("si1()",1);
function si1()
{
ns=1;
document.getElementById("s1_show1").src="Data/slide_show1/1.jpg";
tim=setTimeout("si2()",4000);
}
function si2()
{
ns=2;
document.getElementById("s1_show1").src="Data/slide_show1/2.jpg";
tim=setTimeout("si3()",4000);
}
function si3()
{
ns=3;
document.getElementById("s1_show1").src="Data/slide_show1/3.jpg";
tim=setTimeout("si4()",4000);
}
function si4()
{
ns=4;
document.getElementById("s1_show1").src="Data/slide_show1/4.jpg";
tim=setTimeout("si5()",4000);
}
function si5()
{
ns=5;
document.getElementById("s1_show1").src="Data/slide_show1/5.jpg";
tim=setTimeout("si6()",4000);
}
function si6()
{
ns=6;
document.getElementById("s1_show1").src="Data/slide_show1/6.jpg";
tim=setTimeout("si7()",4000);
}
function si7()
{
ns=7;
document.getElementById("s1_show1").src="Data/slide_show1/7.jpg";
tim=setTimeout("si8()",4000);
}
function si8()
{
ns=8;
document.getElementById("s1_show1").src="Data/slide_show1/8.jpg";
tim=setTimeout("si9()",4000);
}
function si9()
{
ns=9;
document.getElementById("s1_show1").src="Data/slide_show1/9.jpg";
tim=setTimeout("si10()",4000);
}
function si10()
{
ns=10;
document.getElementById("s1_show1").src="Data/slide_show1/10.jpg";
tim=setTimeout("si1()",4000);
}
function next()
{
clearTimeout(tim);
if(ns==1)
si2();
else if(ns==2)
si3();
else if(ns==3)
si4();
else if(ns==4)
si5();
else if(ns==5)
si6();
else if(ns==6)
si7();
else if(ns==7)
si8();
else if(ns==8)
si9();
else if(ns==9)
si10();
else if(ns==10)
si1();
}
function previ()
{
clearTimeout(tim);
if(ns==1)
si10();
else if(ns==2)
si1();
else if(ns==3)
si2();
else if(ns==4)
si3();
else if(ns==5)
si4();
else if(ns==6)
si5();
else if(ns==7)
si6();
else if(ns==8)
si7();
else if(ns==9)
si8();
else if(ns==10)
si9();
}
//</SlideShow1>




//<SlideShow2>
var stt=setTimeout("slide()",1);
var stl1=20;
var stl2=120;
var stn1=0;
var stn2=1;
function slide()
{
var sts=new Array("Data/slide_show2/1.jpg", "Data/slide_show2/2.jpg", "Data/slide_show2/3.jpg",
                             "Data/slide_show2/4.jpg", "Data/slide_show2/5.jpg", "Data/slide_show2/6.jpg", 
                             "Data/slide_show2/7.jpg", "Data/slide_show2/8.jpg");
var st1=document.getElementById("s2_show1");
var st2=document.getElementById("s2_show2");
st1.src=sts[stn1];
st2.src=sts[stn2];
stl1-=20;
stl2-=20;
st1.style.position="absolute";
st1.style.left=stl1+"%";
st2.style.position="absolute";
st2.style.left=stl2+"%";
if(stl1==0)
{
stl2=100;
if(stn2<7)
stn2+=2;
else
stn2=1;
stt=setTimeout("slide()",3000);
}
else if(stl2==0)
{
stl1=100;
if(stn1<6)
stn1+=2;
else
stn1=0;
stt=setTimeout("slide()",3000);
}
else
{
stt=setTimeout("slide()",10);
}
}
//</SlideShow2>





//<note>
var ntt=setTimeout("note()",3000);
var ntl=1;
var ntn=0;
var ntr=35;
function note()
{
var nts=new Array("Welcome to the Future!","The Science of today is the Future of tomorrow.",
                   "The dreams of the Future are better than the History of past.","The best way to predict the future is to create it.",
                   "Imagination is more important than knowledge.","Our future is going to be Technology driven.");
var nt=document.getElementById("note");
nt.innerHTML=nts[ntn];
if(ntl<=ntr)
{
nt.style.position="absolute";
nt.style.left=ntl+"%";
ntl+=5;
var ntt=setTimeout("note()",1);
}
else if(ntn<5)
{
ntn++;
ntl=-20;
if(ntn==1)
ntr=22;
else if(ntn==2)
ntr=15;
else if(ntn==3)
ntr=22;
else if(ntn==4)
ntr=22;
var ntt=setTimeout("note()",5000);
}
else if(ntn==5)
{
ntn=1;
ntr=22;
ntl=-20;
var ntt=setTimeout("note()",5000);
}
}
//</note>



var tl;
function timeline(tl)
{
var tml=window.open(tl,"_parent");
}



var dl;
function timeline(dl)
{
var tml=window.open(dl,"_parent");
}

var tril;
function trial()
{
tril=window.open("trial.html");
var tri=setTimeout("clos()",300000);
}
function clos()
{
tril.close();
}



function skip()
{
var skipw=window.open("main.html","_self");
}
function skip_over()
{
var skipt=setTimeout("skip()",18000)
}

