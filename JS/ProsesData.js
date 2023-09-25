function simpanData() {
  //menyimpan data baru atau mengupdate data yang sudah ada.
  let id;
  dataProfil = JSON.parse(localStorage.getItem("listItem")) ?? [];// mengambil data dari list item
  dataProfil.length != 0
    ? dataProfil.findLast((item) => (id = item.id))
    : (id = 0); //mengambil array terakhir untuk mendapatkan id terakhir menyimpan ke dalam id variabel

  if (document.getElementById("id").value) {

    //edit array data profil berdasarkan nilai
    dataProfil.forEach((value) => {
      if (document.getElementById("id").value == value.id) {

          (value.namaLengkap = document.getElementById("namaLengkap").value),
          (value.tempatLahir = document.getElementById("tempatLahir").value),
          (value.tanggalLahir = document.getElementById("tanggalLahir").value),
          (value.jenisKelamin = document.querySelector('input[name=jenisKelamin]:checked').value),
          (value.agama = document.getElementById("agama").value)

      }
    });

    //menghapus nilai input yang disembunyikan
    document.getElementById("id").value = "";

  } else {
    
    //menyimpan data baru dari form pendaftaran
    var item = {
      id: id + 1,
      namaLengkap: document.getElementById("namaLengkap").value,
      tempatLahir: document.getElementById("tempatLahir").value,
      tanggalLahir: document.getElementById("tanggalLahir").value,
      jenisKelamin: document.querySelector('input[name=jenisKelamin]:checked').value,
      agama: document.getElementById("agama").value
    };

    dataProfil.push(item);
    //menambahkan data kedalam array data profil
  }

  localStorage.setItem("listItem", JSON.stringify(dataProfil)); //menyimpan data ke list item

  //update data daftar tabel
  tampilData();

}


function hapusData(id){
  //menghapus data array lalu menyimpannya kembali ke localStorage
  //dapatkan data dari local storage dan simpan ke array profil data

  dataProfil = JSON.parse(localStorage.getItem('listItem')) ?? [];

  //mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.
  dataProfil = dataProfil.filter(function(value){ 
      return value.id != id; 
  });

  //kita harus menggunakan JSON.parse, karena data sebagai string, kita perlu mengubahnya menjadi array
  localStorage.setItem('listItem', JSON.stringify(dataProfil));

  tampilData();
  window.location.reload();

}


function ubahData(id){
  //mengambil data dari localStorage sesuai id yang dipilih, lalu data akan ditampilkan pada form.
  dataProfil = JSON.parse(localStorage.getItem('listItem')) ?? [];

  dataProfil.forEach(function (value){
      if(value.id == id){

         document.getElementById('id').value = value.id;
         document.getElementById('namaLengkap').value = value.namaLengkap;
         document.getElementById('tempatLahir').value = value.tempatLahir;
         document.getElementById('tanggalLahir').value = value.tanggalLahir;
         
      }
  })
}
