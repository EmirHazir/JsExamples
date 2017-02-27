
function topla() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    textboxresult.value = parseInt(s1) + parseInt(s2);

}
function cikar() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    textboxresult.value = parseInt(s1) - parseInt(s2);
}
function carp() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    textboxresult.value = parseInt(s1) * parseInt(s2);
}
function bolme() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    if (s2 == 0)
        alert("donomioater cant be ,change the value")
    else
        textboxresult.value = parseInt(s1) / parseInt(s2);
}