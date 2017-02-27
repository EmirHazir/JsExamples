/// <reference path="jquery-3.1.1.min.js" />



$(document).ready(function () {
    $('#h1').click(function asd() {
        $('#h1').fadeOut(1000);
        console.log('fade out h1 ')
    })
})


$(document).ready(function () {
    $('#h2').mouseenter(function () {
        $('#h2').fadeOut(1000);
        console.log('fade out h2 ')
    })
})


$(document).ready(function () {
    $('#h3').mouseleave(function () {
        $('#h3').fadeOut(1000);
        console.log('fade leave h3 ')
    })
})


$(document).ready(function () {
    $('#_p').hover(function () {
        alert('şuan p içindesin')
        console.log('hover p girdi ')
    }, function () {
        alert('şuan çıktın')
        console.log('hover p çıktı ')
    });
})



$(document).ready(function () {
    $('#btn').mouseup(function () {
        alert('butona tıklandı buton tikli kaldi. ok deyince clik pasif olacak')
        console.log('butona tıklandı ')
    });
})


$(document).ready(function () {
    $('#btn2').mousedown(function () {
        alert('butona tıklandı. hissedilmedi. ok deyince hissedilecek')
        console.log('butona(new) tıklandı ')
    });
})