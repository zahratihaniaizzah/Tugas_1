//Daftar Harga Menu Cafe

const menu = [
  10000,
  25000,
  18000,
  12000,
  50000
];

for (let i = 0; i < menu.length; i++) {
  if (menu[i] > 20000) {
    console.log("Menu ke-" + (i + 1) + " : Rp" + menu[i] + " -> Menu Premium");
  } else {
    console.log("Menu ke-" + (i + 1) + " : Rp" + menu[i] + " -> Menu Reguler");
  }
}