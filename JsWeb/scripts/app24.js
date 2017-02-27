var insanlar = ['Ali', 'Veli', 'Mustafa', 'Erkan']

document.write(insanlar);
document.write('<br>')

document.write(insanlar.length); 
document.write('<br>')

insanlar[insanlar.length] = 'Ahmet' //diziye ahmeti ekle 
document.write(insanlar);
document.write('<br>')

var new_Element = insanlar.push('Murtaza'); //diziye murtazayı ekle
document.write(insanlar);
document.write('<br>')

var sonIsim = insanlar.pop() //diziye eklediğin murtazayı  
document.write(insanlar); // yazma
document.write('<br>')
document.write(sonIsim); //diziye eklediğin son ismi yaz
document.write('<br>')

document.write(new_Element); //diziye eklediğin son isimle lenhti topla bas
document.write('<br>')

insanlar.shift(); // ilk diziyi al
document.write(insanlar); //bas
document.write('<br>');

insanlar.unshift('Murat'); //ilk sıraya muratı ekle
document.write(insanlar); //bas
document.write('<br>');

insanlar.splice(0,0,'Rıza','Yasin'); //ilk veri dizisine Rıza, Yasin ekle
document.write(insanlar); //bas
document.write('<br>');
