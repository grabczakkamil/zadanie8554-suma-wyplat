$(function () {
    'use strict';


    $("#count-sum").click(function () {

        var tablica = $(".salary").map(function () {
            return $(this).text();
        });
        var arr = Array.from(tablica);
        
        
        var suma = 0;
    for (var i=0; i<arr.length; i++) {
        suma += arr[i]*1;
    }
//        w tablicy znajdowały się stringi, aby zamienić je na number wykorzystałem *1

document.getElementById("sum").innerText = suma; 
        
        

    })
})