
//task1
let value = prompt('Zehmet olmasa  530.90-ı daxil edin');
let value1 = value.split('.');
console.log(value1[0] + ' '  + "Manat" +  ' ' +value1[1] + ' ' +  "Qepik" );

//task2 
let emekhaqqi=prompt("Əmək haqqını daxil edin");
console.log(Number(emekhaqqi)-(Number(emekhaqqi)*13)/100); 

//task3
let fullName=prompt("Ad Soyad və Ata adı daxil edin");
let fullNamefirst=fullName.split(' ');
let ad = fullNamefirst[0];
let soyad =fullNamefirst[1];
let ataadi = fullNamefirst[2];
console.log(soyad+ ' '+ ad[0] + ' ' +ataadi[0]);

//task4
let deyer = prompt("Əmanətin Məbləğini daxil edin:");
let deyer1 = prompt("Əmanətin Müddətini daxil edin:");
let deyer2 = prompt("Əmanətin faiz dərəcəsini daxil edin:");
let faiz = ((+deyer1 * + deyer2) / 12) ;
let profit = ((Number(deyer) * faiz) / 100);
let netice = `${deyer1} aydan sonra əmanət qazancınız ${profit} azn olacaq`;
alert(netice);

let deyer3 = prompt('İl sayını daxil edin:');
let hasil = 12;
let profit2 = Number(deyer) * (1 + Number(deyer2) / hasil) * hasil * deyer3 ;
let netice1 = `İnvestisiya gəliri: ${profit2}`;
alert(netice1);

//task1//
let price=prompt('530.90 daxil edin');
let price1 = price.split('.');
console.log(price1[0]+ ' ' + 'manat' + ' ' + price1[1] + ' '+ 'qəpik');


//task2//
let emekhaqqi=prompt('Emek haqqinizi daxil edin');
console.log(emekhaqqi * 87 / 100);


//task3//
let ad=prompt('Adinizi daxil edin');
let soyad=prompt('Soyadinizi daxil edin');
let ataAdi=prompt('Ata adini daxil edin');
console.log(soyad, ad[0], ataAdi[0]);


//task4//
let emanetinMeblegi=prompt('Əmanətin məbləğini (AZN) daxil edin');
let aylarinSayi=prompt('Əmanəti saxlayacağınız müddəti (ay) daxil edin');
let illikFaiz=prompt('İllik faizi daxil edin');

let faiz=(Number(aylarinSayi) * Number(illikFaiz) / 12);
let gelir=(Number(emanetinMeblegi) * Number(faiz) / 100);

let umumi=(aylarinSayi + ' aydan sonra əmanətdən qazancınız'+ ' ' + gelir + 'AZN'+' ' + 'olacaq');
console.log(aylarinSayi + ' aydan sonra əmanətdən qazancınız'+ ' ' + gelir + 'AZN'+' ' + 'olacaq');
alert(umumi);

