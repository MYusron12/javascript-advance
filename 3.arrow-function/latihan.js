//ambil element box menggunakan dom
const box = document.querySelector('.box');

//saat box di klik, lakukan sesuatu
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    //berikan class baru bernama size pada box
    this.classList.toggle(satu);
    //tunggu selama 0,6detik lalu beri class caption
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});









