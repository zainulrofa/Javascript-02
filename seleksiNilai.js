function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAkhir <= nilaiAwal) return console.log('Nilai akhir harus lebih besar dari nilai awal')
    if (dataArray.length <= 5) return console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    let output = [];
    for (let i = 0; i < dataArray.length; i++) {
        let number = dataArray[i]
        if (nilaiAwal < number && number < nilaiAkhir) {
            output.push(number)
        }
    }
    output.sort(function (a, b) {
        return a - b
    })
    return console.log(output)
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(4, 17, [2, 25, 4])
