//Stok Gudang
const stok = [12, 0, 5, 8, 0, 20];

for (let i = 0; i <stok.length; i++) {
    if (stok[i] === 0) {
        console.log("Barang ke-" + (i + 1) + " : Stok Habis");
    } else {
        console.log("Barang ke-" + (i + 1) + " : Stok Tersedia");

    }
    }