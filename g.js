
//ini script untuk ambil parameter
function getUrlVars() {
    var vars2 = {};
    var parts2 = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars2[key] = value;
    });
    return vars2;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter2 = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter2 = getUrlVars()[parameter];
        }
    return urlparameter2;
}

var mytext2 = getUrlParam('go',null);


//ini sebuah perbandingan jika parameter kosong atau terisi
if(mytext2 == null){document.getElementById("jika2").style.display="none";}
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
        document.querySelector(".wait2");  
        if(secondsleft == 0)
        {
            //document.getElementById("clickme").style.display="";
            clearInterval(interval);
            document.querySelector(".wait2").style.display="none";
            document.querySelector(".to2").style.display="";
        }
		
     }
    function startschedule()
    {
          clearInterval(interval);
          secondsleft=threshold;
          document.querySelector(".wait2");  
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
	document.getElementById("showlink2").style.display="";
	document.querySelector(".to2").style.display="none";
   }
   
function buka(){ 
  
  var uri_dec = decodeURIComponent(mytext2);
  
window.open(uri_dec); }

