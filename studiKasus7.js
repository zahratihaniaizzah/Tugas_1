const nilai = [80, 95, 70, 88, 100, 65];

let nilaiTerbesar = [nilai[0]];
let nilaiTerkecil = [nilai[0]];

for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] > nilaiTerbesar[0]) {
    nilaiTerbesar[0] = nilai[i];
  } 

  if (nilai[i] < nilaiTerkecil[0]) {
    nilaiTerkecil[0] = nilai[i];
  }
}

console.log("Nilai tertinggi : " + nilaiTerbesar[0]);
console.log("Nilai terendah : " + nilaiTerkecil[0] );