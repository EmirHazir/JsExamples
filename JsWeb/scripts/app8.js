var var1 = 10;
var var2 = 8;
var var3 = var1 + var2;
if (var1 + var2 == 18) {
    document.write('yes');
}

document.write('<br>');
if (var1 < (var1+3)) {
    document.write('yes');
} else if(var1 > (var1-1)) {
    document.write('yes');
}
else {
    document.write('no');
}
document.write('<br>');

if (var2 == 8 || var1 != 3) {
    document.write('yes');
}
else {
    document.write('no');
}