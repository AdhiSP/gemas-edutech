"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  ArrowLeft,
  KeyRound,
  Lock,
  Search,
} from "lucide-react";

// Tipe Data Kuis & Soal
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizPackage {
  id: string;
  title: string;
  subject: string; // Properti Mata Pelajaran Dinamis (misal: "Informatika" atau "Koding & AI")
  classLevel: string;
  questionsCount: number;
  accessKey: string;
  teacher: string;
  essayQuestions?: string[];
  questions: Question[];
}

// Master Data Kuis
const quizPackages: QuizPackage[] = [
  // -------------------------------------------------------------
  // 1. KELAS 7 SMP - INFORMATIKA
  // -------------------------------------------------------------
  {
    id: "asas-7-ganjil",
    title: "ASAS Semester Ganjil Informatika Kelas 7 SMP",
    subject: "Informatika",
    classLevel: "Kelas 7 SMP",
    questionsCount: 30,
    accessKey: "SMP7KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Sebutkan 4 pilar utama dalam Berpikir Komputasional!",
      "Jelaskan fungsi dari tombol shortcut berikut pada Microsoft Word:\n a. Ctrl + C\n b. Ctrl + V\n c. Ctrl + S",
      "Jelaskan perbedaan dasar antara perangkat keras (Hardware) dan perangkat lunak (Software), lalu berikan masing-masing 1 contohnya!",
      "Apa yang dimaksud dengan browser (peramban web)? Sebutkan 2 contoh aplikasinya!",
      "Mengapa CPU (Central Processing Unit) sering disebut sebagai 'otak' dari sebuah komputer?"
    ],
    questions: [
      {
        id: 1,
        question: "Kemampuan untuk memecahkan masalah dengan menggunakan cara berpikir layaknya komputer disebut...",
        options: ["Berpikir Komputasional", "Berpikir Kreatif", "Jaringan Komputer", "Sistem Operasi"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Memecah masalah yang besar dan rumit menjadi bagian-bagian yang lebih kecil agar mudah diselesaikan disebut...",
        options: ["Abstraksi", "Pengenalan Pola", "Dekomposisi", "Algoritma"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Aplikasi buatan Microsoft yang paling tepat digunakan untuk mengetik dokumen dan surat adalah...",
        options: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Paint"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Tombol kombinasi (shortcut) pada keyboard untuk menyalin teks (Copy) adalah...",
        options: ["Ctrl + S", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Tombol shortcut Ctrl + V pada Microsoft Word berfungsi untuk...",
        options: ["Menyimpan dokumen", "Menyalin teks", "Membuka file baru", "Menempelkan teks (Paste)"],
        correctAnswer: 3,
      },
      {
        id: 6,
        question: "Jika kita sudah selesai mengetik dan ingin menyimpan dokumen Word, shortcut yang bisa kita gunakan adalah...",
        options: ["Ctrl + S", "Ctrl + O", "Ctrl + A", "Ctrl + X"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Agar judul pada dokumen terlihat lebih tebal, kita bisa menggunakan shortcut...",
        options: ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + J"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Tombol shortcut Ctrl + I (Italic) digunakan untuk...",
        options: ["Memiringkan tulisan", "Menebalkan tulisan", "Memberi garis bawah tulisan", "Menghapus tulisan"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Untuk membatalkan perintah terakhir yang tidak sengaja dilakukan (Undo) di Word, kita bisa menekan...",
        options: ["Ctrl + Y", "Ctrl + C", "Ctrl + Z", "Ctrl + P"],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Agar tulisan menjadi rata tengah (Center) di Microsoft Word, kita dapat menekan...",
        options: ["Ctrl + L", "Ctrl + R", "Ctrl + J", "Ctrl + E"],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "Saat ingin mencetak dokumen (Print) ke kertas, tombol cepat yang digunakan adalah...",
        options: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + V"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Antarmuka pada komputer yang memudahkan pengguna berinteraksi menggunakan gambar, menu, dan ikon disebut...",
        options: ["CLI (Command Line Interface)", "GUI (Graphical User Interface)", "VUI (Voice User Interface)", "CPU"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Bagian fisik komputer yang bisa dilihat dan disentuh disebut juga dengan istilah...",
        options: ["Software", "Brainware", "Hardware", "Malware"],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "Program atau aplikasi yang ada di dalam komputer untuk menjalankan perintah disebut...",
        options: ["Software", "Hardware", "Perangkat keras", "Motherboard"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "Komponen yang sering disebut sebagai 'otak' dari sebuah komputer karena bertugas memproses semua data adalah...",
        options: ["Monitor", "Mouse", "RAM", "CPU (Central Processing Unit)"],
        correctAnswer: 3,
      },
      {
        id: 16,
        question: "Media penyimpanan sementara pada komputer yang datanya akan hilang jika komputer dimatikan adalah...",
        options: ["Hardisk", "SSD", "RAM", "Flashdisk"],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Di bawah ini yang merupakan contoh perangkat keras masukan (Input Device) adalah...",
        options: ["Monitor dan Printer", "Keyboard dan Mouse", "Speaker dan Proyektor", "Hardisk dan RAM"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Tempat virtual di komputer yang digunakan untuk menyimpan dan mengelompokkan file-file agar rapi disebut...",
        options: ["Folder", "Shortcut", "Desktop", "Browser"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Contoh perangkat lunak peramban web (browser) yang sering kita gunakan untuk membuka internet adalah...",
        options: ["Microsoft Word", "Google Chrome", "Windows", "File Explorer"],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Fasilitas di internet yang digunakan untuk mengirim surat elektronik antar pengguna adalah...",
        options: ["Search Engine", "E-mail (Surat Elektronik)", "Microsoft Excel", "Spam"],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "Pesan-pesan sampah atau pesan promosi yang sering masuk secara otomatis ke email kita disebut...",
        options: ["Inbox", "Draft", "Outbox", "Spam"],
        correctAnswer: 3,
      },
      {
        id: 22,
        question: "Google, Yahoo, dan Bing merupakan contoh situs web yang berfungsi sebagai...",
        options: ["Mesin Pencari (Search Engine)", "Sistem Operasi", "Aplikasi Perkantoran", "Perangkat Keras"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "Media penyimpanan generasi modern yang lebih cepat dari Hardisk biasa (HDD) dan menggunakan chip adalah...",
        options: ["RAM", "Flashdisk", "SSD (Solid State Drive)", "CD-ROM"],
        correctAnswer: 2,
      },
      {
        id: 24,
        question: "Sistem bilangan komputer yang hanya terdiri dari angka 0 dan 1 disebut...",
        options: ["Bilangan Desimal", "Bilangan Biner", "Bilangan Oktal", "Bilangan Heksadesimal"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "Langkah-langkah yang disusun secara logis dan berurutan untuk menyelesaikan suatu masalah disebut...",
        options: ["Algoritma", "Abstraksi", "Output", "Input"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Mengamati dan mencari kesamaan bentuk atau karakteristik dari suatu masalah disebut...",
        options: ["Dekomposisi", "Pengenalan Pola (Pattern Recognition)", "Abstraksi", "Evaluasi"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "Menghilangkan informasi yang tidak penting dan hanya fokus pada inti masalah utama disebut...",
        options: ["Algoritma", "Dekomposisi", "Abstraksi", "Pengenalan Pola"],
        correctAnswer: 2,
      },
      {
        id: 28,
        question: "Jika mouse dicolokkan ke komputer tapi pointernya tidak bisa digerakkan, kemungkinan besar masalahnya terletak pada...",
        options: ["Perangkat kerasnya (Hardware)", "Microsoft Word", "Koneksi internet", "Algoritma"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Di antara aplikasi berikut, yang paling cocok digunakan untuk membuat bahan presentasi di depan kelas adalah...",
        options: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Notepad"],
        correctAnswer: 2,
      },
      {
        id: 30,
        question: "Shortcut Ctrl + U (Underline) pada Microsoft Word berfungsi untuk...",
        options: ["Menghapus teks", "Memberikan garis bawah pada teks", "Mencetak teks", "Menebalkan teks"],
        correctAnswer: 1,
      },
    ],
  },

  // -------------------------------------------------------------
  // 2. KELAS 8 SMP - INFORMATIKA
  // -------------------------------------------------------------
  {
    id: "asas-8-ganjil",
    title: "ASAS Semester Ganjil Informatika Kelas 8 SMP",
    subject: "Informatika",
    classLevel: "Kelas 8 SMP",
    questionsCount: 30,
    accessKey: "SMP8KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Berpikir komputasional memiliki 4 fondasi utama yaitu Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma. Jelaskan secara singkat apa yang dimaksud dengan Dekomposisi dan Algoritma!",
      "Sebutkan perbedaan fungsi utama antara aplikasi Microsoft Word, Microsoft Excel, dan Microsoft PowerPoint yang sering kalian temui di lab komputer!",
      "Tuliskan 5 jalan pintas (shortcut) keyboard yang paling dasar dan berguna pada komputer beserta fungsinya (misal: Ctrl+C untuk menyalin)!",
      "Jelaskan apa fungsi dari rumus =SUM() dan =AVERAGE() saat kalian menggunakan aplikasi Microsoft Excel!",
      "Berdasarkan buku paket/LKS, apa yang dimaksud dengan CMS (Content Management System) dan Laboratorium Maya (Virtual Lab)?"
    ],
    questions: [
      {
        id: 1,
        question: "Kemampuan untuk memecah masalah yang kompleks menjadi bagian-bagian yang lebih kecil dan mudah dikelola disebut....",
        options: ["Abstraksi", "Dekomposisi", "Pengenalan Pola", "Algoritma"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Mengurutkan langkah-langkah dalam menyelesaikan masalah agar menjadi logis, berurutan, teratur, dan mudah dipahami merupakan cara berpikir dengan....",
        options: ["Dekomposisi", "Pemrograman", "Algoritma", "Komputasional"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Kemampuan untuk melihat persamaan atau perbedaan pola, tren, dan keteraturan dalam data disebut....",
        options: ["Pengenalan Pola (Pattern Recognition)", "Abstraksi", "Algoritma", "Dekomposisi"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Perintah jalan pintas (shortcut) pada keyboard untuk menyalin teks (Copy) adalah....",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Jika kamu salah menghapus teks dan ingin mengembalikannya seperti semula (Undo), shortcut yang digunakan adalah....",
        options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + A"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Ekstensi file (format file) yang dihasilkan dari aplikasi utama pengolah kata (seperti Microsoft Word) umumnya disimpan dalam format....",
        options: [".xls", ".ppt", ".doc / .docx", ".html"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "Ekstensi file yang sering digunakan pada aplikasi pengolah lembar kerja (seperti Microsoft Excel) adalah....",
        options: [".docx", ".xlsx / .xls", ".txt", ".jpg"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "CPU memiliki bagian berupa unit aritmetika dan logika. Bagian tersebut memiliki tugas melakukan....",
        options: [
          "Menyimpan data dengan kecepatan tinggi",
          "Penghitungan sesuai perintah yang diperoleh",
          "Menampilkan grafis ke layar",
          "Mengatur lalu lintas data"
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Untuk membuat teks menjadi tebal pada Microsoft Word, kamu dapat menekan shortcut....",
        options: ["Ctrl + I", "Ctrl + U", "Ctrl + B", "Ctrl + S"],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "CMS merupakan sistem yang dirancang untuk mengelola konten digital. CMS merupakan singkatan dari....",
        options: [
          "Content Management System",
          "Computer Management System",
          "Central Memory Storage",
          "Cyber Management System"
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "Aplikasi Microsoft Excel sering digunakan untuk mengolah data berupa....",
        options: ["Gambar dan Video", "Angka dan Tabel", "Suara dan Animasi", "Teks paragraf panjang"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Rumus (Function) pada Excel yang digunakan untuk menjumlahkan total nilai dari beberapa sel adalah....",
        options: ["=AVERAGE()", "=MAX()", "=MIN()", "=SUM()"],
        correctAnswer: 3,
      },
      {
        id: 13,
        question: "Rumus pada Excel yang digunakan untuk mencari nilai rata-rata adalah....",
        options: ["=SUM()", "=AVERAGE()", "=MAX()", "=COUNT()"],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Pertemuan antara baris (row) dan kolom (column) pada Microsoft Excel disebut dengan....",
        options: ["Worksheet", "Range", "Cell (Sel)", "Workbook"],
        correctAnswer: 2,
      },
      {
        id: 15,
        question: "Salah satu keuntungan dari keberadaan Laboratorium Maya (Virtual Lab) adalah....",
        options: [
          "Risiko kejadian berbahaya sangat tinggi",
          "Membutuhkan biaya fisik yang relatif mahal",
          "Menghemat pengeluaran dan menekan biaya",
          "Mengurangi interaksi antar siswa"
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Apabila kamu ingin mempresentasikan hasil diskusi kelompok di depan kelas, aplikasi yang paling cocok digunakan adalah....",
        options: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Notepad"],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Untuk memulai slide show (menjalankan presentasi) dari awal pada Microsoft PowerPoint, tombol yang ditekan adalah....",
        options: ["F1", "F5", "Esc", "Enter"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Efek visual berupa pergantian atau perpindahan dari satu slide ke slide lainnya pada PowerPoint disebut....",
        options: ["Animation", "Transition", "Design", "Insert"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Shortcut keyboard Ctrl + A berfungsi untuk....",
        options: ["Menyimpan dokumen", "Mencetak dokumen", "Memilih seluruh teks (Select All)", "Membuka dokumen baru"],
        correctAnswer: 2,
      },
      {
        id: 20,
        question: "Metode pemecahan masalah dengan mengabaikan detail-detail yang tidak penting dan berfokus pada informasi utama disebut....",
        options: ["Abstraksi", "Algoritma", "Dekomposisi", "Pengenalan Pola"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Konversi dari bilangan desimal ke bilangan biner melibatkan pembagian secara terus-menerus dengan angka....",
        options: ["2", "8", "10", "16"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Semua orang memiliki potensi menjadi korban phising. Dampak negatif yang dirasakan ketika menjadi korban phising adalah....",
        options: [
          "Meningkatkan kewaspadaan akun pribadi",
          "Mendapat perlindungan antivirus otomatis",
          "Identitas pribadi digunakan untuk membuka akun baru oleh pelaku",
          "Komputer menjadi tidak bisa dimatikan"
        ],
        correctAnswer: 2,
      },
      {
        id: 23,
        question: "Untuk mencetak dokumen (Print) ke printer, kombinasi tombol keyboard yang digunakan adalah....",
        options: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Jika kamu ingin mengatur batas tepi kertas (margin) pada dokumen Microsoft Word, menu tab yang umumnya dipilih adalah....",
        options: ["Home", "Insert", "Page Layout / Layout", "Review"],
        correctAnswer: 2,
      },
      {
        id: 25,
        question: "Sistem Operasi (Operating System) yang banyak dan marak digunakan pada awal merebaknya penggunaan Personal Computer (PC) adalah....",
        options: ["Android", "DOS (Disk Operating System)", "iOS", "Linux"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Berikut ini yang BUKAN merupakan perangkat keras (Hardware) pada komputer adalah....",
        options: ["Keyboard", "Monitor", "Microsoft Word", "Mouse"],
        correctAnswer: 2,
      },
      {
        id: 27,
        question: "Saat merapikan teks di Microsoft Word, shortcut Ctrl + J digunakan untuk membuat perataan teks menjadi....",
        options: ["Rata kiri", "Rata kanan", "Rata tengah", "Rata kiri dan kanan (Justify)"],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "Shortcut Ctrl + S sangat penting dibiasakan agar dokumen tidak hilang saat praktik. Fungsi Ctrl + S adalah untuk....",
        options: ["Save (Menyimpan)", "Search (Mencari)", "Select (Memilih)", "Send (Mengirim)"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Langkah mengonversi bilangan desimal ke bilangan oktal menggunakan prinsip membagi dengan angka dasar, yaitu angka....",
        options: ["2", "8", "10", "16"],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "Untuk membatalkan perintah secara paksa atau menutup secara langsung jendela aplikasi game yang sedang berjalan, kita bisa menekan kombinasi tombol....",
        options: ["Alt + F4", "Ctrl + Shift", "Tab + Enter", "Windows + R"],
        correctAnswer: 0,
      },
    ],
  },

  // -------------------------------------------------------------
  // 3. KELAS 9 SMP - INFORMATIKA
  // -------------------------------------------------------------
  {
    id: "asas-9-ganjil",
    title: "ASAS Semester Ganjil Informatika Kelas 9 SMP",
    subject: "Informatika",
    classLevel: "Kelas 9 SMP",
    questionsCount: 30,
    accessKey: "SMP9KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Jelaskan perbedaan mendasar antara Perangkat Keras (Hardware) dan Perangkat Lunak (Software), serta berikan masing-masing 2 contohnya!",
      "Sebutkan dan jelaskan fungsi dari 3 shortcut keyboard yang paling sering digunakan pada Microsoft Office (Word, Excel, atau PowerPoint)!",
      "Apa perbedaan fungsi antara rumus =SUM() dan =AVERAGE() pada aplikasi Microsoft Excel?",
      "Jelaskan apa yang dimaksud dengan \"Jejak Digital\" (Digital Footprint) dan berikan satu contoh cara menjaga keamanan diri saat bermain game online (seperti Roblox) atau menggunakan internet!",
      "Menurutmu, mengapa saat merancang sebuah presentasi atau desain grafis menggunakan Canva, kita harus memperhatikan kesederhanaan konten dan tidak sembarangan memasukkan data pribadi yang sensitif?"
    ],
    questions: [
      {
        id: 1,
        question: "Langkah-langkah logis untuk memecahkan masalah dalam pemrograman disebut....",
        options: ["Proses", "Program", "Algoritma", "Step by step"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "Bentuk grafis yang menggambarkan urutan proses dalam sebuah algoritma adalah....",
        options: ["Flowchart", "Pseudocode", "Program", "Software"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Struktur data array adalah....",
        options: [
          "Kumpulan variabel dengan tipe data berbeda",
          "Kumpulan variabel dengan tipe data yang sejenis",
          "Ukuran yang tidak dapat berubah",
          "Penyimpanan data yang tidak berurutan"
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Langkah pertama yang dilakukan untuk menyusun sebuah program adalah....",
        options: ["Membuat program", "Membuat algoritma", "Membeli komputer", "Melakukan proses"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Simpul yang saling terhubung melalui edge pada tipe data graph dinamakan....",
        options: ["Root", "Node / Vertex", "Leaf", "Branch"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Fungsi logika yang bisa membalik variabel biner yang memberi masukan 0, maka keluaran 1 adalah operasi....",
        options: ["AND", "OR", "NOT", "NOR"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "Di bawah ini yang merupakan contoh struktur data linier adalah....",
        options: ["Stack dan Queue", "Tree dan Graph", "Node dan Edge", "Array dan Tree"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Pengertian dari jejak digital adalah....",
        options: [
          "Menggunakan gambar dan video di internet",
          "Rekaman aktivitas seseorang di internet",
          "Alamat IP dari komputer yang digunakan",
          "Informasi pribadi yang disimpan offline"
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Hal yang harus dihindari ketika membuat konten di media sosial atau blog adalah....",
        options: [
          "Membagikan informasi pribadi yang bersifat sensitif",
          "Menulis dengan bahasa yang santun",
          "Menggunakan sumber terpercaya",
          "Membagikan karya hasil sendiri"
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Sikap yang tepat saat menggunakan internet (seperti saat bermain Roblox atau menonton YouTube) untuk menghindari pencurian data adalah....",
        options: [
          "Membagikan password kepada teman bermain",
          "Menggunakan nama asli dan alamat lengkap di profil umum",
          "Tidak sembarangan mengklik tautan (link) yang tidak dikenal",
          "Menerima semua permintaan pertemanan dari orang asing"
        ],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "Aplikasi berbasis web (cloud) yang sering digunakan untuk membuat desain presentasi, poster, dan grafis secara praktis adalah....",
        options: ["Microsoft Excel", "Roblox", "Canva", "Windows"],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "Perangkat keras komputer (Hardware) yang berfungsi sebagai otak atau pemroses utama adalah....",
        options: ["Monitor", "RAM", "CPU (Central Processing Unit)", "Harddisk"],
        correctAnswer: 2,
      },
      {
        id: 13,
        question: "Berikut ini yang termasuk dalam kategori perangkat lunak (Software) adalah....",
        options: [
          "Keyboard, Mouse, Printer",
          "Windows, Microsoft Word, Canva",
          "CPU, RAM, Motherboard",
          "Harddisk, Flashdisk, SSD"
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Kombinasi tombol keyboard (shortcut) untuk menyalin teks (Copy) pada Microsoft Word adalah....",
        options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Untuk membatalkan perintah terakhir yang dilakukan (Undo) pada aplikasi komputer, kita dapat menekan....",
        options: ["Ctrl + Y", "Ctrl + C", "Ctrl + Z", "Ctrl + U"],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Jika kamu ingin menebalkan teks pada Microsoft Word, maka shortcut yang digunakan adalah....",
        options: ["Ctrl + I", "Ctrl + U", "Ctrl + B", "Ctrl + E"],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Fungsi utama dari aplikasi Microsoft Excel adalah untuk....",
        options: [
          "Membuat desain gambar",
          "Mengolah kata dan surat",
          "Mengolah angka dan tabel data",
          "Membuat video animasi"
        ],
        correctAnswer: 2,
      },
      {
        id: 18,
        question: "Rumus yang digunakan untuk menjumlahkan sekumpulan angka pada sel Microsoft Excel adalah....",
        options: ["=AVERAGE()", "=SUM()", "=MAX()", "=MIN()"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Rumus =AVERAGE() pada Microsoft Excel digunakan untuk mencari....",
        options: ["Nilai tertinggi", "Nilai terendah", "Total penjumlahan", "Nilai rata-rata"],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Ekstensi file standar hasil penyimpanan dokumen Microsoft PowerPoint adalah....",
        options: [".docx", ".xlsx", ".pptx", ".jpg"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "Untuk menampilkan presentasi layar penuh (Slide Show) dari slide pertama pada Microsoft PowerPoint, tombol yang biasa ditekan adalah....",
        options: ["F2", "F4", "F5", "F12"],
        correctAnswer: 2,
      },
      {
        id: 22,
        question: "Cara cepat (shortcut) untuk membuat slide baru dalam Microsoft PowerPoint adalah menekan....",
        options: ["Ctrl + N", "Ctrl + M", "Ctrl + S", "Ctrl + P"],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Kombinasi tombol Ctrl + S berfungsi untuk....",
        options: [
          "Menyimpan dokumen (Save)",
          "Membuka dokumen (Open)",
          "Mencetak dokumen (Print)",
          "Menutup aplikasi (Close)"
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Memilih seluruh teks dalam suatu dokumen (Select All) dapat dilakukan dengan menekan....",
        options: ["Ctrl + A", "Ctrl + B", "Ctrl + C", "Ctrl + D"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Di dalam pemrograman visual Scratch, blok perintah yang berwarna biru (Motion) berfungsi untuk mengatur....",
        options: ["Tampilan karakter", "Suara karakter", "Pergerakan karakter", "Kejadian (Event)"],
        correctAnswer: 2,
      },
      {
        id: 26,
        question: "Agar tulisan pada Microsoft Word menjadi rata tengah (Center), shortcut yang digunakan adalah....",
        options: ["Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J"],
        correctAnswer: 2,
      },
      {
        id: 27,
        question: "Komponen komputer yang digunakan untuk menyimpan data secara permanen agar dokumen tidak hilang saat komputer dimatikan adalah....",
        options: ["RAM", "Harddisk / SSD", "Processor", "VGA Card"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Manfaat utama dari konsep Modularisasi Program dalam ilmu komputer adalah....",
        options: [
          "Membuat komputer menjadi lebih lambat",
          "Memecah masalah besar menjadi bagian kecil agar mudah diselesaikan",
          "Menghapus jejak digital",
          "Mengganti fungsi dari perangkat keras"
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Fitur transisi (Transition) pada Microsoft PowerPoint digunakan untuk....",
        options: [
          "Memberikan efek animasi pada huruf/teks",
          "Memberikan efek pergerakan saat berganti antar slide",
          "Menambahkan video YouTube ke dalam slide",
          "Mencetak slide menjadi dokumen Word"
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "Tipe data yang nilai kebenarannya hanya ada dua, yaitu True (Benar) dan False (Salah) disebut tipe data....",
        options: ["Desimal", "Heksadesimal", "Boolean / Biner", "Array"],
        correctAnswer: 2,
      },
    ],
  },

  // -------------------------------------------------------------
  // 4. KELAS 10 SMA - INFORMATIKA
  // -------------------------------------------------------------
  {
    id: "asas-10-ganjil",
    title: "ASAS Semester Ganjil Informatika Kelas 10 SMA",
    subject: "Informatika",
    classLevel: "Kelas 10 SMA",
    questionsCount: 30,
    accessKey: "SMA10KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Dalam materi ekosistem periksa fakta, jelaskan minimal 3 langkah verifikasi yang harus dilakukan ketika menerima pesan berantai yang mengklaim sebuah temuan informasi luar biasa agar tidak terjebak menyebarkan hoaks!",
      "Apa yang dimaksud dengan pencarian menggunakan banyak variabel (Multiple Variable Search)? Berikan satu contoh kasus nyata penggunaannya lengkap dengan sintaks operator logikanya (AND/OR/NOT) di mesin pencari!",
      "Susunlah sebuah algoritma sederhana (dalam bentuk urutan langkah / pseudocode) untuk logika alat 'Pemilah Limbah Pintar' (Smart Waste Sorter) yang dapat mendeteksi kedatangan sampah, mengenali apakah bahan tersebut logam atau bukan, lalu memindahkannya ke penampungan yang sesuai!",
      "Jelaskan letak perbedaan prinsip kerja dari struktur data Stack (Tumpukan) dan Queue (Antrean)! Berikan masing-masing satu contoh konkrit penggunaannya dalam operasional sekolah atau laboratorium!",
      "Ketika menerjemahkan masalah di kehidupan nyata ke dalam solusi komputasi, mengapa keputusan memilih algoritma dan tipe struktur data yang akan digunakan sangat mempengaruhi kualitas dari perangkat lunak yang dihasilkan?"
    ],
    questions: [
      {
        id: 1,
        question: "Pencarian informasi di internet dengan banyak variabel sering menggunakan operator logika. Operator yang digunakan untuk memastikan kedua kata kunci harus ada dalam hasil pencarian adalah...",
        options: ["OR", "NOT", "AND", "XOR", "IF"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "Jika kita ingin mencari informasi tentang \"Algoritma\" tetapi tidak ingin menyertakan hasil yang mengandung kata \"Pemrograman\", operator pencarian yang tepat digunakan adalah...",
        options: [
          "Algoritma AND Pemrograman",
          "Algoritma OR Pemrograman",
          "Algoritma -Pemrograman",
          "Algoritma + Pemrograman",
          "\"Algoritma Pemrograman\""
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Manakah dari berikut ini yang merupakan contoh penerapan pencarian dengan banyak variabel secara efektif untuk mencari data atau karya tulis?",
        options: [
          "Mengetikkan seluruh kalimat pertanyaan di kolom pencarian",
          "Menggunakan tanda kutip untuk mencari frasa spesifik beserta operator AND",
          "Hanya mencari menggunakan satu kata kunci umum",
          "Menggunakan operator OR untuk semua kata kunci",
          "Tidak menggunakan filter tahun publikasi"
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Proses mengumpulkan dan mengekstraksi data secara otomatis dari berbagai situs web untuk dianalisis lebih lanjut disebut dengan...",
        options: ["Web Browsing", "Data Entry", "Web Phishing", "Web Scraping", "Data Validation"],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "Dalam tahapan koleksi data yang baik, langkah pertama yang paling krusial sebelum mulai mengumpulkan data adalah...",
        options: [
          "Memilih aplikasi visualisasi data",
          "Menentukan tujuan pengumpulan data",
          "Menghapus data yang tidak relevan",
          "Mempublikasikan data",
          "Mengacak data"
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Data yang terstruktur dan siap untuk diolah umumnya disimpan dan didistribusikan dalam format file...",
        options: [
          ".mp4 atau .avi",
          ".docx atau .pdf",
          ".csv atau relasional database",
          ".jpg atau .png",
          ".exe atau .apk"
        ],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "Ekosistem periksa fakta melibatkan berbagai alat dan lembaga. Situs atau platform yang sering dimanfaatkan untuk mengecek kebenaran informasi dan mendeteksi hoaks di Indonesia adalah...",
        options: ["Turnitin", "Hoax Buster (Mafindo)", "Google Scholar", "Canva", "GitHub"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Saat menerima pesan berantai yang provokatif di grup perpesanan, langkah pertama dalam ekosistem periksa fakta yang harus dilakukan adalah...",
        options: [
          "Segera membagikannya agar orang lain tahu",
          "Mengubah judulnya agar lebih menarik",
          "Mengecek sumber berita dan mencari verifikasi dari media terpercaya",
          "Menghapus akun pengirim pesan",
          "Membalas dengan informasi yang sama provokatifnya"
        ],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "Alat bantu yang paling tepat digunakan untuk menelusuri keaslian sebuah gambar atau foto yang beredar di internet adalah...",
        options: [
          "Google Reverse Image Search",
          "Google Translate",
          "Microsoft Word",
          "Adobe Photoshop",
          "Windows Defender"
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Evaluasi sumber data sangat penting dilakukan. Kriteria 'Currency' (Keterkinian) dalam mengevaluasi sumber informasi memiliki arti...",
        options: [
          "Informasi disajikan secara gratis",
          "Informasi tersebut berasal dari negara yang sama",
          "Informasi yang disajikan adalah informasi terbaru atau relevan dengan waktu saat ini",
          "Informasi memiliki banyak gambar dan tabel",
          "Penulis informasi adalah orang yang terkenal"
        ],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "Salah satu ciri situs web yang kurang kredibel (kurang dapat dipercaya) untuk dijadikan sebagai sumber data akademis adalah...",
        options: [
          "Menggunakan domain .edu atau .ac.id",
          "Mencantumkan nama penulis dan referensi yang jelas",
          "Tanggal publikasi selalu diperbarui",
          "Tidak mencantumkan identitas penulis dan sumber rujukan tidak jelas",
          "Memiliki desain yang sangat sederhana namun rapi"
        ],
        correctAnswer: 3,
      },
      {
        id: 12,
        question: "Saat melakukan evaluasi data, kita harus mewaspadai adanya bias. Apa yang dimaksud dengan bias dalam sebuah informasi?",
        options: [
          "Kesalahan pengetikan kata pada artikel",
          "Kecenderungan penulis untuk memihak pada satu sudut pandang tertentu secara subjektif",
          "Artikel yang terlalu panjang untuk dibaca",
          "Penggunaan bahasa asing dalam artikel",
          "Data yang disajikan dalam bentuk grafik"
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Teknik memisahkan data yang relevan dan tidak relevan dari sekumpulan data besar hasil koleksi dinamakan proses...",
        options: [
          "Data Scraping",
          "Data Creation",
          "Data Filtering (Penyaringan)",
          "Data Duplication",
          "Data Deletion"
        ],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "Dalam strategi pencarian informasi, penggunaan tanda bintang (*) di mesin pencari berfungsi sebagai...",
        options: [
          "Penanda artikel favorit",
          "Wildcard, untuk menggantikan satu atau beberapa kata yang hilang dalam sebuah frasa",
          "Menghapus kata kunci dari hasil",
          "Mengunduh file otomatis",
          "Menerjemahkan halaman web"
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Dalam menilai keandalan (reliability) suatu informasi, aspek terkuat yang bisa diverifikasi adalah...",
        options: [
          "Otoritas, keahlian, atau rekam jejak pembuat konten di bidang tersebut",
          "Seberapa banyak artikel tersebut disukai (likes) di media sosial",
          "Warna dan desain dari situs web",
          "Panjang pendeknya artikel yang ditulis",
          "Kecepatan memuat halaman web"
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Urutan langkah-langkah logis dan sistematis yang disusun untuk memecahkan suatu masalah atau mencapai tujuan tertentu disebut...",
        options: ["Flowchart", "Pseudocode", "Struktur Data", "Algoritma", "Program"],
        correctAnswer: 3,
      },
      {
        id: 17,
        question: "Representasi visual atau diagram dari sebuah algoritma yang menggunakan simbol-simbol geometris standar disebut...",
        options: ["Source Code", "Flowchart", "Topologi", "Pseudocode", "Diagram Venn"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Struktur kendali dalam pemrograman yang digunakan ketika terdapat dua atau lebih pilihan tindakan yang dieksekusi berdasarkan kondisi/kriteria tertentu adalah...",
        options: [
          "Perulangan (Looping)",
          "Sekuensial (Urutan)",
          "Percabangan (Selection / If-Else)",
          "Array",
          "Fungsi (Function)"
        ],
        correctAnswer: 2,
      },
      {
        id: 19,
        question: "Jika sebuah instruksi dalam program perlu dijalankan berulang-ulang sampai sebuah kondisi terpenuhi, struktur kendali yang tepat digunakan adalah...",
        options: [
          "Percabangan",
          "Sekuensial",
          "Logika AND",
          "Perulangan (Loop / Iteration)",
          "Tipe Data"
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Perhatikan instruksi logika berikut: \"Jika nilai siswa >= 75, maka cetak 'Tuntas', selain itu cetak 'Belum Tuntas'\". Instruksi tersebut menggunakan struktur kendali...",
        options: [
          "Perulangan FOR",
          "Perulangan WHILE",
          "Pemilihan IF-ELSE",
          "Sekuensial",
          "Searching"
        ],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "Saat memilih algoritma untuk efisiensi masalah di kehidupan nyata, ada teknik yang bekerja dengan membagi dua bagian data yang sudah terurut secara terus menerus untuk menemukan target. Teknik ini disebut...",
        options: ["Linear Search", "Bubble Sort", "Binary Search", "Insertion Sort", "Sequential Search"],
        correctAnswer: 2,
      },
      {
        id: 22,
        question: "Di sebuah laboratorium komputer, dibuat aturan bahwa pengguna yang datang dan mendaftar lebih awal berhak menggunakan workstation terlebih dahulu. Konsep struktur data yang mengimplementasikan masalah nyata ini adalah...",
        options: [
          "LIFO (Last In First Out)",
          "FIFO (First In First Out) / Queue",
          "Tree",
          "Graph",
          "Stack"
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Terdapat sebuah alat pemilah limbah pintar berbasis sensor ultrasonik dan induktif. Algoritma logika utama pada sistem mikrokontrolernya yang paling esensial adalah...",
        options: [
          "Menghitung jumlah keseluruhan limbah secara kumulatif",
          "Membaca kondisi sensor, mengidentifikasi jenis bahan limbah, lalu memberi perintah (If-Else) pada servo penampungan",
          "Mengabaikan jenis bahan dan mengumpulkan semuanya",
          "Menyimpan seluruh data ke cloud tanpa eksekusi mekanik",
          "Menyalakan lampu LED secara berkedip-kedip saat penuh"
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "Struktur data dasar yang menyimpan kumpulan elemen-elemen bertipe sama secara berurutan dalam memori, yang setiap elemennya diakses melalui indeks adalah...",
        options: ["Stack", "Queue", "Tree", "Graph", "Array"],
        correctAnswer: 4,
      },
      {
        id: 25,
        question: "Struktur data Stack (Tumpukan) memiliki prinsip LIFO. Kepanjangan dari LIFO adalah...",
        options: [
          "Last In First Out",
          "Last In First Order",
          "Latest Input First Output",
          "Last Input Forward Output",
          "Lost In Found Out"
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Saat menyusun rute terpendek untuk perjalanan dari titik satu ke titik lainnya melewati berbagai persimpangan, struktur data yang paling lazim digunakan memodelkan koneksi jalan tersebut adalah...",
        options: ["Array", "Stack", "Queue", "Graph", "Linked List"],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "Mengapa pemilihan struktur data yang tepat memegang peranan vital dalam pembuatan program untuk masalah sehari-hari?",
        options: [
          "Agar bahasa pemrograman yang digunakan lebih mudah diganti",
          "Sangat mempengaruhi tingkat efisiensi alokasi memori dan kecepatan eksekusi logika program",
          "Semata-mata membuat antarmuka program menjadi lebih cantik",
          "Untuk menekan ukuran layar yang dibutuhkan",
          "Agar source code menjadi lebih panjang dan kompleks"
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Dalam struktur data hierarkis seperti Tree (Pohon), elemen data teratas yang bertindak sebagai pangkal dan tidak memiliki node parent disebut...",
        options: ["Leaf (Daun)", "Branch (Cabang)", "Node (Simpul)", "Root (Akar)", "Edge (Garis)"],
        correctAnswer: 3,
      },
      {
        id: 29,
        question: "Salah satu implementasi nyata dari konsep struktur data Queue (Antrean) di dalam manajemen sistem adalah...",
        options: [
          "Fungsi Undo pada peranti lunak",
          "Manajemen memori untuk riwayat browsing terbaru",
          "Antrean perintah pencetakan (Print Spooler) pada sebuah printer",
          "Penyusunan hirarki folder (Directory)",
          "Navigasi peta jaringan jalan"
        ],
        correctAnswer: 2,
      },
      {
        id: 30,
        question: "Saat mengetik script dan menyadari adanya kesalahan beruntun, fitur \"Ctrl+Z\" (Undo) membatalkan aksi secara berurutan dari yang paling terakhir diketik. Struktur data di balik layar mekanisme ini adalah...",
        options: ["Stack", "Queue", "Array", "Graph", "Tree"],
        correctAnswer: 0,
      },
    ],
  },

  // -------------------------------------------------------------
  // 5. KELAS 11 SMA - INFORMATIKA
  // -------------------------------------------------------------
  {
    id: "asas-11-ganjil",
    title: "ASAS Semester Ganjil Informatika Kelas 11 SMA",
    subject: "Informatika",
    classLevel: "Kelas 11 SMA",
    questionsCount: 30,
    accessKey: "SMA11KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Jelaskan apa yang dimaksud dengan Membaca Lateral (Lateral Reading) dan mengapa keterampilan ini sangat penting saat mencari informasi digital!",
      "Sebutkan dan jelaskan 3 contoh perbuatan yang dilarang dalam Undang-Undang Informasi dan Transaksi Elektronik (UU ITE)!",
      "Apa yang dimaksud dengan Data Terbuka (Open Data)? Sebutkan minimal 2 keuntungan menggunakan data terbuka!",
      "Jelaskan perbedaan antara struktur data Stack (Tumpukan) dan Queue (Antrean) beserta contoh penerapannya di dunia nyata atau dunia komputasi!",
      "Jelaskan alur proses pengembangan program (Software Development Life Cycle) secara singkat, mulai dari tahap analisis hingga pemeliharaan!"
    ],
    questions: [
      {
        id: 1,
        question: "Mesin pencari (search engine) menggunakan algoritma khusus untuk menampilkan hasil pencarian. Bagian dari mesin pencari yang bertugas mengumpulkan data dari berbagai halaman web disebut...",
        options: ["Indexer", "Crawler / Spider", "Query Engine", "Ranker", "Database"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Operator pencarian yang digunakan untuk mencari kata atau frasa yang sangat spesifik (exact match) di Google adalah...",
        options: ["Tanda bintang (*)", "Tanda hubung (-)", "Tanda kutip (\"...\")", "Tanda kurung ()", "Tanda plus (+)"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Teknik evaluasi informasi dengan cara membuka beberapa tab/jendela baru di browser untuk memverifikasi sumber dan klaim informasi dari situs lain disebut...",
        options: ["Vertical reading", "Skimming", "Lateral reading", "Scanning", "Critical reading"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "Membaca lateral sangat penting dilakukan di era digital karena...",
        options: [
          "Mempercepat proses membaca keseluruhan artikel",
          "Mengurangi jumlah kuota internet yang digunakan",
          "Mengetahui kredibilitas sumber informasi dengan membandingkannya dengan sumber lain",
          "Membuat tampilan halaman web menjadi lebih menarik",
          "Menghindari iklan yang muncul di halaman web"
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Undang-Undang yang mengatur tentang Informasi dan Transaksi Elektronik di Indonesia adalah...",
        options: [
          "UU No. 11 Tahun 2008 dan perubahannya (UU No. 19 Tahun 2016)",
          "UU No. 14 Tahun 2008",
          "UU No. 20 Tahun 2003",
          "UU No. 36 Tahun 1999",
          "UU No. 11 Tahun 2012"
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Perbuatan berikut yang melanggar ketentuan dalam UU ITE adalah, kecuali...",
        options: [
          "Menyebarkan berita bohong (hoaks)",
          "Melakukan pencemaran nama baik melalui media sosial",
          "Mengakses sistem komputer orang lain tanpa izin (hacking)",
          "Menyebarkan karya cipta sendiri di blog pribadi",
          "Mendistribusikan konten bermuatan perjudian"
        ],
        correctAnswer: 3,
      },
      {
        id: 7,
        question: "Saat mencari jurnal ilmiah, mesin pencari spesifik yang paling tepat digunakan adalah...",
        options: ["Google Images", "Google Scholar", "Yahoo Answers", "Bing Maps", "Wikipedia"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Manakah dari pernyataan berikut yang merupakan langkah pertama dalam membaca lateral?",
        options: [
          "Membaca artikel dari awal hingga akhir secara detail",
          "Meninggalkan situs web yang sedang dibaca dan mencari informasi tentang situs atau penulisnya di tab lain",
          "Mencari kata kunci yang sulit di kamus",
          "Membagikan artikel ke media sosial",
          "Menulis komentar pada artikel tersebut"
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Pencipta karya digital memiliki hak eksklusif yang dilindungi oleh hukum. Hak ini disebut...",
        options: ["Hak asasi", "Hak cipta", "Hak paten", "Hak merek", "Hak pakai"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "Tujuan utama dari regulasi atau Undang-Undang ITE adalah...",
        options: [
          "Membatasi kebebasan berpendapat secara mutlak",
          "Melarang penggunaan internet di sekolah",
          "Memberikan rasa aman, keadilan, dan kepastian hukum bagi pengguna internet",
          "Memonitor semua percakapan pribadi warga negara",
          "Menurunkan jumlah pengguna internet"
        ],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "Proses inspeksi, pembersihan, dan pemodelan data dengan tujuan menemukan informasi yang berguna, menarik kesimpulan, dan mendukung pengambilan keputusan disebut...",
        options: ["Pengumpulan data", "Analisis data", "Penyimpanan data", "Keamanan data", "Visualisasi data"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Data yang dapat diakses, digunakan, dan dibagikan secara bebas oleh siapa saja dengan mencantumkan sumber aslinya disebut...",
        options: ["Big data", "Private data", "Open data (Data Terbuka)", "Encrypted data", "Classified data"],
        correctAnswer: 2,
      },
      {
        id: 13,
        question: "Karakteristik utama dari Open Data yang baik adalah, kecuali...",
        options: [
          "Dapat diakses publik",
          "Formatnya tertutup dan berbayar",
          "Tersedia dalam format yang dapat dibaca mesin (machine-readable)",
          "Memiliki lisensi terbuka",
          "Dapat dimodifikasi dan didistribusikan ulang"
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Penggunaan data seseorang secara komersial tanpa persetujuan (consent) dari pemilik data merupakan pelanggaran terhadap prinsip...",
        options: ["Data terbuka", "Data legal dan privasi", "Analisis prediktif", "Pengumpulan data", "Integritas data"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Web scraping adalah salah satu teknik pengumpulan data. Agar scraping tetap legal dan etis, hal yang harus diperhatikan adalah...",
        options: [
          "Mengambil data dari halaman login pribadi orang lain",
          "Menghiraukan file robots.txt pada situs web",
          "Mematuhi terms of service (ToS) dan file robots.txt dari situs web target",
          "Mengambil data dalam jumlah masif hingga server target down",
          "Menjual data hasil scraping tanpa izin"
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Tahapan pengolahan data setelah data dikumpulkan biasanya adalah...",
        options: ["Publikasi data", "Visualisasi data", "Data cleaning (pembersihan data)", "Pembuatan keputusan", "Penghapusan data"],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Data cleansing (pembersihan data) penting dilakukan karena...",
        options: [
          "Memperbesar ukuran file data",
          "Menghapus data yang valid",
          "Menghilangkan duplikasi, data tidak lengkap, atau format salah agar analisis akurat",
          "Membuat data lebih sulit dibaca oleh mesin",
          "Mengubah data menjadi grafik"
        ],
        correctAnswer: 2,
      },
      {
        id: 18,
        question: "Menyajikan hasil analisis data ke dalam bentuk grafik, diagram, atau peta disebut...",
        options: ["Transformasi data", "Visualisasi data", "Agregasi data", "Pengumpulan data", "Modeling data"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Dalam Python, library atau pustaka yang sering digunakan untuk memanipulasi dan menganalisis data terstruktur (seperti tabel) adalah...",
        options: ["TensorFlow", "PyGame", "Pandas", "Flask", "Tkinter"],
        correctAnswer: 2,
      },
      {
        id: 20,
        question: "Manfaat dari menggunakan data terbuka (open data) bagi masyarakat adalah...",
        options: [
          "Meningkatkan transparansi pemerintah",
          "Mendorong inovasi dan penelitian",
          "Memungkinkan masyarakat melakukan pengawasan",
          "Menciptakan aplikasi baru berbasis data",
          "Semua jawaban benar"
        ],
        correctAnswer: 4,
      },
      {
        id: 21,
        question: "Tahapan pertama dalam alur proses pengembangan program adalah...",
        options: ["Coding / Pemrograman", "Testing (Pengujian)", "Analisis masalah (Problem Analysis)", "Maintenance (Pemeliharaan)", "Dokumentasi"],
        correctAnswer: 2,
      },
      {
        id: 22,
        question: "Algoritma yang memecahkan masalah dengan membaginya menjadi sub-masalah yang lebih kecil, menyelesaikannya, dan menggabungkannya kembali disebut strategi...",
        options: ["Brute Force", "Divide and Conquer", "Greedy", "Backtracking", "Dynamic Programming"],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Strategi algoritmik yang selalu memilih pilihan lokal terbaik pada setiap langkah dengan harapan mendapatkan solusi optimal global adalah...",
        options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Brute force", "Rekursif"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Contoh implementasi algoritma Divide and Conquer pada pengurutan data adalah...",
        options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort", "Bogo Sort"],
        correctAnswer: 3,
      },
      {
        id: 25,
        question: "Struktur data yang menggunakan prinsip LIFO (Last In First Out) adalah...",
        options: ["Queue (Antrean)", "Stack (Tumpukan)", "Linked List", "Tree", "Graph"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Struktur data Tree (pohon) sangat cocok digunakan untuk...",
        options: [
          "Mengimplementasikan antrean kasir",
          "Menyimpan riwayat pencarian browser (undo/redo)",
          "Merepresentasikan data yang bersifat hierarkis (seperti struktur organisasi)",
          "Mencari rute terpendek antar kota",
          "Menyimpan data secara linear"
        ],
        correctAnswer: 2,
      },
      {
        id: 27,
        question: "Jika kita ingin membuat program simulasi antrean di rumah sakit, struktur data yang paling tepat digunakan adalah...",
        options: ["Stack", "Graph", "Tree", "Queue", "Array 2 Dimensi"],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "Analisis solusi atau kompleksitas algoritma biasanya diukur berdasarkan dua faktor utama, yaitu...",
        options: [
          "Waktu eksekusi (Time) dan penggunaan memori (Space)",
          "Bahasa pemrograman dan compiler",
          "Jumlah baris kode dan jumlah variabel",
          "Kecepatan internet dan spesifikasi komputer",
          "Sistem operasi dan perangkat keras"
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Notasi yang umum digunakan untuk mengekspresikan kompleksitas waktu (time complexity) dari sebuah algoritma adalah...",
        options: ["O-Notasi (Big-O notation)", "P-Notasi", "X-Notasi", "A-Notasi", "N-Notasi"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Dalam proses pengembangan program, kegiatan mencari dan memperbaiki kesalahan (bug) pada kode disebut...",
        options: ["Compiling", "Interpreting", "Debugging", "Designing", "Documenting"],
        correctAnswer: 2,
      },
    ],
  },

  // -------------------------------------------------------------
  // 6. KELAS 12 SMA - INFORMATIKA
  // -------------------------------------------------------------
  {
    id: "asas-12-ganjil",
    title: "ASAS Semester Ganjil Informatika Kelas 12 SMA",
    subject: "Informatika",
    classLevel: "Kelas 12 SMA",
    questionsCount: 30,
    accessKey: "SMA12KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Tuliskan contoh penulisan rumus IF bertingkat di Excel untuk menentukan nilai dengan kriteria: Jika rata-rata >= 90 maka \"A\", jika >= 80 maka \"B\", dan selain itu \"C\". Jelaskan juga kegunaan dari fungsi RANK!",
      "Sebutkan minimal 4 shortcut keyboard (kombinasi tombol pintas) yang sering digunakan di Microsoft Word beserta fungsinya! Sebutkan juga apa keunggulan utama Mobirise untuk mendesain website!",
      "Jelaskan apa yang dimaksud dengan Literasi Digital dan berikan satu contoh penerapannya yang baik di kalangan pelajar!",
      "Jelaskan perbedaan mendasar antara Single Board Computer (seperti Raspberry Pi) dengan Single Board Controller (seperti Arduino)!",
      "Sebutkan dan jelaskan secara singkat 4 pilar utama dalam Berpikir Komputasional (Computational Thinking)!"
    ],
    questions: [
      {
        id: 1,
        question: "Fungsi pada Microsoft Excel yang digunakan untuk mencari nilai rata-rata dari sekumpulan data adalah...",
        options: ["SUM", "MAX", "AVERAGE", "COUNT", "MIN"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "Rumus Excel yang tepat untuk menjumlahkan rentang data dengan kriteria tertentu (misalnya hanya menjumlahkan harga dari produk \"Buku\") adalah...",
        options: ["SUM", "SUMIF", "COUNTIF", "IF", "SUMIFS"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Jika Anda memiliki rentang sel C2:C10 dan ingin mencari nilai tertinggi dari rentang tersebut, rumus yang tepat adalah...",
        options: ["=MAX(C2:C10)", "=MIN(C2:C10)", "=HIGH(C2:C10)", "=AVERAGE(C2:C10)", "=RANK(C2:C10)"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Fungsi =MIN(B2:B20) pada Microsoft Excel akan menghasilkan keluaran berupa...",
        options: [
          "Nilai rata-rata dari sel B2 hingga B20",
          "Jumlah total dari sel B2 hingga B20",
          "Nilai tertinggi dari sel B2 hingga B20",
          "Nilai terendah dari sel B2 hingga B20",
          "Banyaknya sel yang terisi angka dari sel B2 hingga B20"
        ],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "Penulisan fungsi logika IF yang benar untuk menentukan status \"Tuntas\" jika nilai sel D5 lebih besar dari atau sama dengan 75 adalah...",
        options: [
          "=IF(D5>75; Tuntas; Belum Tuntas)",
          "=IF(D5>=75; \"Tuntas\"; \"Belum Tuntas\")",
          "=IF(\"Tuntas\", D5>=75, \"Belum Tuntas\")",
          "=IF(D5<75; \"Tuntas\"; \"Belum Tuntas\")",
          "=IF(D5=75; \"Tuntas\"; \"Belum Tuntas\")"
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Fungsi Excel yang digunakan untuk menghitung banyaknya sel yang berisi data bertipe angka (number) saja adalah...",
        options: ["COUNT", "COUNTA", "COUNTIF", "SUM", "SUMIF"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Fungsi RANK dalam Microsoft Excel digunakan untuk...",
        options: [
          "Mengurutkan data secara alfabetis",
          "Menentukan peringkat atau ranking suatu nilai dalam sekelompok data",
          "Menghitung jumlah kriteria",
          "Menggabungkan teks dari dua sel yang berbeda",
          "Mencari nilai yang sering muncul"
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Jika Anda ingin menghitung berapa banyak siswa yang memiliki jenis kelamin \"Laki-laki\" di kolom C, fungsi yang paling tepat digunakan adalah...",
        options: [
          "=COUNT(C2:C30)",
          "=SUMIF(C2:C30; \"Laki-laki\")",
          "=COUNTIF(C2:C30; \"Laki-laki\")",
          "=IF(C2:C30=\"Laki-laki\")",
          "=MAX(C2:C30)"
        ],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "Kombinasi tombol pintas (shortcut keyboard) untuk menyimpan dokumen secara cepat pada Microsoft Word adalah...",
        options: ["Ctrl + C", "Ctrl + P", "Ctrl + V", "Ctrl + S", "Ctrl + X"],
        correctAnswer: 3,
      },
      {
        id: 10,
        question: "Saat mengedit dokumen di Word, Anda menekan tombol kombinasi Ctrl + J. Efek yang akan terjadi pada paragraf tersebut adalah...",
        options: [
          "Teks menjadi rata kiri",
          "Teks menjadi rata tengah (Center)",
          "Teks menjadi rata kanan",
          "Teks menjadi tebal (Bold)",
          "Teks menjadi rata kiri dan kanan (Justify)"
        ],
        correctAnswer: 4,
      },
      {
        id: 11,
        question: "Shortcut yang digunakan untuk menambahkan slide baru (New Slide) saat membuat presentasi di Microsoft PowerPoint adalah...",
        options: ["Ctrl + N", "Ctrl + S", "Ctrl + M", "Ctrl + B", "Ctrl + P"],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "Untuk menjalankan tayangan presentasi (Slide Show) dari slide pertama pada PowerPoint, Anda dapat menekan tombol shortcut...",
        options: ["F1", "F2", "F3", "F4", "F5"],
        correctAnswer: 4,
      },
      {
        id: 13,
        question: "Aplikasi Mobirise dikenal sebagai perangkat lunak yang berfungsi untuk...",
        options: [
          "Mengolah angka dan statistik secara kompleks",
          "Membuat dan mendesain website secara offline dengan sistem drag and drop",
          "Mengedit video dan animasi",
          "Membuat program berbasis teks (coding) tingkat lanjut",
          "Meretas sistem keamanan jaringan"
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Salah satu keunggulan utama dari penggunaan aplikasi Mobirise bagi pemula adalah...",
        options: [
          "Memerlukan pemahaman bahasa pemrograman yang tinggi",
          "Hanya bisa dijalankan secara online",
          "Tidak memerlukan pemahaman bahasa pemrograman/coding yang dalam",
          "Biaya sewa server yang sangat mahal",
          "Tidak bisa menambahkan gambar dan video"
        ],
        correctAnswer: 2,
      },
      {
        id: 15,
        question: "Kemampuan individu dalam menemukan, mengevaluasi, dan membuat informasi menggunakan teknologi digital secara bijak disebut...",
        options: ["Berpikir Komputasional", "Literasi Digital", "Algoritma Pemrograman", "Logika Komputer", "Sistem Digital"],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "Salah satu tantangan terbesar bidang Informatika saat ini dalam masyarakat digital adalah...",
        options: [
          "Minimnya bahasa pemrograman",
          "Harga komputer yang sangat murah",
          "Masalah keamanan data privasi (Cybersecurity) dan penyebaran hoaks",
          "Berkurangnya penggunaan internet",
          "Komputer yang terlalu berat ukurannya"
        ],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Di bawah ini yang merupakan contoh dari Single Board Controller (SBC/Mikrokontroler) yang sering digunakan untuk pembelajaran adalah...",
        options: ["Raspberry Pi", "Arduino Uno", "Laptop ASUS", "PC Desktop", "Harddisk Eksternal"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Perbedaan mendasar antara Single Board Computer (contoh: Raspberry Pi) dengan Single Board Controller (contoh: Arduino) adalah...",
        options: [
          "Arduino memiliki sistem operasi seperti Windows, Raspberry Pi tidak",
          "Arduino menjalankan program tunggal tanpa OS, Raspberry Pi layaknya komputer mini yang memiliki OS utuh",
          "Arduino memiliki harga yang jauh lebih mahal",
          "Raspberry Pi hanya bisa menyalakan lampu LED",
          "Arduino menggunakan monitor secara langsung, Raspberry Pi tidak"
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Otak atau mikrokontroler utama yang digunakan pada papan Arduino Uno umumnya adalah tipe...",
        options: ["ATmega328P", "Intel Core i5", "AMD Ryzen 5", "Snapdragon 8", "ESP8266"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Komponen elektronika yang berfungsi untuk mendeteksi kondisi lingkungan, seperti suhu tubuh atau cahaya, dan mengirimnya ke Arduino disebut sebagai...",
        options: ["Aktuator", "Resistor", "Kapasitor", "Sensor", "Breadboard"],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "Aplikasi atau platform berbasis web yang paling populer digunakan untuk mensimulasikan rangkaian Arduino secara online adalah...",
        options: ["Microsoft Word", "Tinkercad", "Canva", "Mobirise", "Microsoft Excel"],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "Proses memecah masalah yang besar dan kompleks menjadi bagian-bagian atau masalah kecil yang lebih mudah diselesaikan disebut...",
        options: [
          "Pengenalan Pola (Pattern Recognition)",
          "Abstraksi (Abstraction)",
          "Algoritma (Algorithm)",
          "Dekomposisi (Decomposition)",
          "Debugging"
        ],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "Menghilangkan atau mengabaikan detail yang tidak penting, dan berfokus pada informasi utama yang relevan dengan penyelesaian masalah disebut...",
        options: ["Algoritma", "Abstraksi", "Dekomposisi", "Pengenalan Pola", "Coding"],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "Dua fungsi utama dan wajib (fundamental) yang selalu ada pada kerangka bahasa pemrograman C di Arduino adalah...",
        options: [
          "setup() dan start()",
          "begin() dan end()",
          "void setup() dan void loop()",
          "void main() dan void end()",
          "void input() dan void output()"
        ],
        correctAnswer: 2,
      },
      {
        id: 25,
        question: "Pada pemrograman Arduino, fungsi void setup() digunakan untuk...",
        options: [
          "Mengeksekusi kode berulang-ulang tanpa henti",
          "Menghentikan program",
          "Menulis kode inisialisasi yang dijalankan hanya satu kali saat Arduino dinyalakan",
          "Menyimpan data gambar",
          "Mengukur tegangan listrik"
        ],
        correctAnswer: 2,
      },
      {
        id: 26,
        question: "Tipe data yang paling umum digunakan pada pemrograman Arduino untuk menyimpan bilangan bulat (tanpa koma) adalah...",
        options: ["float", "char", "string", "boolean", "int"],
        correctAnswer: 4,
      },
      {
        id: 27,
        question: "Jika kita ingin mengatur Pin 13 pada Arduino agar berfungsi sebagai output (keluaran), sintaks penulisan yang benar adalah...",
        options: [
          "output(13, HIGH);",
          "pinMode(13, OUTPUT);",
          "digitalWrite(13, OUTPUT);",
          "analogWrite(13, HIGH);",
          "pinSetup(13, OUTPUT);"
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Struktur perulangan pada bahasa C di Arduino yang digunakan saat kita mengetahui secara pasti berapa kali suatu perintah diulang adalah...",
        options: ["if...else", "switch...case", "while", "do...while", "for"],
        correctAnswer: 4,
      },
      {
        id: 29,
        question: "Di dalam pemrograman Arduino, operator perbandingan logika untuk \"tidak sama dengan\" disimbolkan dengan...",
        options: ["==", "=!", "!=", "<>", ">*"],
        correctAnswer: 2,
      },
      {
        id: 30,
        question: "Perintah Serial.begin(9600); pada Arduino berfungsi untuk...",
        options: [
          "Mematikan papan Arduino setelah 9600 detik",
          "Mengatur delay selama 9600 milidetik",
          "Menginisialisasi komunikasi serial dengan kecepatan 9600 baud rate",
          "Memberikan tegangan sebesar 9600 mV ke sensor",
          "Membuka port USB nomor 9600"
        ],
        correctAnswer: 2,
      },
    ],
  },

  // -------------------------------------------------------------
  // 7. KELAS 7 SMP - KODING & AI (Access Key: KODING7KAPIN)
  // -------------------------------------------------------------
  {
    id: "koding-7-ganjil",
    title: "ASAS Semester Ganjil Koding & AI Kelas 7 SMP",
    subject: "Koding & AI", // <--- SUBJECT KHUSUS KODING & AI
    classLevel: "Kelas 7 SMP",
    questionsCount: 30,
    accessKey: "KODING7KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Sebutkan 3 macam shortcut (kombinasi tombol keyboard) di Microsoft Word yang sudah kamu pelajari beserta fungsinya masing-masing!",
      "Menurutmu, mengapa sebuah instruksi ke komputer (misalnya saat menyusun blok di Blockly) harus ditulis secara berurutan dan logis?",
      "Tuliskan urutan langkah logis (algoritma) yang benar untuk membuat segelas teh manis hangat di rumah!",
      "Dalam koding, terkadang program kita tidak berjalan dengan benar. Jelaskan apa yang dimaksud dengan debugging!",
      "Jelaskan perbedaan yang paling utama antara Data Primer dan Data Sekunder!"
    ],
    questions: [
      {
        id: 1,
        question: "Untuk menyalin (copy) teks di Microsoft Word, kita dapat menggunakan kombinasi tombol keyboard...",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + S", "Ctrl + Z"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Tombol shortcut yang digunakan untuk membatalkan perintah terakhir (undo) adalah...",
        options: ["Ctrl + X", "Ctrl + C", "Ctrl + Z", "Ctrl + V"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Jika kita ingin menebalkan tulisan pada Microsoft Word, kita bisa menggunakan ikon Bold atau shortcut...",
        options: ["Ctrl + I", "Ctrl + U", "Ctrl + B", "Ctrl + S"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "Setelah selesai mengetik dokumen, langkah penting yang harus dilakukan agar data tidak hilang adalah menyimpan file. Shortcut untuk menyimpannya adalah...",
        options: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Ukuran huruf (font size) standar yang sering digunakan untuk tugas sekolah yang formal biasanya adalah...",
        options: ["8", "12", "24", "72"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Aplikasi Microsoft Word merupakan program yang fungsi utamanya adalah sebagai perangkat lunak...",
        options: ["Pengolah angka", "Pembuat video", "Pengolah kata", "Bermain game"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "Agar teks yang kita ketik posisinya berada tepat di tengah-tengah halaman, kita dapat menggunakan fitur...",
        options: ["Align Left", "Align Right", "Center", "Justify"],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "Dalam logika pemrograman (seperti di Blockly atau Scratch), komputer hanya akan berjalan dengan benar jika instruksinya disusun secara...",
        options: ["Acak", "Berurutan dan logis", "Mundur", "Membingungkan"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Apa yang terjadi jika instruksi yang diberikan ke komputer tidak lengkap atau urutannya salah?",
        options: [
          "Komputer akan memperbaiki sendiri",
          "Program tetap berjalan lancar",
          "Program akan error atau tidak berjalan sesuai harapan",
          "Komputer akan langsung mati"
        ],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Di dalam Blockly, blok dengan tulisan \"Ulangi 10 kali\" (Loop) berfungsi untuk...",
        options: [
          "Menghapus perintah yang salah",
          "Mengulang perintah yang sama sebanyak 10 kali",
          "Mewarnai latar belakang layar",
          "Menyimpan file pekerjaan"
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "Jika kamu ingin karakter dalam program mengambil sebuah keputusan, misalnya \"Jika menabrak dinding, maka berbalik\", blok logika yang harus kamu gunakan adalah...",
        options: [
          "Jika - Maka (If-Then / Kondisi)",
          "Hapus semua (Clear)",
          "Cetak (Print)",
          "Mulai (Start)"
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Kegiatan mencari dan memperbaiki kesalahan (error/bug) dalam sebuah kode program disebut...",
        options: ["Coding", "Debugging", "Editing", "Copying"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Data yang kita peroleh dari hasil wawancara langsung dengan teman atau hasil pengamatan sendiri disebut data...",
        options: ["Sekunder", "Internal", "Primer", "Eksternal"],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "Informasi atau data yang kita dapatkan dari buku pelajaran atau artikel di internet termasuk dalam kelompok data...",
        options: ["Primer", "Sekunder", "Rahasia", "Pribadi"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Langkah pertama yang sangat penting sebelum kita mencari solusi untuk memecahkan sebuah masalah adalah...",
        options: [
          "Langsung mencari solusi secara acak",
          "Menyusun jadwal kegiatan",
          "Mengenali dan memahami masalah tersebut",
          "Membiarkan masalah sampai hilang sendiri"
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Perhatikan perintah berikut: \"Buka kulkas -> Masukkan makanan panas -> Tutup pintu kulkas\". Perintah tersebut adalah instruksi yang kurang tepat dalam kehidupan sehari-hari karena...",
        options: [
          "Dapat merusak fungsi kulkas",
          "Kulkas tidak bisa dibuka secara manual",
          "Langkahnya terlalu panjang",
          "Susunannya sangat logis"
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Salah satu tujuan kita menyusun instruksi yang baik dan berurutan adalah...",
        options: [
          "Membuat orang lain bingung",
          "Menyelesaikan masalah dengan tepat dan benar",
          "Memperbanyak daftar tulisan",
          "Menambah masalah baru"
        ],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Saat menyusun instruksi yang sangat panjang, cara terbaik agar lebih mudah dipahami dan dikerjakan adalah...",
        options: [
          "Memecah instruksi besar menjadi langkah-langkah kecil",
          "Mencampur aduk semua instruksi menjadi satu",
          "Menyembunyikan langkah yang paling penting",
          "Menggunakan bahasa sandi yang rumit"
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Tokoh, alur cerita, dan latar tempat merupakan bagian dari unsur pembentuk sebuah...",
        options: ["Tabel", "Data", "Cerita", "Program"],
        correctAnswer: 2,
      },
      {
        id: 20,
        question: "Ide dasar sebuah cerita yang baik bisa berasal dari hal-hal di bawah ini, kecuali...",
        options: [
          "Pengalaman pribadi sehari-hari",
          "Kejadian nyata di sekitar kita",
          "Imajinasi atau khayalan",
          "Menyalin karya cerita teman 100% tanpa izin"
        ],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "Konten digital yang sering digunakan untuk menyampaikan informasi data berbentuk gabungan gambar dan teks secara menarik disebut...",
        options: ["Audio visual", "Podcast", "Infografik", "Tabel angka"],
        correctAnswer: 2,
      },
      {
        id: 22,
        question: "Rekam jejak aktivitas seseorang ketika menggunakan internet (seperti riwayat pencarian atau komentar di media sosial) disebut...",
        options: ["Jejak kaki", "Jejak digital", "Sejarah dunia", "Memori komputer"],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Kemampuan kita untuk menggunakan, membaca, dan menyaring informasi di internet secara bijak, kritis, dan aman disebut...",
        options: ["Literasi digital", "Literasi buku", "Bermain internet", "Belanja online"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Salah satu contoh platform pembelajaran daring (digital) yang banyak digunakan di sekolah untuk mengumpulkan tugas adalah...",
        options: ["Instagram", "Google Classroom", "Shopee", "TikTok"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "Konten digital yang bentuknya hanya dapat didengar (tanpa video atau gambar bergerak), contohnya adalah...",
        options: ["Film pendek", "Podcast", "Infografik", "Artikel berita"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Fungsi dari tombol shortcut Ctrl + V di Microsoft Word adalah untuk...",
        options: [
          "Menyalin teks",
          "Menyimpan teks",
          "Menempelkan (Paste) teks yang sudah disalin sebelumnya",
          "Menghapus teks"
        ],
        correctAnswer: 2,
      },
      {
        id: 27,
        question: "Blok perintah \"Maju 1 langkah\" atau \"Belok Kanan\" dalam logika Blockly merupakan contoh dari sebuah...",
        options: ["Data", "Instruksi / Perintah", "Masalah", "Solusi"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Mengapa data atau informasi yang benar sangat penting dalam membantu kita mengambil sebuah keputusan?",
        options: [
          "Karena data membuat pikiran menjadi bingung",
          "Agar keputusan yang kita ambil akurat dan minim kekeliruan",
          "Karena sekadar disuruh oleh guru",
          "Agar laporan terlihat lebih panjang"
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Shortcut untuk menyeleksi atau memilih seluruh teks yang ada di dalam dokumen Word secara cepat (Select All) adalah...",
        options: ["Ctrl + S", "Ctrl + A", "Ctrl + Z", "Ctrl + C"],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "Dalam membuat sebuah program komputer sederhana, urutan langkah logis yang kita susun dari awal sampai tujuan akhir tercapai disebut dengan...",
        options: ["Algoritma", "Aplikasi", "Perangkat Keras", "Monitor"],
        correctAnswer: 0,
      },
    ],
  },
  // -------------------------------------------------------------
  // PAKET KODING & AI KELAS 8 SMP (Access Key: KODING8KAPIN)
  // -------------------------------------------------------------
  {
    id: "koding-8-ganjil",
    title: "ASAS Semester Ganjil Koding & AI Kelas 8 SMP",
    subject: "Koding & AI",
    classLevel: "Kelas 8 SMP",
    questionsCount: 30,
    accessKey: "KODING8KAPIN",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Jelaskan secara singkat dengan bahasamu sendiri, apa yang dimaksud dengan Komputasi!",
      "Sebutkan 3 (tiga) contoh shortcut keyboard (kombinasi tombol) pada aplikasi Microsoft Word beserta fungsinya!",
      "Apa perbedaan utama antara belajar koding menggunakan Scratch/Blockly dengan menggunakan bahasa pemrograman tekstual seperti Python?",
      "Jelaskan perbedaan antara Aplikasi Desktop dan Aplikasi Mobile (HP)!",
      "Menurutmu, mengapa belajar koding (pemrograman) itu penting meskipun nantinya cita-citamu bukan menjadi seorang programmer/ahli komputer?"
    ],
    questions: [
      {
        id: 1,
        question: "Alat utama yang digunakan dalam proses komputasi modern saat ini adalah...",
        options: ["Mesin tik", "Komputer / Laptop", "Televisi", "Radio"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Contoh penggunaan komputasi dalam membantu kehidupan sehari-hari di sekolah adalah...",
        options: [
          "Menyapu halaman sekolah",
          "Menghitung nilai rapor siswa secara otomatis",
          "Membuat kerajinan tangan dari kayu",
          "Menyiram tanaman"
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Proses menghitung, memproses data, dan mencari solusi dari sebuah masalah menggunakan komputer disebut...",
        options: ["Mengetik", "Komputasi", "Browsing", "Gaming"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Apa yang dimaksud dengan pemrograman atau koding?",
        options: [
          "Proses membongkar perangkat keras komputer",
          "Proses menulis instruksi atau kode agar dijalankan oleh komputer",
          "Proses mengetik surat menggunakan mesin tik",
          "Proses menghapus virus di komputer"
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Manfaat utama belajar bahasa pemrograman bagi siswa SMP adalah...",
        options: [
          "Mengembangkan kemampuan berpikir logis, kreatif, dan sistematis",
          "Membuat komputer menjadi lebih lambat",
          "Hanya untuk menghibur diri semata",
          "Membuat siswa kecanduan bermain komputer"
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Bahasa pemrograman visual yang menggunakan blok-blok (seperti menyusun puzzle) dan sangat cocok untuk pemula adalah...",
        options: ["C++", "Java", "Scratch", "PHP"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "Selain Scratch, platform dari Google yang juga menggunakan sistem pemrograman visual berbasis blok adalah...",
        options: ["Blockly", "Notepad", "Microsoft Word", "Microsoft Excel"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Saat kita baru pertama kali belajar koding, biasanya kita membuat program sederhana untuk menampilkan teks...",
        options: ["\"Goodbye, World!\"", "\"Hello, World!\"", "\"Error 404\"", "\"Game Over\""],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Perangkat lunak yang membantu programmer untuk menulis, menguji, dan menjalankan kode program dalam satu aplikasi disebut...",
        options: [
          "Compiler",
          "Interpreter",
          "IDE (Integrated Development Environment)",
          "Web Browser"
        ],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Aplikasi pengolah kata yang paling sering digunakan untuk mengetik dokumen dan membuat laporan adalah...",
        options: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Adobe Photoshop"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "Shortcut pada keyboard yang digunakan untuk menyalin (copy) teks di Microsoft Word adalah...",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + S"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Jika kita menekan shortcut Ctrl + V pada Microsoft Word, maka yang terjadi adalah...",
        options: [
          "Teks akan tersimpan (Save)",
          "Teks akan tertempel (Paste)",
          "Teks akan terhapus (Delete)",
          "Dokumen akan tercetak (Print)"
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Untuk menyimpan dokumen Microsoft Word yang sedang kita kerjakan dengan cepat, kita dapat menggunakan shortcut...",
        options: ["Ctrl + P", "Ctrl + S", "Ctrl + X", "Ctrl + B"],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Jika kita ingin menebalkan huruf atau teks pada Microsoft Word, kita bisa memblok teks tersebut lalu menekan...",
        options: ["Ctrl + I (Italic)", "Ctrl + U (Underline)", "Ctrl + B (Bold)", "Ctrl + E (Center)"],
        correctAnswer: 2,
      },
      {
        id: 15,
        question: "Tombol shortcut Ctrl + Z berfungsi untuk...",
        options: [
          "Undo (membatalkan perintah atau ketikan terakhir)",
          "Redo (mengulang perintah)",
          "Membuka dokumen baru",
          "Menutup aplikasi"
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Aplikasi pembelajaran digital seperti Google Classroom dan Zoom merupakan contoh dari...",
        options: [
          "Perangkat keras (Hardware)",
          "Sistem operasi komputer",
          "Pemanfaatan teknologi komputasi di bidang pendidikan",
          "Bahasa pemrograman tingkat tinggi"
        ],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Aplikasi yang bisa diakses langsung melalui URL di browser (seperti Google Chrome) tanpa perlu diinstal di hardisk disebut...",
        options: ["Aplikasi Desktop", "Aplikasi Web", "Aplikasi Mobile", "Aplikasi Server"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Aplikasi yang biasa kamu unduh melalui Google Play Store (Android) atau App Store (iOS) disebut aplikasi...",
        options: ["Desktop", "Mobile", "Web", "Konsol"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Microsoft Word yang terinstal secara offline di komputer atau laptop kamu termasuk ke dalam jenis aplikasi...",
        options: ["Mobile", "Web", "Desktop", "Server"],
        correctAnswer: 2,
      },
      {
        id: 20,
        question: "Aplikasi pengolah kata dari Google yang berbasis web dan otomatis tersimpan di Google Drive adalah...",
        options: ["Google Sheets", "Google Docs", "Google Slides", "Google Forms"],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "Fitur pada aplikasi kamera cerdas (seperti Google Lens atau Photomath) yang dapat mengenali objek atau tulisan merupakan salah satu contoh penerapan...",
        options: [
          "Kecerdasan Artifisial (AI)",
          "Jaringan internet lokal",
          "Perangkat keras (hardware) dasar",
          "Sistem pendingin komputer"
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Microsoft Excel adalah aplikasi berjenis spreadsheet. Fungsi utama dari spreadsheet adalah untuk...",
        options: [
          "Mengedit video dan suara",
          "Mengolah angka, tabel, dan data",
          "Membuat animasi 3D",
          "Menggambar ilustrasi"
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Di dalam Microsoft Excel, jika kita ingin mencari nilai rata-rata dari sekumpulan data, kita menggunakan fungsi...",
        options: ["MAX", "MIN", "AVERAGE", "SUM"],
        correctAnswer: 2,
      },
      {
        id: 24,
        question: "Fungsi SUM di dalam aplikasi spreadsheet digunakan untuk...",
        options: [
          "Mencari nilai tertinggi",
          "Mencari nilai terendah",
          "Menjumlahkan data angka",
          "Menghitung jumlah huruf"
        ],
        correctAnswer: 2,
      },
      {
        id: 25,
        question: "Aplikasi berbasis kuis interaktif seperti Kahoot sangat bermanfaat bagi siswa. Aplikasi ini termasuk dalam kategori aplikasi...",
        options: ["E-commerce", "Media Sosial", "Edukasi / E-learning", "Perbankan"],
        correctAnswer: 2,
      },
      {
        id: 26,
        question: "Menyelesaikan masalah yang besar dengan cara memecah-mecahnya menjadi instruksi yang lebih kecil dan berurutan disebut dengan berpikir...",
        options: [
          "Komputasional (Computational Thinking)",
          "Irasional",
          "Konvensional",
          "Tradisional"
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Saat kita membuat program di Scratch atau Blockly dan ternyata hasilnya tidak sesuai/error, proses untuk mencari dan memperbaiki kesalahan tersebut disebut...",
        options: ["Browsing", "Debugging", "Compiling", "Copying"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Perangkat lunak yang berfungsi menerjemahkan kode program baris demi baris saat program sedang berjalan disebut...",
        options: ["Compiler", "Interpreter", "Teks Editor", "Browser"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Bahasa pemrograman tekstual yang sangat populer saat ini dan dikenal memiliki sintaks yang mudah dibaca oleh pemula adalah...",
        options: ["Python", "Assembly", "Machine Code", "Binary"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Manakah pernyataan berikut yang paling tepat mengenai Blockly dan Scratch?",
        options: [
          "Blockly dan Scratch hanya bisa digunakan oleh programmer profesional.",
          "Blockly dan Scratch mengharuskan kita menghafal banyak kode bahasa Inggris yang rumit.",
          "Blockly dan Scratch sangat cocok untuk pemula karena menggunakan logika susun balok tanpa harus mengetik sintaks kode.",
          "Blockly dan Scratch adalah aplikasi untuk mengedit foto."
        ],
        correctAnswer: 2,
      },
    ],
  },
  // -------------------------------------------------------------
  // PAKET KODING & AI KELAS 9 SMP - GEMAS EDUTECH (Access Key: KODING9GEMAS)
  // -------------------------------------------------------------
  {
    id: "koding-9-ganjil",
    title: "ASAS Semester Ganjil Koding & AI Kelas 9 SMP",
    subject: "Koding & AI",
    classLevel: "Kelas 9 SMP",
    questionsCount: 30,
    accessKey: "KODING9GEMAS",
    teacher: "Adhi Surya Putra, S.Kom.",
    essayQuestions: [
      "Jelaskan secara singkat apa yang dimaksud dengan Ethical Hacking (Peretasan Etis) dan apa tujuannya!",
      "Sebutkan minimal 3 (tiga) kombinasi tombol shortcut pada keyboard (misalnya Ctrl+...) yang sering digunakan di aplikasi perkantoran (Word/Excel) beserta fungsinya masing-masing!",
      "Dalam problem solving dengan koding, jelaskan hubungan antara Algoritma, Flowchart, dan Pseudocode!",
      "Mengapa proses 'Debugging' sangat penting dilakukan setelah kita selesai mengetik sebuah kode program?",
      "Jelaskan bagaimana tindakan menjiplak atau plagiat kode program/karya orang lain di internet tanpa izin dapat memengaruhi reputasi seorang programmer!"
    ],
    questions: [
      {
        id: 1,
        question: "Shortcut keyboard untuk menyimpan dokumen kerja pada aplikasi Microsoft Word adalah...",
        options: ["Ctrl + S", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Kombinasi tombol Ctrl + C dan Ctrl + V pada komputer berfungsi secara berurutan untuk...",
        options: [
          "Menyimpan dan menghapus teks",
          "Menyalin (copy) dan menempelkan (paste) teks",
          "Membatal perintah dan mengulangi perintah",
          "Membuka dokumen dan menutup dokumen"
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Fungsi utama dari aplikasi Microsoft Excel adalah untuk...",
        options: [
          "Membuat desain grafis dan edit foto",
          "Mengolah angka dan data dalam bentuk tabel",
          "Membuat presentasi berbasis slide",
          "Membuat dokumen teks panjang seperti makalah"
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Pada Microsoft PowerPoint, tombol yang biasa digunakan untuk mulai menampilkan presentasi (Slide Show) secara penuh di layar adalah...",
        options: ["F1", "F2", "F5", "F12"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Tombol pada keyboard yang digunakan untuk membatalkan perintah terakhir yang baru saja kita lakukan (Undo) adalah...",
        options: ["Ctrl + X", "Ctrl + Z", "Ctrl + P", "Ctrl + A"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Platform pemrograman visual yang cocok untuk pemula dengan cara menyusun blok-blok bergambar seperti puzzle disebut...",
        options: ["Microsoft Word", "Blockly", "Excel", "PowerPoint"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "Saat mendesain dan membuat dunia atau permainan 3D di Roblox, perangkat lunak yang paling utama digunakan oleh pembuat game adalah...",
        options: ["Roblox Studio", "Roblox Player", "Microsoft Paint", "Mobirise"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Dalam belajar dasar bahasa pemrograman Python, perintah yang digunakan untuk mencetak atau menampilkan teks (output) ke layar adalah...",
        options: ["input()", "print()", "display()", "show()"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Simbol yang digunakan untuk membuat 'komentar' (tulisan yang tidak akan dieksekusi oleh program sebagai kode) pada bahasa Python adalah...",
        options: ["//", "< >", "#", "*"],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Perangkat lunak Mobirise sangat memudahkan kita karena fungsi utamanya digunakan untuk...",
        options: [
          "Menulis laporan keuangan",
          "Membuat game online multiplayer",
          "Meretas keamanan komputer",
          "Membuat website (situs web) tanpa perlu mengetik kode yang rumit"
        ],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "Tahapan pertama dalam melakukan 'problem solving' (penyelesaian masalah) menggunakan koding adalah...",
        options: [
          "Mengetik kode sebanyak mungkin",
          "Mengidentifikasi dan memahami masalahnya terlebih dahulu",
          "Langsung menjalankan program",
          "Mencari kesalahan (error) pada program"
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Proses mengubah algoritma yang sudah dirancang dengan baik menjadi kode program (sintaks) yang nyata disebut...",
        options: ["Perencanaan", "Evaluasi", "Implementasi", "Debugging"],
        correctAnswer: 2,
      },
      {
        id: 13,
        question: "Dalam dunia pemrograman, data yang dimasukkan oleh pengguna (user) ke dalam sebuah sistem atau program disebut...",
        options: ["Output", "Proses", "Input", "Syntax"],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "Ketika kalian menemukan 'error' atau kesalahan saat menjalankan program, tindakan yang paling tepat untuk dilakukan adalah...",
        options: [
          "Menutup laptop dan menyerah",
          "Melakukan proses debugging untuk mencari dan memperbaiki kesalahan",
          "Menghapus seluruh program dan mengganti bahasa pemrograman",
          "Menyalahkan perangkat komputer"
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Diagram yang menggunakan simbol-simbol bangun datar tertentu untuk menggambarkan alur logika sebuah program secara visual disebut...",
        options: ["Flowchart", "Pseudocode", "Source code", "Syntax"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Tujuan utama dari membuat flowchart sebelum membuat program adalah...",
        options: [
          "Memperindah tampilan program",
          "Mengurangi kapasitas file penyimpanan program",
          "Mempermudah visualisasi langkah-langkah penyelesaian masalah",
          "Menghindari keharusan mengetik kode"
        ],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Bahasa perantara yang bentuknya mirip dengan bahasa manusia sehari-hari untuk menjembatani antara algoritma dan kode program disebut...",
        options: ["Bahasa Mesin", "Pseudocode", "Flowchart", "Bahasa Biner"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Fungsi utama dari sebuah algoritma dalam koding adalah...",
        options: [
          "Menyusun langkah-langkah penyelesaian masalah secara sistematis dan terurut",
          "Membuat program berjalan lebih cepat tanpa batas",
          "Menentukan jenis komputer yang bisa digunakan",
          "Menyalin kode program dari internet secara otomatis"
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Manfaat utama dari proses berpikir logis dan sistematis sebelum mulai mengetik koding adalah...",
        options: [
          "Mempercepat proses bermain game komputer",
          "Membantu menyusun solusi secara logis dan lebih efisien",
          "Menghafalkan semua perintah bahasa pemrograman",
          "Membuat ukuran file program menjadi sangat besar"
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Menuliskan data pribadi yang sensitif seperti nomor telepon atau password secara langsung ke dalam kode program (hardcode) sangat tidak dianjurkan karena...",
        options: [
          "Akan memperlambat komputer",
          "Melanggar aturan penulisan spasi (indentasi)",
          "Mengancam privasi dan keamanan data jika program tersebar",
          "Membuat tulisan program tidak berwarna"
        ],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "Seorang programmer menemukan sebuah celah (bug) dalam aplikasi buatan rekan satu timnya. Ia membiarkan hal itu agar dirinya terlihat lebih hebat nantinya. Sikap ini dinilai melanggar etika karena...",
        options: [
          "Kurangnya tanggung jawab sosial dan kolaborasi tim yang baik",
          "Menghabiskan waktu terlalu banyak untuk mengecek program",
          "Menggunakan lisensi perangkat lunak yang salah",
          "Mencari keuntungan uang semata"
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Alasan utama seorang programmer menggunakan indentasi (jarak menjorok ke dalam/spasi awal baris) dalam penulisan kodenya adalah...",
        options: [
          "Membuat kode program terlihat warna-warni",
          "Menghindari kesalahan komputer rusak",
          "Menunjukkan struktur dan mempermudah manusia membaca logika program",
          "Menambah panjang file agar terlihat rumit"
        ],
        correctAnswer: 2,
      },
      {
        id: 23,
        question: "Jejak digital adalah rekaman aktivitas kita di internet. Pernyataan berikut yang paling benar tentang jejak digital adalah...",
        options: [
          "Semua aktivitas online kita selalu terhapus otomatis setelah 1 hari",
          "Jejak digital hanya akan muncul jika kita bermain game online saja",
          "Jejak digital bersifat sangat sementara dan selalu 100% aman",
          "Jejak digital bisa bertahan lama dan dapat berdampak pada masa depan"
        ],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "Bahaya utama dari jenis serangan siber 'ransomware' yang dilakukan oleh hacker tidak etis adalah...",
        options: [
          "Data penting milik korban dikunci/disandera dan dimintai uang tebusan",
          "Komputer korban akan meledak jika dinyalakan",
          "Data korban akan langsung dipublikasikan di koran",
          "Hacker memperbaiki sistem keamanan korban secara diam-diam"
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Seorang programmer yang etis dan baik akan selalu melakukan hal berikut jika menggunakan karya atau kode milik orang lain dari internet...",
        options: [
          "Menghapus nama pembuat aslinya agar terlihat seperti buatan sendiri",
          "Menghargai hak cipta dengan mencantumkan sumber pembuat asli kode tersebut",
          "Menjual karya tersebut dengan harga mahal",
          "Menggunakan karya tersebut untuk meretas komputer sekolah"
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Data pribadi tidak boleh disebarkan secara sembarangan di media sosial atau internet. Alasan paling tepat berdasarkan keamanan digital adalah...",
        options: [
          "Agar tidak mendapat PR tambahan dari guru",
          "Supaya terhindar dari iklan barang yang tidak disukai",
          "Karena bisa disalahgunakan oleh orang jahat untuk penipuan atau kejahatan lainnya",
          "Supaya lebih mudah membuat akun palsu"
        ],
        correctAnswer: 2,
      },
      {
        id: 27,
        question: "Tindakan meretas (hacking) sistem keamanan komputer yang dilakukan dengan izin pemilik sistem untuk mencari kelemahan agar bisa diperbaiki dikenal dengan istilah...",
        options: [
          "Black Hat Hacking",
          "Ethical Hacking (Peretasan Etis)",
          "Cyber Bullying",
          "Ransomware"
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Saat kalian membuat desain game di Roblox, bahasa pemrograman asli (script) yang biasanya berjalan di belakang layar Roblox Studio adalah...",
        options: ["Python", "C++", "Lua", "HTML"],
        correctAnswer: 2,
      },
      {
        id: 29,
        question: "Salah satu bentuk penerapan nyata dari Kecerdasan Artifisial (AI/Artificial Intelligence) yang sering kita gunakan di smartphone adalah...",
        options: [
          "Menggunakan kalkulator biasa",
          "Asisten virtual suara seperti Google Assistant atau Siri",
          "Menyalakan lampu senter di HP",
          "Mengirim pesan SMS biasa"
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "Jika ada orang di internet yang menghina, mempermalukan, atau mengancam orang lain menggunakan pesan digital, tindakan tersebut disebut...",
        options: ["Phishing", "Debugging", "Cyberbullying (Perundungan Siber)", "Problem Solving"],
        correctAnswer: 2,
      },
    ],
  },
];

export default function QuizASASPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizPackage | null>(null);
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [inputKey, setInputKey] = useState("");
  const [keyError, setKeyError] = useState(false);

  // State Pengerjaan Kuis
  const [activeQuizPackage, setActiveQuizPackage] = useState<QuizPackage | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("Semua");

  // Membuka Modal Access Key
  const handleOpenKeyModal = (quiz: QuizPackage) => {
    setSelectedQuiz(quiz);
    setInputKey("");
    setKeyError(false);
    setIsKeyModalOpen(true);
  };

  // Validasi Access Key dari Guru
  const handleVerifyKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuiz) return;

    if (inputKey.trim() === selectedQuiz.accessKey) {
      const questionsCopy = [...selectedQuiz.questions];
      for (let i = questionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
      }
      setShuffledQuestions(questionsCopy);
      setActiveQuizPackage(selectedQuiz);
      setIsKeyModalOpen(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setIsSubmitted(false);
      setScore(0);
    } else {
      setKeyError(true);
    }
  };

  // Memilih Jawaban
  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  // Submit Kuis & Hitung Skor
  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    shuffledQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });
    const finalScore = Math.round((calculatedScore / shuffledQuestions.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
  };

  // Reset Ujian / Keluar Kuis
  const handleExitQuiz = () => {
    setActiveQuizPackage(null);
    setShuffledQuestions([]);
    setSelectedQuiz(null);
  };

  // Filter Paket Kuis
  const filteredQuizzes = quizPackages.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === "Semua" || quiz.classLevel.includes(selectedClass);
    return matchesSearch && matchesClass;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* 1. HEADER HALAMAN & TOMBOL BACK PINTR */}
        <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            {activeQuizPackage ? (
              <button
                onClick={handleExitQuiz}
                className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-colors"
                title="Keluar dari Kuis"
              >
                <ArrowLeft size={20} />
              </button>
            ) : (
              <Link
                href="/dashboard"
                className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-colors"
                title="Kembali ke Dashboard"
              >
                <ArrowLeft size={20} />
              </Link>
            )}

            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
                Portal Asesmen Sumatif
              </span>
              <h1 className="text-xl font-black text-slate-900 mt-1">
                Quiz &amp; Ujian ASAS Interaktif
              </h1>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-400 font-medium">Pengampu Utama</p>
            <p className="text-xs font-bold text-slate-800">Adhi Surya Putra, S.Kom.</p>
          </div>
        </div>

        {/* 2. DAFTAR KUIS */}
        {!activeQuizPackage ? (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 w-full md:w-80">
                <Search size={16} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari paket ujian ASAS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs w-full focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <span className="text-xs font-bold text-slate-400 uppercase">Tingkatan:</span>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-700 focus:outline-none"
                >
                  <option value="Semua">Semua Kelas</option>
                  <option value="SMP">Tingkat SMP</option>
                  <option value="SMA">Tingkat SMA</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-emerald-50/70 border border-emerald-200/90 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      {/* BADGE SUBJECT DINAMIS SESUAI MATA PELAJARAN */}
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                        {quiz.subject} • {quiz.classLevel}
                      </span>
                      <Lock size={16} className="text-emerald-700" />
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                      {quiz.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {quiz.questionsCount} Soal Pilihan Ganda • Acak Otomatis
                    </p>
                  </div>

                  <div className="pt-4 border-t border-emerald-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">
                        A
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600">
                        Pak Adhi S.Kom
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenKeyModal(quiz)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-emerald-200 transition-all flex items-center gap-1.5"
                    >
                      <KeyRound size={14} /> Kerjakan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 3. TAMPILAN PENGERJAAN SOAL KUIS */
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-md space-y-6">
            {!isSubmitted ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="font-bold text-slate-900 text-sm">{activeQuizPackage.title}</h2>
                    <span className="text-xs font-bold text-indigo-600">
                      Soal Ke- {currentQuestionIndex + 1} dari {shuffledQuestions.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 max-w-full sm:max-w-md max-h-32 overflow-y-auto p-1 bg-slate-50 rounded-2xl border border-slate-100">
                    {shuffledQuestions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`w-7 h-7 rounded-lg text-[11px] font-bold transition-all shrink-0 ${
                          currentQuestionIndex === idx
                            ? "bg-indigo-600 text-white shadow-sm"
                            : selectedAnswers[idx] !== undefined
                            ? "bg-indigo-100 text-indigo-700 border border-indigo-200"
                            : "bg-white text-slate-500 hover:bg-slate-200 border border-slate-200"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Soal Pilihan Ganda */}
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 leading-relaxed">
                    {shuffledQuestions[currentQuestionIndex].question}
                  </h3>

                  <div className="space-y-3 pt-2">
                    {shuffledQuestions[currentQuestionIndex].options.map((option, optIdx) => {
                      const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                            isSelected
                              ? "border-indigo-600 bg-indigo-50/80 text-indigo-950 font-semibold shadow-sm"
                              : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-full border-2 flex shrink-0 ${
                              isSelected
                                ? "border-indigo-600 bg-indigo-600"
                                : "border-slate-300 bg-white"
                            }`}
                          />
                          <span className="text-sm">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tombol Navigasi Soal */}
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                  >
                    Sebelumnya
                  </button>

                  {currentQuestionIndex < shuffledQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-200"
                    >
                      Selanjutnya &rarr;
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-200"
                    >
                      Kirim Jawaban &amp; Selesai
                    </button>
                  )}
                </div>

                {/* SECTION SOAL ESSAY */}
                {activeQuizPackage.essayQuestions && activeQuizPackage.essayQuestions.length > 0 && (
                  <div className="mt-10 pt-8 border-t-2 border-slate-100 space-y-6">
                    <div className="bg-indigo-50/80 border border-indigo-100 p-4 rounded-2xl">
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        Bagian B: Soal Uraian / Essay (Kerjakan di Lembar Jawaban)
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Jawablah pertanyaan-pertanyaan di bawah ini secara singkat dan jelas.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {activeQuizPackage.essayQuestions.map((essay, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                          <p className="text-xs font-bold text-slate-800 whitespace-pre-line">
                            {idx + 1}. {essay}
                          </p>
                          <textarea
                            rows={3}
                            placeholder="Tuliskan jawaban kamu di sini..."
                            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-700 focus:outline-none focus:border-indigo-600 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Hasil Nilai */
              <div className="text-center space-y-6 py-4">
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
                  <Trophy size={40} />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900">Asesmen Selesai!</h2>
                  <p className="text-xs text-slate-500 mt-1">Nilai evaluasi PG kamu telah tercatat:</p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block px-12">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Skor Akhir Pilihan Ganda</p>
                  <p className="text-5xl font-black text-indigo-600">{score}</p>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={handleExitQuiz}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-xs font-bold shadow-lg shadow-indigo-200 transition-all"
                  >
                    Kembali ke Daftar Kuis
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. MODAL POP-UP ACCESS KEY */}
        {isKeyModalOpen && selectedQuiz && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in fade-in zoom-in-95">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
                  <KeyRound size={28} />
                </div>
                <h3 className="font-black text-slate-900 text-lg">Masukkan Access Key Ujian</h3>
                <p className="text-xs text-slate-500">
                  Minta token rahasia dari <strong>Pak Adhi S.Kom</strong> untuk membuka {selectedQuiz.title}.
                </p>
              </div>

              <form onSubmit={handleVerifyKey} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Contoh: SMPDANSMA"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    className={`w-full bg-slate-50 border rounded-2xl p-3.5 text-center font-mono font-bold text-sm tracking-wider focus:outline-none transition-all ${
                      keyError
                        ? "border-red-500 text-red-600 bg-red-50/50"
                        : "border-slate-200 focus:border-indigo-600 text-slate-800"
                    }`}
                  />
                  {keyError && (
                    <p className="text-[11px] text-red-500 font-bold text-center mt-2">
                      ❌ Access Key Salah! Silakan cek kembali token dari guru.
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsKeyModalOpen(false)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold py-3.5 rounded-xl transition-all"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all"
                  >
                    Masuk &amp; Kerjakan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}