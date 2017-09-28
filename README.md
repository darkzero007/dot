# dot
technical test

Langkah intalasi
clone 

jalankan 
composer install
npm install

buat database baru
buat file .env
  copy isi .env.example
  isi nama database,user,pass untuk database yang akan digunakan

php artisan migrate

php artisan serve
npm run prod          untuk generate file production


Jelaskan bagaimana anda menggunakan GIT untuk proses development sampai deployment production?

menggunakan git untuk digunakan versioning dalam pengerajaan di proses development dan tidak lupa meng ignore data sensitif seperti env.

Mana yang anda dahulukan, mengatasi technical debt atau menyelesaikan fitur?

menyelesaikan fitur

Bolehkah kita mengirim email melalui Controller? Apa alasannya?

boleh saja, tapi dari pengalaman lebih baik dibuat kelas sendiri seperti kelas mailer untuk menangai proses email yang dipanggil dari controller.

Bagaimana anda menilai aplikasi yang berkualitas?

aplikasi berjalan dengan baik sesuai kebutuhan dan memiliki struktur yang baik sehingga proses maintenance lebih mudah dan akan lebih baik jika terdapat dokumentasi.

Jelaskan bagaimana anda melakukan proses debugging suatu aplikasi.

menyisipkan kode return untuk mengetahui value dari suatu variable.
