//1
function show1()
{
    n1 = Math.random();
    a1.value = n1;
}
function show2()
{
    n2 = Math.random() * 10;
    a2.value = Math.ceil(n2);
}
function show3()
{
    n3 = Math.floor(Math.random() * 10) + 1;
    a3.value = n3;
}

//2
function flip1()
{
    n4 = Math.ceil(Math.random() * 13);
    p1.src = "poker/" + n4 + ".gif";
}

//3
var n5, n6;

function player()
{
    n5 = Math.ceil(Math.random() * 13);
    b1.src = "poker/" + n5 + ".gif";
    ifWin();
}

function host()
{
    n6 = Math.ceil(Math.random() * 13);
    b2.src = "poker/" + n6 + ".gif";
    ifWin();
}

function ifWin()
{
    if(n5 > n6)
    {
        document.getElementById("win").innerHTML = "玩家贏";
    }
    else if(n5 < n6)
    {
        document.getElementById("win").innerHTML = "莊家贏";
    }
    else if(n5 == n6)
    {
        document.getElementById("win").innerHTML = "平手";
    }
}

//4
