# Test

## Pertanyaan 1

Pertama, dibuat tabel BARANG yang berisi kolom KODEBRG (kode barang) dan NAMABRG (nama barang). Data barang seperti 'MEJA', 'KURSI', dan 'LAMPU' dimasukkan ke dalam tabel ini. Kemudian, dibuat tabel JUAL yang mencatat penjualan dengan kolom KODEBRG dan JUMLAH. Beberapa penjualan barang dengan kode 1 dan 2 dimasukkan ke dalam tabel ini. Query pertama menampilkan semua data dalam tabel JUAL. Query kedua melakukan join antara tabel BARANG dan JUAL menggunakan LEFT JOIN untuk memastikan semua barang ditampilkan, termasuk yang tidak memiliki catatan penjualan. Kolom KODEBRG, NAMABRG, dan total penjualan (JML_JUAL) ditampilkan. Hasilnya dikelompokkan berdasarkan KODEBRG dan NAMABRG, kemudian diurutkan berdasarkan KODEBRG secara ascending.

## Pertanyaan 2

Dibuat tabel HISTORYSTOKBARANG yang berisi kolom KODESTOK (kode stok), TANGGAL (tanggal stok), KODEBARANG (kode barang), dan STOKAKHIR (stok akhir). Data stok barang dimasukkan untuk beberapa hari. Query pertama menampilkan semua data dalam tabel HISTORYSTOKBARANG. Selanjutnya, digunakan WITH clause untuk membuat tabel sementara TANGGALTERAKHIR yang mencatat tanggal terbaru untuk setiap barang. Query terakhir melakukan join antara tabel HISTORYSTOKBARANG dan TANGGALTERAKHIR untuk mendapatkan stok akhir dari setiap barang pada tanggal terbaru. Hasilnya diurutkan berdasarkan KODEBARANG secara ascending.

## Pertanyaan 3

Fungsi generateFibonacci(n) dalam kode di atas menghasilkan deret Fibonacci yang berisi angka-angka hingga nilai terbesar yang tidak melebihi n. Deret Fibonacci dimulai dengan dua angka pertama, yaitu 1 dan 1, yang disimpan dalam array fib. Dalam loop yang tidak terbatas (for (let i = 2; ; i++)), fungsi menghitung angka Fibonacci berikutnya dengan menjumlahkan dua angka terakhir dari array fib. Jika angka berikutnya melebihi n, loop dihentikan dengan break. Setelah loop selesai, deret Fibonacci yang telah dikumpulkan dalam array fib diubah menjadi string dengan angka-angka dipisahkan oleh spasi menggunakan join(' '), lalu dikembalikan sebagai hasil fungsi. Contoh penggunaan menunjukkan bagaimana fungsi ini bekerja untuk berbagai nilai n, menghasilkan deret yang sesuai dengan batas yang ditentukan.

## Pertanyaan 4

Fungsi generateStarPattern(n) menghasilkan pola bintang berbentuk segitiga dengan n baris. Pada awalnya, variabel result diinisialisasi sebagai string kosong. Fungsi ini menggunakan loop for untuk iterasi dari 1 hingga n. Dalam setiap iterasi, jumlah bintang yang dicetak di baris saat ini dihitung dengan '_'.repeat(2 _ i - 1), yang menghasilkan string bintang dengan panjang yang meningkat secara bertahap. Hasil string bintang pada setiap baris ditambahkan ke variabel result, diikuti dengan karakter newline ('\n') untuk memisahkan baris-baris. Setelah loop selesai, result, yang berisi seluruh pola bintang, dikembalikan. Contoh penggunaan menunjukkan bagaimana fungsi ini menghasilkan pola bintang dengan jumlah baris yang sesuai dengan nilai n, membentuk pola segitiga yang semakin lebar seiring bertambahnya baris.

## Pertanyaan 5

Fungsi padNumber(input1, input2) dirancang untuk menambahkan padding dengan nol di awal angka sehingga panjang total string yang dihasilkan sesuai dengan input2. Pertama, fungsi mengonversi input1 menjadi string menggunakan toString(), lalu menyimpan hasilnya dalam variabel numberString. Fungsi selanjutnya menggunakan metode padStart(input2, '0') pada numberString untuk menambahkan nol di depan angka hingga panjang string mencapai input2. Jika panjang numberString sudah lebih besar atau sama dengan input2, padding tidak ditambahkan. Hasil akhir, yaitu string yang sudah dipadding dengan nol, dikembalikan oleh fungsi. Contoh penggunaan menunjukkan bagaimana fungsi ini menambahkan nol di depan angka 5 hingga mencapai panjang 4 karakter (0005), dan bagaimana ia juga mengubah angka 87 menjadi panjang 7 karakter dengan nol di depan (0000087).
