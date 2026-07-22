const stok = [12, 0, 5, 8, 0, 20];

let stokHabis = 0;
let stokTersedia = 0;


for (let i = 0; i <stok.length; i++) {
    if (stok[i] === 0) {
        console.log("Barang ke-" + (i + 1) + " : Stok Habis");
        stokHabis++;
    } else {
        console.log("Barang ke-" + (i + 1) + " : Stok Tersedia");
        stokTersedia++;
    }
 }

console.log("----------------------");
console.log("Jumlah yang stok habis : " + stokHabis);
console.log("Jumlah yang stok tersedia : " + stokTersedia);