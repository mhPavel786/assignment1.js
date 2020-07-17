 function feetToMile(feet) {
     if ( feet <= 0) {
        var mile =" Your input is not valid. ";
     }
     else{
        mile = feet / 5280;  
     }
     return mile;
 }
 var result = feetToMile(998);
 console.log(result);