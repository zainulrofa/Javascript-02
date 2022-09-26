// 1. array concat
// digunakan untuk menggabungkan dua atau lebih nilai array pada array baru.
// parameternya berisikan indeks array yang kita ingin gabungkan di array baru.
// contoh
const str1 = ["a", "b", "c"]
const str2 = ["d", "e", "f"]
const int = [1, 2, 3]
const strInt = str1.concat(str2, int)
// console.log(strInt)

// 2. array pop
// dapat digunakan untuk menghilangkan value terakhir pada array dan memunculkannya.
// parameternya berisikan value yang ingin kita hilangkan.
// contoh
let bulan = ["Jan", "Feb", "Mar", "Apr"]
const newBulan = bulan.pop("Apr")
// console.log(bulan)
// console.log(newBulan)

// 3. array unshift
// dapat digunakan untuk menambahkan 1 atau lebih value di awal array.
// parameternya berisikan value yang ingin ditambahkan.
// contoh
let buah = ["apel"]
buah.unshift("pisang")
// console.log(buah)

// 4. array shift
// dapat digunakan untuk menghilangkan 1 atau lebih value di awal array.
// parameternya berisikan value yang ingin dihilangkan.
// contoh
let sayur = ["bayam", "kangkung", "seledri"]
sayur.shift("bayam")
// console.log(sayur)

// 5. array slice
// dapat digunakan untuk mengembalikan value yang dipilih dalam array (start hingga end) dan tidak merubah original array.
// parameternya berisikan start:index dan end:item ke-n
// contoh 
let hobi = ["berenang", "main game", "menggambar", "membaca"]
const hobi1 = hobi.slice(1, 2)
console.log(hobi)
console.log(hobi1)