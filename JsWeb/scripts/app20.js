str = 'javascript çok güçlÜ bir Clint side programlama dilidir';
str1 = 'javascript çok güçlü bir clint side programlama dilidir';
str2 = 'javascript çok güçlü bir clint side programlama dilidir';
sub_str = str.substring(20); //20 say sonrasını bas
sub_str2 = str.substring(20,24); //20 ve 24 arasını  bas
rep_str = str.replace('bir', '1') // bir'i 1 yap
get_pos = str.indexOf('Clint') // Clint a kadar kaç harf varsa say bas
get_lastPos = str.lastIndexOf('i') // son i ye kadar kaç harf varsa say bas

document.write('default'+str);
document.write('<br>');

document.write(str1.toUpperCase());
document.write('<br>');

document.write(str2.toLowerCase());
document.write('<br>');

document.write(sub_str);
document.write('<br>');

document.write(sub_str2);
document.write('<br>');

document.write(rep_str);
document.write('<br>');

document.write(get_pos);
document.write('<br>');

document.write(get_lastPos);
document.write('<br>');


