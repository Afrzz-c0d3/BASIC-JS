// 1. Menggunakan aritmatika sisa Bagi
console.log("============SOAL 1============");
function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

console.log(cekGanjilGenap(5));
console.log(cekGanjilGenap(4));

// 2. MenggunakanIf Else
console.log("============SOAL 2============");
function cekKelulusan(nilaiUjian) {
  if (nilaiUjian >= 75) {
    return "Selamat, anda lulus";
  } else {
    return "Maaf, anda harus remedial";
  }
}

console.log(cekKelulusan(80));

console.log("============SOAL 3============");
// 3. Cek Usia Menggunakan If Else dan &&
function cekUsia(usia) {
  if (usia <= 12) {
    return "Anak Anak";
  } else if (usia >= 13 && usia <= 17) {
    return "Anak Anak";
  } else if (usia >= 18 && usia <= 55) {
    return "Dewasa";
  } else if (usia >= 55) {
    return "Lansia";
  } else {
    return "Usia Tidak Valid";
  }
}

console.log(cekUsia());

console.log("============SOAL 4============");
// 4. Function mengembalikakn Array
function balikArray(arrayAngka) {
  return arrayAngka;
}

const angka = [1, 2, 3, 4, 5];
console.log(balikArray(angka));

console.log("============SOAL 5============");
// 5. Function Nilai Tertinggi Array dengan literasi adajuga yang bisa menggunakan operator penyebarn (...)
// ditambah fungsi js Math.max()
function cariNilaiTertinggi(arrayAngka) {
  let nilaiTertinggi = arrayAngka[0];

  for (let i = 1; i < arrayAngka.length; i++) {
    if (arrayAngka[i] > nilaiTertinggi) {
      nilaiTertinggi = arrayAngka[i];
    }
  }

  return nilaiTertinggi;
}

const arrayAngka = [3, 7, 2, 9, 5];
console.log(cariNilaiTertinggi(arrayAngka));

console.log("============SOAL 6============");
// 6. reverse nilai array
function nilaiBalik(params) {
  return params.reverse();
}

const balik = [1, 2, 3, 4, 5];
console.log(nilaiBalik(balik));

console.log("============SOAL 7============");
// 7. Function Memisahkan Ganjil Dan Genap
function pisahGanjilGenap(ganjilGenap) {
  const arrayGanjil = [];
  const arrayGenap = [];

  ganjilGenap.forEach((paramsAngka) => {
    if (paramsAngka % 2 === 0) {
      arrayGenap.push(paramsAngka);
    } else {
      arrayGanjil.push(paramsAngka);
    }
  });

  return { arrayGanjil, arrayGenap };
}

const paramsAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = pisahGanjilGenap(paramsAngka);

console.log(hasil.arrayGanjil);
console.log(hasil.arrayGenap);

console.log("============SOAL 8============");
// 8. Function Mengurutkan Angka

const toko = {
  daftarProduk: [],
  tambahProduk: function (produk) {
    this.daftarProduk.push(produk);
  },

  hitungTotalProduk: function () {
    return this.daftarProduk.length;
  },
  hitungTotalHarga: function () {
    let totalHarga = 0;

    this.daftarProduk.forEach(function (produk) {
      totalHarga += produk.harga; // Tambahkan harga produk ke total
    });

    return totalHarga;
  },
};

toko.tambahProduk({ nama: "Ban", harga: 500000 });
toko.tambahProduk({ nama: "Oli", harga: 100000 });
toko.tambahProduk({ nama: "Aki", harga: 750000 });

console.log("Daftar Produk:", toko.daftarProduk);

console.log("Total Produk:", toko.hitungTotalProduk());
console.log("Total Harga:", toko.hitungTotalHarga());
