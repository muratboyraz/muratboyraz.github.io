window.onload=function () 
{
    
    
    var isim=document.getElementById("isim").textContent;
    if(isim=isNaN)
    {
        document.getElementById("isim").borderColor=red;
        
        
    }
    
    var soyisim=document.getElementById("soyisim").textContent;
    if(soyisim=isNaN)
    {
        document.getElementById("soyisim").borderColor=red;
        
        
    }
    
    var tel=document.getElementById("telefon").textContent;
    
    if(tel!=isNaN)
    {
        
         document.getElementById("telefon").borderColor=red;
            
    }
     var TCKNO=document.getElementById("TCKNO").textContent;
    
    if(TCKNO!=isNaN)
    {
        if(TCKNO%100000000000)
         document.getElementById("TCKNO").borderColor=red;
            
    }
   
}