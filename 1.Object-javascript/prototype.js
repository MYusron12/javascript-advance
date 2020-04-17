//class versi javascript
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `hai ${this.nama}, silahkan`;
    }
}
let orang = new Mahasiswa('orang', 2);