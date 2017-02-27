function topla() {
    s1 = document.getElementById("text1").value;
    s2 = document.getElementById("text2").value;
    result.value = parseInt(s1) + parseInt(s2);

}
function cikar() {
    s1 = document.getElementById("text1").value;
    s2 = document.getElementById("text2").value;
    result.value = parseInt(s1) - parseInt(s2);
}
function carp() {
    s1 = document.getElementById("text1").value;
    s2 = document.getElementById("text2").value;
    result.value = parseInt(s1) * parseInt(s2);
}
function bolme() {
    s1 = document.getElementById("text1").value;
    s2 = document.getElementById("text2").value;
    if (s2 == 0)
        alert("sayı 2 sıfır olamaz, değeri değiştir")
    else
        result.value = parseInt(s1) / parseInt(s2);
}