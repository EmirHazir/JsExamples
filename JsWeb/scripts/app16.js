for (var i = 1; i <= 10; i++) {
    document.write(i + '. satır <br>');
    if (i == 6) {
        break;
    }
}
document.write('durdu<br><br>')

for (var y = 1; y <= 10; y++) {
    if (y == 6) {
        continue;
    }
    document.write(y + '. satır <br>');
}
document.write('<br>6 hariç devam etti');