function getSaldo()
{
var getSaldo=35;


    if(getSaldo>=25) {
        document.getElementById("getSaldo").innerHTML="Je hebt voldoende saldo om 25$ op te nemen.";
    }
    if(getSaldo<=25) {
        document.getElementById("getSaldo").innerHTML="je hebt weinig saldo";
    }
}