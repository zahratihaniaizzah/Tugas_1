const umur = [8, 13, 17, 20, 25, 11];
let bolehMasuk = 0;
let  tidakBoleh = 0;

for (let i = 0; i <umur.length; i++) {
    if (umur[i] >= 17) {
    console.log("Pengunjung ke-" + (i + 1) + " : Boleh Masuk");
        bolehMasuk++;
    } else {
        console.log("Pengunjung ke-" + (i + 1) + " : Tidak Boleh Masuk");
        tidakBoleh++;
    }
}



console.log("----------------------");
console.log("Jumlah yang boleh masuk : " + bolehMasuk);
console.log("Jumlah yang tidak boleh masuk : " + tidakBoleh);   