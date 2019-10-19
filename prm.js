
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

var mytext = getUrlParam('go',null);


//ini sebuah perbandingan jika parameter kosong atau terisi
if(mytext == null){document.getElementById("jika").style.display="none";}
else
	
//ini script buat lanjut jut apalah gitu
    var timeout,interval
    var threshold = 100;
    var secondsleft=threshold;

    window.onload = function()
    {
        startschedule();
    }

     function startChecking()
     {
        secondsleft-=50;
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
           },50)              
   }

   function resetTimer()
   {
        startschedule();
   }
   
   function generate()
   {
	document.getElementById("showlink").style.display="";
   }
   
//ini script buat memberikan link pada tulisan menuju link
$(document).ready(function(){
	var uri_dec = decodeURIComponent(mytext);
	var creampie = 'https://' + uri_dec ;
	$('a[href^="#?"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("#?", creampie); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		var ubah = document.getElementById("crot").href;
				
	});
	
});
