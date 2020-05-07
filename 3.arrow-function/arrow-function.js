const Mahasiswa = function(){
    this.nama = 'ok';
    this.umur = 27;
    this.hello = function(){
        console.log(`ok, katakan ${this.nama}, dan umur ${this.umur} tahun.`);
    }
    setInterval(() => {
        console.log(this.umur++);
    }, 1000);
}
const what = new Mahasiswa();