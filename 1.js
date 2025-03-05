function hitungBarang(jenisBarang, kuantitas) {
  let hargaBarang, hargaDibayar, totalHarga;
  let potongan = 0;
  if (jenisBarang == "A") {
    //Barang A
    hargaBarang = 4550;
    if (kuantitas >= 13) {
      potongan = 231 * kuantitas;
    }
    totalHarga = hargaBarang * kuantitas;
    hargaDibayar = totalHarga - potongan;
  } else if (jenisBarang == "B") {
    //barang B
    hargaBarang = 5330;
    totalHarga = hargaBarang * kuantitas;
    if (kuantitas >= 7) {
      potongan = (23 / 100) * totalHarga;
    }
    hargaDibayar = totalHarga - potongan;
  } else if (jenisBarang == "C") {
    //barang C
    hargaBarang = 8653;
    totalHarga = hargaBarang * kuantitas;
    hargaDibayar = totalHarga;
  }
  console.log("-Total Harga Barang : ", totalHarga);
  console.log("-Potongan : ", potongan);
  console.log("-Total Yang Harus di Bayar : ", hargaDibayar);
}

// Contoh penggunaan
hitungBarang("A", 13);
