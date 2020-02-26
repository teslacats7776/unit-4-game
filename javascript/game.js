$( document ).ready(function() {
    console.log( "ready!" );
    
    var crystal = $ (".rupee");
    var randWinNbr = getRandomInt(19,120);
    var tot=0;
    var numbers = [];
    var winNbr = 0;
    var lossNbr = 0;
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
    console.log (randWinNbr);
    
    $ (".rupee").each (function() {
    var random = getRandomInt(1,12);
    $(this).attr (
        {
            "data-random": random
        }
    )
    
    }) 
    ;
        $(".rupee").click(function(){
    
    var sum = 0;
           console.log (this.dataset.random);
    numbers.push(parseInt(this.dataset.random, 10));
    console.log (numbers);
    for (var i = 0; i < numbers.length;i++) {    
        sum += numbers[i];console.log (sum);
        tot = sum;
    }
       console.log (tot);
    
        document.getElementById('total').value = tot;
        // return tot
    
    
     if (tot == randWinNbr ) {
         winNbr ++;
       document.getElementById("wins").innerHTML = winNbr;
       
    
       getRandomInt(19,120);   
       tot = 0;
        numbers = [];
      }
    else if (tot > randWinNbr )  {
    
        lossNbr ++;
       document.getElementById("loss").innerHTML = lossNbr;
       getRandomInt(19,120); 
       tot = 0;
        numbers = [];
      
    }
    
    
    }
    );
    
    
    
    
    
    //$(document).ready(function(){
     //   $(".rupee").click(function(){
    // var i;
    // for (i = 0; i < crystal.length; i++) {
    //  alert ( crystal[i].dataset.random);
    // }
    //   });
    // });
    // for(var i=0;i<crystal.length;i++){
    //         if(parseInt(crystal[i].dataset.random))
    //             tot += parseInt(crystal[i].dataset.random);
    //     }
    
    
    
    });
    
    
    
    
    
    
    