const hadir = [
true,
false,
true,
true,
false,
true
];

let hadirCount = 0;

for (let i = 0; i <hadir.length; i++) {
    if (hadir[i] === true) {
        console.log("Siswa ke-" + (i + 1) + " : Hadir");
        hadirCount++;
    } else {
        console.log("Siswa ke-" + (i + 1) + " : Tidak Hadir");
    }
}

console.log("----------------------");
console.log("Jumlah yang hadir : " + hadirCount);
console.log("Jumlah yang tidak hadir : " + (hadir.length - hadirCount));