//user mengisi nama di awal membuka web
function getName() {
    let name = prompt("Siapa nama kamu?");
    while (!name) {
        alert("Nama harus diisi untuk melanjutkan ke web!");
        name = prompt("Siapa nama kamu?");
    }
    document.getElementById("welcome-title").textContent = name;
}

window.onload = getName;



//autoslide - kalau pakai button

let indexSlide = 1; //gambar pertama yang akan ditampilkan, ditulis 1 agar menjalankan index pertama
showSlide(1); //pertama kali ngebuka akan menjalankan ini

function nextSlide(n) { //yang ngurusin perpindahan slide 1 ke slide 2
    showSlide(indexSlide += n); //index akan bertambah 1 ketika diklkik nextslide
    console.log('index slide kita tambah ' + n);
    console.log(indexSlide + ' ini nextslide');
}

function showSlide(n) {//bagian ini menjelaskan apa yang ingin kita buat?
    let listImage = document.getElementsByClassName('banner-item');
    if (n > listImage.length) indexSlide = 1; //kalau lebih dari n (n kita ada 5) maka kembali ke  1
    console.log(n + 'ini N di slideshow')

    let index = 0; //'0 ini showslide' jadi '1 ini showslide' karena logic ini
    while (index < listImage.length) {
        listImage[index].style.display = 'none'; //yang lain di hide..
        index++; 
    }

    listImage[indexSlide - 1].style.display = 'block'; 
    console.log(indexSlide-1 + ' ini showslide'); //..hanya nomor 1 yang dishow, nomor 1 itu gambar kedua
}


//message us form - validate
function validateForm() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let birth = document.querySelector('#birth').value;
    let message = document.querySelector('#message').value;

    console.log(name);
    console.log(email);
    console.log(birth);
    console.log(message);

 
    if (name !== '' && email !== '' && birth !== '' && message !== '') {
        document.querySelector('#nameResult').textContent = `Nama Lengkap: ${name}`;
        document.querySelector('#emailResult').textContent = `Email: ${email}`;
        document.querySelector('#birthResult').textContent = `Tanggal Lahir: ${birth}`;
        document.querySelector('#messageResult').textContent = `Pesan: ${message}`;
    }  else{
        alert('Pesan tidak terkirim, mohon lengkapi semua data');
    }
}

//mengkosongkan form setelah diisi
function newMessage() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#birth').value = '';
    document.querySelector('#message').value = '';

    
     // Mengembalikan teks default
     document.querySelector('#nameResult').textContent = 'Nama Lengkap: ';
     document.querySelector('#emailResult').textContent = 'Email: ';
     document.querySelector('#birthResult').textContent = 'Tanggal Lahir: ';
     document.querySelector('#messageResult').textContent = 'Pesan: ';
 }

//querySelector kalau mau pindah class tinggal ganti # jadi .
//getElementById hanya untuk id