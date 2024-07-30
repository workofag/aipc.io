var tmp=1;
function slideit_1()
    {
        document.getElementById("Clientcarouselinner1").innerHTML =
        '<div class="carousel-item active">' +
        '<img class="d-block w-75" src="./images/Clients/C'+tmp+'.png">'+
        '</div>'
        if(tmp<6)
        tmp++;
    else
        tmp=1;
        setTimeout("slideit_1()",2000);
    }
var tmp1=7;
    function slideit_2()
        {
            document.getElementById("Clientcarouselinner2").innerHTML =
            '<div class="carousel-item active">' +
            '<img class="d-block w-75" src="./images/Clients/C'+tmp1+'.png">'+
            '</div>'
            if(tmp1<12)
            tmp1++;
        else
            tmp1=7;
            setTimeout("slideit_2()",3000);
        }
var tmp2=13;
    function slideit_3()
        {
            document.getElementById("Clientcarouselinner3").innerHTML =
            '<div class="carousel-item active">' +
            '<img class="d-block w-75" src="./images/Clients/C'+tmp2+'.png">'+
            '</div>'
            if(tmp2<18)
            tmp2++;
        else
            tmp2=13;
            setTimeout("slideit_3()",3000);
        }
        
slideit_1();
slideit_2();
slideit_3();