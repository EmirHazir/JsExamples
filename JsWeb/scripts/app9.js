var shop = 'yes';
var computer = 'yes';
var model = '2017';
var model_old = '2015';
var SSD = '126Gb';

if (shop == 'yes') {
    if (computer == 'yes') {
        if (model == '2017') {
            if (SSD == '126Gb') {
                document.write('merhaba dünya. Alışveriş tamam')
            }
            else {
                document.write('üzgünüm bir alış-veriş SSD mevcut değil')
            }
        } else if (model_old == '2015') {
            if (SSD == '126Gb') {
                document.write('merhaba dünya. Alışveriş tamam')
            }
            else {
                document.write('üzgünüm bir alış-veriş SSD mevcut değil')
            }
        }
        else {
            document.write('üzgünüm bir alış-veriş ama model mevcut değil')
        }
    }
    else {
        document.write('üzgünüm bir alış-veriş ama bilgisayar yok')
    }
}
else {
    document.write('üzgünüm bir alış-veriş mevcut değil')
}