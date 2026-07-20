//Kasir Mini Market
//Sebuah minimarket ingin membuat program sederhana untuk menghitung total belanja pelanggan.

const nama = "Budi";
const umur = 20;

const hargaBarang = [12000, 15000, 8000, 5000];
let totalBelanja = 0;

for (let i = 0; i < hargaBarang.length; i++) {
    totalBelanja += hargaBarang[i];
}

if (totalBelanja > 30000) {
    console.log("Selamat anda mendapatkan diskon.");
    status = "Mendapat Diskon";
} else {
    console.log("Belanja lagi agar mendapat diskon.");
    status = "Belum Mendapat Diskon";
}

console.log("=== STRUK PEMBELIAN ===");
console.log("Nama Pelanggan: " +nama);
console.log("Umur Pelanggan: " +umur);
console.log("Total Belanja: Rp " +totalBelanja);
console.log("Status: " +status);