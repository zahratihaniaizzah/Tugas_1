//Sistem Penilaian Game
const skor = [100, 450, 800, 150, 900];

for (let i = 0; i < skor.length; i++) {
  if (skor[i] >= 800) {
    console.log("Player " + (i + 1) + " : " + skor[i] + " -> Mythic");
  } else if (skor[i] >= 500) {
    console.log("Player " + (i + 1) + " : " + skor[i] + " -> Legend");
  } else if (skor[i] >= 300) {
    console.log("Player " + (i + 1) + " : " + skor[i] + " -> Epic");
  } else {
    console.log("Player " + (i + 1) + " : " + skor[i] + " -> Warrior");
  }
}