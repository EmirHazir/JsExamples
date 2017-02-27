var bilgisayar = {
    model: '2017',
    ram: '8Gb',
    ssd: '126gb',
    pc: '3.2hz',
    type: 'laptop',
    fullType: function () {
        return this.pc + ' ' + this.type +' ' + bilgisayar.ram ;
    }
}

var insan = new Object();
insan.firstName = 'Emir';
insan.LastName = 'Hazir';
insan.boy = '1.74cm';
insan.agirlik = '72kg';
document.write(insan.firstName + ' ' + insan.LastName);

document.write('<h3>' + '<p> Şuanki verilerde ' + bilgisayar['ram'] + ' ram ' + bilgisayar.pc + ' pc var' + '</p>' + '</h3>');
document.write('<br>')
document.write('<h3>'+ bilgisayar.fullType()+ '</h3>');

