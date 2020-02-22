// membuat object pada javascript
//1. object literal
//PROBLEM: Tidak bisa digunakan object yang banyak
// let mahasiswa1 = {
//     nama: 'Yusron',
//     energi: 10,
//     //method adalah function yg ada dalam object
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Adi',
//     energi: 20,
//     //method adalah function yg ada dalam object
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }




//2. function declaration
//PROBLEM: 
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function() {
//         this.energi += ProcessingInstruction;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermai`);
//     }
//     return mahasiswa;
// }

// let mhs1 = Mahasiswa('yusron', 10);
// let mhs2 = Mahasiswa('yudi', 20);


//3. Constructor Function
//keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function() {
//         this.energi += ProcessingInstruction;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermai`);
//     }
// }
// let mhs1 = new Mahasiswa('Yusron', 10);




//4. Object.create