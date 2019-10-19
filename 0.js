
//ini script untuk ambil parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var mytext = getUrlParam('fut',null);
var secondtext = getUrlParam('go',null);

//ini sebuah perbandingan jika parameter kosong atau terisi
if(mytext == null){document.getElementById("jika").style.display="none";}
else
	
//ini secript buat lanjut jut apalah gitu
    var timeout,interval
    var threshold = 2000;
    var secondsleft=threshold;

    window.onload = function()
    {
        startschedule();
    }

     function startChecking()
     {
        secondsleft-=1000;
        document.querySelector(".wait");  
        if(secondsleft == 0)
        {
            //document.getElementById("clickme").style.display="";
            clearInterval(interval);
            document.querySelector(".wait").style.display="none";
            document.querySelector(".to").style.display="";
        }
		
     }
    function startschedule()
    {
          clearInterval(interval);
          secondsleft=threshold;
          document.querySelector(".wait");  
           interval = setInterval(function()
           {
               startChecking();
           },1000)              
   }

   function resetTimer()
   {
        startschedule();
   }
   
   function generate()
   {
	document.getElementById("showlink").style.display="";
	document.querySelector(".to").style.display="none";
   }
   
//ini script buat memberikan link pada tulisan menuju link
$(document).ready(function(){
	//var uri_dec = decodeURIComponent(mytext);
	$('a[href^="https://duniahanyasementara"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://duniahanyasementara", 'https://www.caribahan.online/2019/10/puisi-tentang-melangkah-kedepan-bersama.html?go=' + mytext); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		$(this).attr("rel", "nofollow"); 
				
	});
	
});


//ini sebuah perbandingan jika parameter kosong atau terisi
if(secondtext == null){document.getElementById("tomboldownload").style.display="none";}
else

   
function lanjutkan(){ 
  
  var tautan = decodeURIComponent(secondtext);
  
window.open('tautan); }



