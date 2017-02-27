//Arrays

var bilgisayarlar = ['<h2>'+' IBM',' Mac',' Acer',' Hp'+'</h2>'];
document.write(bilgisayarlar+'<br>');
document.write('<h2>' + bilgisayarlar[2] + '</h2>');
document.write('<br>');

var insanlar = ['Ali', 'Veli', 'Murat', 'Ayşe'];
document.write('<h2>' + insanlar[2] + '</h2>');
insanlar[2] = 'Murtaza'
document.write('<h2>' + insanlar[2] + '!!=> Murat artık murtaza oldu'+ '</h2><br>');

var degisenVeri = insanlar[3];
degisenVeri = 'Kezban';
if (degisenVeri != 'Kezban') {
    alert('Veri eşleşmiyor')
}
else {
    document.write('<h2>' + insanlar[3] + ' Artık' + ' ' + degisenVeri + '</h2><br>');
}


var meyveler = [];
meyveler[0] = 'Elma';
meyveler[1] = ' Portakal';
meyveler[2] = ' Mango';
meyveler[3] = ' Kiraz';
meyveler[4] = ' Kavun';
meyveler[5] = ' Üzüm';

document.write('<h2>' + meyveler + '</h2>' + '<br>');

if (meyveler) {
    document.write('<h2>' + 'Meyve salatası yap' + ' ' + meyveler[2], meyveler[3], meyveler[4] + '</h2>')
}


