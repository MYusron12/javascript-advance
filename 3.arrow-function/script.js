let mahasiswa = ['yusron', 'jenal', 'mukti'];

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);