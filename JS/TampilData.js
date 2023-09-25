function tampilData() {
    //mengambil data dari localStorage dan menampilkannya ke tabel.
    
    dataProfil = JSON.parse(localStorage.getItem("listItem")) ?? [];
  
    dataProfil.forEach(function (value, i) {
      var table = document.getElementById("tabelData");
  
      table.innerHTML += `
                  <tr>
                      <td>${i + 1}</td>
                      <td>${value.namaLengkap}</td>
                      <td>${value.tempatLahir}, ${value.tanggalLahir}</td>
                      <td>${value.jenisKelamin}</td>
                      <td>${value.agama}</td>
                      <td>
                          <a class="tombolUbah" onclick="ubahData(${ value.id })">
                              Ubah
                          </a>
                          <a class="tombolHapus" onclick="hapusData(${ value.id })">
                              Hapus
                          </a>
                      </td>
                  </tr>`
    });
  }
  tampilData();