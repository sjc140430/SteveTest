//0 started position


//contains moveset, will check if it equals the empty value using array prototype includes
//direction to move will be based on index in inner array
var empty = 16;
var pos2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1];
var winArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1];
var rV;
var index;

$(function() {
      var str ="#sq" + empty.toString();
      $(str).hide("slow");
});

$(function() {
    $("#b1").click(function() {

        
         
        let pos2e = winArr.slice(1,17);
        console.log("pos2e b4 rand: " + pos2e);
        let counter = 16;

        while(counter>1) {
            let ind = Math.floor(Math.random() * counter);
            counter--;
            let t = pos2e[counter];
            pos2e[counter] = pos2e[ind];
            pos2e[ind] = t;

        }
        console.log(pos2e);


        console.log("empty before hides: " + empty);
        for(var z=1; z<=16; z++) {
            pos2[z]=pos2e[z-1];
            if(pos2e[z]===-1) {
                empty=z+1;
            }
        }

        
        $("#sq1").hide().html(pos2e[0]).css({left:"1px", top:"1px"}).fadeIn(500);
        $("#sq2").hide().html(pos2e[1]).css({left:"50px", top:"1px"}).fadeIn(2200);
        $("#sq3").hide().html(pos2e[2]).css({left:"99px", top:"1px"}).fadeIn(2400);
        $("#sq4").hide().html(pos2e[3]).css({left:"148px", top:"1px"}).fadeIn(700);
        $("#sq5").hide().html(pos2e[4]).css({left:"1px", top:"50px"}).fadeIn(2600);
        $("#sq6").hide().html(pos2e[5]).css({left:"50px", top:"50px"}).fadeIn(2400);
        $("#sq7").hide().html(pos2e[6]).css({left:"99px", top:"50px"}).fadeIn(2600);
        $("#sq8").hide().html(pos2e[7]).css({left:"148px", top:"50px"}).fadeIn(1400);
        $("#sq9").hide().html(pos2e[8]).css({left:"1px", top:"99px"}).fadeIn(2400);
        $("#sq10").hide().html(pos2e[9]).css({left:"50px", top:"99px"}).fadeIn(2900);
        $("#sq11").hide().html(pos2e[10]).css({left:"99px", top:"99px"}).fadeIn(2800);
        $("#sq12").hide().html(pos2e[11]).css({left:"148px", top:"99px"}).fadeIn(1800);
        $("#sq13").hide().html(pos2e[12]).css({left:"1px", top:"148px"}).fadeIn(2600);
        $("#sq14").hide().html(pos2e[13]).css({left:"50px", top:"148px"}).fadeIn(2800);
        $("#sq15").hide().html(pos2e[14]).css({left:"99px", top:"148px"}).fadeIn(800);
        $("#sq16").hide().html(pos2e[15]).css({left:"148px", top:"148px"}).fadeIn(3200);

        
        var str ="#sq" + empty.toString();
        $(str).hide("slow");
        console.log("empty after rand" + empty);

        //copy values of pos2e to pos2

        

    });
});

$(function() {
    $("#pos2").click(function() {
        console.log("Pos2: " + pos2 + "Empty: " + empty);
    });
});

function regenCSS(){
    
}



$(function() {
    $("#win").click(function(){
        if(pos2.toString() === winArr.toString()) {
            console.log("win");
            //$(".square").css({background-color:"lime"});

            
            $("#sq16").hide();

        }

        else {
            console.log("no dice");
        }
    })
})


$(function () {
    $(".square").click(function () {
        var choice = (function canMove() {

            console.log("pos" + pos2);
            var current = parseInt($(this).html());
            console.log(current);

            for(var i= 1; i<=16; i++) {
                if(pos2[i]==current) {
                    index = i;
                }
            }
            if(index-4===empty) {
                let temp = -2;
                temp=pos2[index];
                pos2[index]=-1;
                pos2[empty]=temp;
                empty=index;
                rV=1;
            }
            else if(index+1===empty) {
                let temp = -2;
                temp=pos2[index];
                pos2[index]=-1;
                pos2[empty]=temp;
                empty=index;
                rV=2;
            }
            else if(index+4===empty) {
                let temp = -2;
                temp=pos2[index];
                pos2[index]=-1;
                pos2[empty]=temp;
                empty=index;
                rV=3;
            }
            else if(index-1===empty) {
                let temp = -2;
                temp=pos2[index];
                pos2[index]=-1;
                pos2[empty]=temp;
                empty=index;
                rV=4;
            }
            else {
                console.log("adjacent to index not equal to empty, cant move");
                rV=-1;
            }
            return rV;
        }).bind(this)();
        console.log("direction moving: " + choice);
        if(choice === 1) {
            $(this).animate({top: "-=49px"}, 100);
        }
        else if(choice ===2) {
            $(this).animate({left: "+=49px"}, 100);
        }
        else if (choice===3) {
            $(this).animate({top: "+=49px"}, 100);
        }                  
        else if (choice===4) {
            $(this).animate({left: "-=49px"}, 100);
        }                   
        else if (choice===-1) {
            console.log("cant move");
        }
       console.log("empty: " + empty);
       //$(this).animate({top: "48px"}, 1000);
    });
});