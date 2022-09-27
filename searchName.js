const nama = ['Abigail', "Alexandra", 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function searchName(search, count, callback) {
    let output = [];
    let add = 0;
    for (let i = 0; i < nama.length; i++) {
        let namaLower = nama[i].toLowerCase()
        if (namaLower.search(search) > -1) {
            output.push(nama[i]);
            add++
            if (add == count) break
        }
    }
    callback(output)
}

function callback(output) {
    console.log(output);
}

searchName('an', 3, callback)
