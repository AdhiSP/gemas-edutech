"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, BookOpen } from "lucide-react";

interface QuestionSample {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ClassSamplePackage {
  id: string;
  title: string;
  subject: string;
  classLevel: string;
  questions: QuestionSample[];
}

const samplePackages: ClassSamplePackage[] = [
  // SMP INFORMATIKA
  {
    id: "sample-inf-7",
    title: "Latihan Contoh Soal Informatika Kelas 7 SMP",
    subject: "Informatika",
    classLevel: "Kelas 7 SMP",
    questions: [
      {
        id: 1,
        question: "Fondasi Berpikir Komputasional yang dilakukan dengan memecah masalah besar menjadi bagian-bagian kecil dinamakan...",
        options: ["Abstraksi", "Dekomposisi", "Pengenalan Pola", "Algoritma"],
        correctAnswer: 1,
        explanation: "Dekomposisi adalah teknik memecah masalah kompleks menjadi sub-masalah kecil yang lebih mudah diselesaikan."
      },
      {
        id: 2,
        question: "Tombol pintas (shortcut) keyboard untuk menempelkan (paste) teks yang sudah disalin adalah...",
        options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
        correctAnswer: 2,
        explanation: "Ctrl + C untuk Copy (Salin), Ctrl + X untuk Cut (Potong), dan Ctrl + V untuk Paste (Tempel)."
      },
      {
        id: 3,
        question: "Komponen fisik komputer yang bertugas sebagai pemroses utama atau 'otak' sistem adalah...",
        options: ["RAM", "Harddisk", "CPU", "Monitor"],
        correctAnswer: 2,
        explanation: "CPU (Central Processing Unit) berfungsi mengolah instruksi logika dan perhitungan utama komputer."
      },
      {
        id: 4,
        question: "Perangkat lunak yang berfungsi sebagai peramban web (browser) untuk mengakses internet adalah...",
        options: ["Google Chrome", "Microsoft Word", "Adobe Photoshop", "Windows Media Player"],
        correctAnswer: 0,
        explanation: "Google Chrome, Mozilla Firefox, dan Edge adalah contoh web browser."
      },
      {
        id: 5,
        question: "Urutan langkah-langkah logis dan terstruktur untuk memecahkan suatu masalah disebut...",
        options: ["Variabel", "Algoritma", "Hardware", "Database"],
        correctAnswer: 1,
        explanation: "Algoritma adalah susunan urutan logis penyelesaian masalah."
      }
    ]
  },
  {
    id: "sample-inf-8",
    title: "Latihan Contoh Soal Informatika Kelas 8 SMP",
    subject: "Informatika",
    classLevel: "Kelas 8 SMP",
    questions: [
      {
        id: 1,
        question: "Rumus Microsoft Excel yang digunakan untuk menghitung total penjumlahan nilai dalam sel adalah...",
        options: ["=AVERAGE()", "=SUM()", "=MAX()", "=COUNT()"],
        correctAnswer: 1,
        explanation: "=SUM() digunakan untuk menjumlahkan sekumpulan angka pada range sel Excel."
      },
      {
        id: 2,
        question: "Format ekstensi file standar hasil dokumen Microsoft Word adalah...",
        options: [".xlsx", ".pptx", ".docx", ".pdf"],
        correctAnswer: 2,
        explanation: "File Word memiliki format bawaan .docx atau .doc."
      },
      {
        id: 3,
        question: "Pertemuan antara kolom (Column) dan baris (Row) pada spreadsheet Excel disebut...",
        options: ["Range", "Worksheet", "Cell (Sel)", "Ribbon"],
        correctAnswer: 2,
        explanation: "Sel (Cell) adalah kotak pertemuan antara kolom (misal: A) dan baris (misal: 1) -> A1."
      },
      {
        id: 4,
        question: "Sistem pengelola konten berbasis web untuk membuat dan memublikasikan situs web disebut...",
        options: ["CMS (Content Management System)", "DBMS", "RAM", "BIOS"],
        correctAnswer: 0,
        explanation: "CMS memudahkan pengguna mengelola konten website tanpa koding rumit."
      },
      {
        id: 5,
        question: "Shortcut Ctrl + Z pada aplikasi perkantoran berfungsi untuk...",
        options: ["Menyimpan file", "Membatalkan perintah (Undo)", "Mengulang perintah (Redo)", "Mencetak kertas"],
        correctAnswer: 1,
        explanation: "Ctrl + Z adalah perintah Undo untuk mengembalikan kondisi sebelum perubahan."
      }
    ]
  },
  {
    id: "sample-inf-9",
    title: "Latihan Contoh Soal Informatika Kelas 9 SMP",
    subject: "Informatika",
    classLevel: "Kelas 9 SMP",
    questions: [
      {
        id: 1,
        question: "Bentuk representasi visual diagram dengan simbol geometris untuk menggambarkan alur algoritma disebut...",
        options: ["Pseudocode", "Flowchart", "Array", "Graph"],
        correctAnswer: 1,
        explanation: "Flowchart menggunakan simbol bangun datar (seperti oval, jajaran genjang, persegi panjang) untuk menggambarkan alur logika."
      },
      {
        id: 2,
        question: "Struktur data linear yang bekerja dengan prinsip LIFO (Last In First Out) adalah...",
        options: ["Queue", "Stack", "Tree", "Graph"],
        correctAnswer: 1,
        explanation: "Stack (tumpukan) menerapkan LIFO, di mana elemen terakhir masuk akan keluar pertama kali."
      },
      {
        id: 3,
        question: "Operasi logika yang membalik nilai biner masukan (Input 0 menghasilkan Output 1) adalah...",
        options: ["AND", "OR", "NOT", "XOR"],
        correctAnswer: 2,
        explanation: "Gerbang/Operasi NOT membalikkan nilai logika Boolean."
      },
      {
        id: 4,
        question: "Aplikasi desain grafis dan presentasi praktis berbasis cloud (online) adalah...",
        options: ["Canva", "Paint", "Notepad", "CorelDraw Offline"],
        correctAnswer: 0,
        explanation: "Canva adalah platform web berbasis cloud untuk desain praktis."
      },
      {
        id: 5,
        question: "Rekam jejak seluruh aktivitas seseorang saat berselancar di internet disebut...",
        options: ["Jejak Kaki", "Jejak Digital (Digital Footprint)", "History RAM", "IP Address"],
        correctAnswer: 1,
        explanation: "Jejak digital mencakup riwayat pencarian, unggahan, dan interaksi online."
      }
    ]
  },

  // SMA INFORMATIKA
  {
    id: "sample-inf-10",
    title: "Latihan Contoh Soal Informatika Kelas 10 SMA",
    subject: "Informatika",
    classLevel: "Kelas 10 SMA",
    questions: [
      {
        id: 1,
        question: "Teknik mengumpulkan dan mengambil data otomatis dari halaman web untuk analisis dinamakan...",
        options: ["Web Scraping", "Data Entry", "Web Phishing", "Data Encryption"],
        correctAnswer: 0,
        explanation: "Web Scraping adalah proses ekstraksi data otomatis dari situs web."
      },
      {
        id: 2,
        question: "Algoritma pencarian yang bekerja membagi dua bagian data terurut secara berulang dinamakan...",
        options: ["Linear Search", "Binary Search", "Bubble Sort", "Insertion Sort"],
        correctAnswer: 1,
        explanation: "Binary Search membagi ruang pencarian menjadi dua pada setiap langkah."
      },
      {
        id: 3,
        question: "Struktur data antrean yang mengusung prinsip FIFO (First In First Out) adalah...",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: 1,
        explanation: "Queue (antrean) memproses elemen yang pertama kali datang terlebih dahulu."
      },
      {
        id: 4,
        question: "Operator pencarian Google untuk menyertakan frasa persis tanpa perubahan kata adalah...",
        options: ["Tanda minus (-)", "Tanda bintang (*)", "Tanda kutip (\"...\")", "Tanda tilde (~)"],
        correctAnswer: 2,
        explanation: "Tanda kutip digunakan untuk mencari exact match."
      },
      {
        id: 5,
        question: "Dalam struktur Tree, node paling atas yang tidak memiliki induk (parent) dinamakan...",
        options: ["Leaf", "Branch", "Root", "Edge"],
        correctAnswer: 2,
        explanation: "Root (akar) adalah fondasi node utama teratas pada hierarki Tree."
      }
    ]
  },
  {
    id: "sample-inf-11",
    title: "Latihan Contoh Soal Informatika Kelas 11 SMA",
    subject: "Informatika",
    classLevel: "Kelas 11 SMA",
    questions: [
      {
        id: 1,
        question: "Bagian dari mesin pencari yang bertugas memindai dan mengumpulkan dokumen dari web adalah...",
        options: ["Crawler / Spider", "Indexer", "Query Engine", "Database"],
        correctAnswer: 0,
        explanation: "Web Crawler / Spider bertugas melacak tautan dan mengunduh konten web."
      },
      {
        id: 2,
        question: "Library Python yang populer digunakan untuk analisis dan manipulasi data tabel terstruktur adalah...",
        options: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
        correctAnswer: 1,
        explanation: "Pandas menyediakan struktur DataFrame untuk pengolahan data tabel."
      },
      {
        id: 3,
        question: "Strategi algoritma yang memecahkan masalah dengan membaginya menjadi sub-masalah kecil lalu menggabungkannya adalah...",
        options: ["Greedy", "Divide and Conquer", "Brute Force", "Dynamic Programming"],
        correctAnswer: 1,
        explanation: "Divide & Conquer membagi masalah, menyelesaikan secara rekursif, lalu menggabungkan solusi."
      },
      {
        id: 4,
        question: "Teknik verifikasi berita dengan membuka beberapa tab baru untuk mengecek kredibilitas situs dinamakan...",
        options: ["Vertical Reading", "Lateral Reading", "Skimming", "Scanning"],
        correctAnswer: 1,
        explanation: "Lateral reading adalah metode memeriksa klaim dengan membandingkan sumber luar di tab baru."
      },
      {
        id: 5,
        question: "Notasi standar untuk mengukur kompleksitas waktu algoritma adalah...",
        options: ["Big-O Notation", "Small-o Notation", "Delta Notation", "Binary Notation"],
        correctAnswer: 0,
        explanation: "Big-O Notation merepresentasikan batas atas kompleksitas algoritma."
      }
    ]
  },
  {
    id: "sample-inf-12",
    title: "Latihan Contoh Soal Informatika Kelas 12 SMA",
    subject: "Informatika",
    classLevel: "Kelas 12 SMA",
    questions: [
      {
        id: 1,
        question: "Mikrokontroler populer yang digunakan dalam pembelajaran proyek elektronika IoT dasar adalah...",
        options: ["Raspberry Pi 4", "Arduino Uno (ATmega328P)", "Intel Core i7", "Nvidia Jetson"],
        correctAnswer: 1,
        explanation: "Arduino Uno adalah Single Board Controller berbasis ATmega328P."
      },
      {
        id: 2,
        question: "Dua fungsi wajib yang harus ada pada struktur koding C++ Arduino adalah...",
        options: ["main() dan end()", "void setup() dan void loop()", "start() dan run()", "init() dan execute()"],
        correctAnswer: 1,
        explanation: "void setup() berjalan sekali saat nyala, void loop() berjalan berulang terus-menerus."
      },
      {
        id: 3,
        question: "Rumus Excel untuk menghitung total angka hanya jika memenuhi kriteria tertentu adalah...",
        options: ["=COUNTIF()", "=SUMIF()", "=AVERAGEIF()", "=IF()"],
        correctAnswer: 1,
        explanation: "=SUMIF() menjumlahkan data sel yang sesuai syarat kriteria."
      },
      {
        id: 4,
        question: "Aplikasi offline visual drag-and-drop untuk pembuatan website instan bagi pemula adalah...",
        options: ["Mobirise", "VS Code", "XAMPP", "Figma"],
        correctAnswer: 0,
        explanation: "Mobirise memudahkan pembuatan web responsive secara visual."
      },
      {
        id: 5,
        question: "Sintaks Arduino C++ untuk mengatur status Pin 13 sebagai moda keluaran (output) adalah...",
        options: ["digitalWrite(13, HIGH);", "pinMode(13, OUTPUT);", "analogRead(13);", "Serial.begin(13);"],
        correctAnswer: 1,
        explanation: "pinMode(pin, mode) digunakan untuk mengonfigurasi pin sebagai INPUT atau OUTPUT."
      }
    ]
  },

  // SMP KODING & AI
  {
    id: "sample-kod-7",
    title: "Latihan Contoh Soal Koding & AI Kelas 7 SMP",
    subject: "Koding & AI",
    classLevel: "Kelas 7 SMP",
    questions: [
      {
        id: 1,
        question: "Platform pemrograman berbasis visual balok yang dikembangkan oleh Google adalah...",
        options: ["Scratch", "Blockly", "Python", "Java"],
        correctAnswer: 1,
        explanation: "Blockly adalah pustaka visual programming susun balok buatan Google."
      },
      {
        id: 2,
        question: "Blok logika 'Ulangi / Repeat' pada koding berfungsi untuk...",
        options: ["Menghapus kode", "Menjalankan instruksi berulang kali", "Mematikan program", "Menyimpan file"],
        correctAnswer: 1,
        explanation: "Looping / perulangan menghemat baris kode untuk perintah berulang."
      },
      {
        id: 3,
        question: "Proses melacak dan membenarkan kesalahan (error/bug) pada kode program disebut...",
        options: ["Compiling", "Debugging", "Scanning", "Scraping"],
        correctAnswer: 1,
        explanation: "Debugging adalah aktivitas mendeteksi dan memperbaiki bug."
      },
      {
        id: 4,
        question: "Data yang diperoleh langsung dari sumber utama hasil wawancara atau survei sendiri dinamakan...",
        options: ["Data Sekunder", "Data Primer", "Data Terbuka", "Data Digital"],
        correctAnswer: 1,
        explanation: "Data primer diambil secara langsung dari objek pertama."
      },
      {
        id: 5,
        question: "Perintah pertama yang disusun dalam program koding disebut...",
        options: ["Output", "Instruksi / Algoritma Awal", "Debugging", "Variable"],
        correctAnswer: 1,
        explanation: "Program dieksekusi secara sekuensial dari instruksi awal."
      }
    ]
  },
  {
    id: "sample-kod-8",
    title: "Latihan Contoh Soal Koding & AI Kelas 8 SMP",
    subject: "Koding & AI",
    classLevel: "Kelas 8 SMP",
    questions: [
      {
        id: 1,
        question: "Teks standar pertama yang biasanya ditampilkan saat pertama kali belajar koding adalah...",
        options: ["\"Hello World!\"", "\"Goodbye World!\"", "\"Welcome Admin\"", "\"System Error\""],
        correctAnswer: 0,
        explanation: "\"Hello World!\" adalah tradisi program pertama dalam pembelajaran koding."
      },
      {
        id: 2,
        question: "Bahasa pemrograman tekstual yang terkenal dengan sintaksnya yang mudah dibaca pemula adalah...",
        options: ["Assembly", "Python", "C++", "Pascal"],
        correctAnswer: 1,
        explanation: "Python memiliki sintaks yang bersih mirip bahasa Inggris sehari-hari."
      },
      {
        id: 3,
        question: "Teknologi seperti Google Lens yang dapat mengenali objek foto merupakan penerapan...",
        options: ["Kecerdasan Artifisial (AI)", "Cloud Storage", "Antivirus", "Spreadsheet"],
        correctAnswer: 0,
        explanation: "Computer Vision pada AI memungkinkan komputer mengenali objek visual."
      },
      {
        id: 4,
        question: "Aplikasi yang dijalankan langsung lewat web browser tanpa diinstal di laptop dinamakan...",
        options: ["Aplikasi Desktop", "Aplikasi Web", "Aplikasi Mobile", "Aplikasi Native"],
        correctAnswer: 1,
        explanation: "Aplikasi Web dapat diakses via URL di browser."
      },
      {
        id: 5,
        question: "Perangkat lunak terpadu tempat programmer menulis, menguji, dan merunning kode disebut...",
        options: ["IDE (Integrated Development Environment)", "DBMS", "OS", "Browser"],
        correctAnswer: 0,
        explanation: "IDE menyediakan editor, debugger, dan compiler dalam satu tempat."
      }
    ]
  },
  {
    id: "sample-kod-9",
    title: "Latihan Contoh Soal Koding & AI Kelas 9 SMP",
    subject: "Koding & AI",
    classLevel: "Kelas 9 SMP",
    questions: [
      {
        id: 1,
        question: "Perintah dalam bahasa Python untuk mencetak output tulisan ke layar adalah...",
        options: ["print()", "write()", "cout <<", "system.out.println()"],
        correctAnswer: 0,
        explanation: "Perintah `print()` digunakan untuk menampilkan keluaran di Python."
      },
      {
        id: 2,
        question: "Karakter yang digunakan untuk membuat catatan/komentar (tidak dieksekusi) di Python adalah...",
        options: ["//", "#", "/*", "<!--"],
        correctAnswer: 1,
        explanation: "Simbol pagar `#` menandai komentar satu baris pada Python."
      },
      {
        id: 3,
        question: "Bahasa scripting utama yang digunakan di belakang layar Roblox Studio adalah...",
        options: ["Python", "Lua", "C#", "JavaScript"],
        correctAnswer: 1,
        explanation: "Roblox Studio menggunakan bahasa Lua untuk scripting permainannya."
      },
      {
        id: 4,
        question: "Kegiatan meretas sistem komputer dengan izin resmi untuk menemukan celah keamanan dinamakan...",
        options: ["Black Hat Hacking", "Ethical Hacking", "Cracking", "Phishing"],
        correctAnswer: 1,
        explanation: "Ethical Hacker (White Hat) bekerja secara legal untuk mengamankan sistem."
      },
      {
        id: 5,
        question: "Jenis kejahatan siber yang menyandera data korban dan meminta uang tebusan disebut...",
        options: ["Ransomware", "Spyware", "Adware", "Spamming"],
        correctAnswer: 0,
        explanation: "Ransomware mengenskripsi data korban sampai tebusan dibayar."
      }
    ]
  }
];

export default function ContohSoalPage() {
  const [selectedPkg, setSelectedPkg] = useState<ClassSamplePackage>(samplePackages[0]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (showResults) return;
    setUserAnswers({ ...userAnswers, [qId]: optIdx });
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER BANK SOAL */}
        <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                Latihan Interaktif Gemas Edutech
              </span>
              <h1 className="text-xl font-black text-slate-900 mt-1">Bank Contoh Soal &amp; Pembahasan</h1>
            </div>
          </div>
        </div>

        {/* SELECTOR KELAS & MAPEL */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Pilih Paket Contoh Soal:</h2>
          <div className="flex flex-wrap gap-2">
            {samplePackages.map((pkg) => {
              const isActive = selectedPkg.id === pkg.id;
              return (
                <button
                  key={pkg.id}
                  onClick={() => {
                    setSelectedPkg(pkg);
                    setUserAnswers({});
                    setShowResults(false);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-200"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {pkg.subject} • {pkg.classLevel}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTAINER QUIZ EXAMPLES */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                {selectedPkg.subject} ({selectedPkg.classLevel})
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-2">{selectedPkg.title}</h2>
              <p className="text-xs text-slate-400 mt-0.5">5 Soal Latihan Terbuka untuk dipelajari siswa sebelum Ujian</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center gap-2 transition-all"
              >
                <RefreshCw size={14} /> Reset Jawaban
              </button>

              {!showResults ? (
                <button
                  onClick={() => setShowResults(true)}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-200 transition-all"
                >
                  Cek Kunci &amp; Pembahasan
                </button>
              ) : (
                <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl border border-indigo-100">
                  Mode Pembahasan Aktif
                </span>
              )}
            </div>
          </div>

          {/* DAFTAR 5 SOAL */}
          <div className="space-y-8">
            {selectedPkg.questions.map((q, qIdx) => {
              const selectedOpt = userAnswers[q.id];
              const isCorrect = selectedOpt === q.correctAnswer;

              return (
                <div key={q.id} className="p-6 bg-slate-50/60 rounded-3xl border border-slate-200/80 space-y-4">
                  <div className="flex gap-3">
                    <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                      {qIdx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 pt-1 leading-relaxed">{q.question}</h3>
                  </div>

                  {/* OPTIONS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-10">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOpt === optIdx;
                      let optionStyle = "bg-white border-slate-200 text-slate-700 hover:border-slate-300";

                      if (showResults) {
                        if (optIdx === q.correctAnswer) {
                          optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold";
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = "bg-rose-50 border-rose-400 text-rose-950 font-semibold";
                        }
                      } else if (isOptionSelected) {
                        optionStyle = "bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold shadow-sm";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`text-left p-3.5 rounded-2xl border text-xs transition-all flex items-center gap-3 ${optionStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* PEMBAHASAN MATERI */}
                  {showResults && (
                    <div className="ml-10 p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="flex items-center gap-1 font-bold text-emerald-600">
                            <CheckCircle size={16} /> Jawaban Kamu Benar!
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 font-bold text-rose-600">
                            <XCircle size={16} /> Jawaban Kamu Kurang Tepat
                          </span>
                        )}
                        <span className="text-slate-400 font-medium ml-auto">
                          Kunci: ({String.fromCharCode(65 + q.correctAnswer)})
                        </span>
                      </div>
                      <p className="text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <strong>Pembahasan:</strong> {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}