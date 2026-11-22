"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Compass,
  FileText,
  BookOpen,
  CheckSquare,
  PlayCircle,
  Search,
  Download,
  Gamepad2,
  Sparkles,
  ArrowRight,
  BookMarked,
  BarChart3,
  Calendar as CalendarIcon,
  Users,
  TrendingUp,
  Clock,
  Menu,
  X,
} from "lucide-react";

interface SyllabusStep {
  stage: string;
  title: string;
  description: string;
}

interface LearningMapItem {
  id: string;
  codeName: string;
  title: string;
  category: "Pelajaran Sekolah" | "Pelajaran Teknologi";
  level: "SMP" | "SMA";
  summary: string;
  nextSteps: SyllabusStep[];
}

const learningMaps: LearningMapItem[] = [
  {
    id: "inf-7-9",
    codeName: "Informatika SMP",
    title: "Informatika Fase D (Kelas 7–9)",
    category: "Pelajaran Sekolah",
    level: "SMP",
    summary: "Mengenal cara kerja komputer, berpikir komputasional, pengolah kata/angka, dan keamanan digital dasar.",
    nextSteps: [
      {
        stage: "Tahap 1",
        title: "Berpikir Komputasional & Perangkat",
        description: "Memahami dekomposisi, pengenalan pola, abstraksi, algoritma, serta hardware/software.",
      },
      {
        stage: "Tahap 2",
        title: "Aplikasi Perkantoran & Data",
        description: "Menggunakan shortcut dokumen, rumus dasar spreadsheet, dan menyusun alur logika/flowchart.",
      },
      {
        stage: "Selanjutnya Ngapain?",
        title: "Lanjut ke Koding & AI / Informatika SMA",
        description: "Setelah tuntas di tingkat SMP, lanjutkan ke pemrograman visual/Python atau pendalaman struktur data & analisis informasi di SMA.",
      },
    ],
  },
  {
    id: "inf-10-12",
    codeName: "Informatika SMA",
    title: "Informatika Fase E/F (Kelas 10–12)",
    category: "Pelajaran Sekolah",
    level: "SMA",
    summary: "Riset informasi terstruktur, evaluasi fakta, strategi algoritma, pengolahan data, web builder, dan mikrokontroler.",
    nextSteps: [
      {
        stage: "Tahap 1",
        title: "Pencarian Data & Periksa Fakta",
        description: "Menggunakan operator pencarian, web scraping dasar, lateral reading, dan cek bias informasi.",
      },
      {
        stage: "Tahap 2",
        title: "Algoritma, Struktur Data & Pengolahan Data",
        description: "Mempelajari stack, queue, tree, binary search, divide and conquer, serta data cleaning.",
      },
      {
        stage: "Selanjutnya Ngapain?",
        title: "Praktik Web Builder, Mikrokontroler & Latihan Soal",
        description: "Terapkan logika ke proyek web (Mobirise) atau simulasi mikrokontroler, lalu uji pemahaman di Contoh Soal dan Quiz.",
      },
    ],
  },
  {
    id: "koding-ai",
    codeName: "Koding & AI",
    title: "Koding & Kecerdasan Artifisial (Kelas 7–9)",
    category: "Pelajaran Teknologi",
    level: "SMP",
    summary: "Dari logika blok visual menuju bahasa tekstual, pembuatan proyek digital, dan etika keamanan siber.",
    nextSteps: [
      {
        stage: "Tahap 1",
        title: "Logika Blok (Blockly / Scratch) & Debugging",
        description: "Menyusun instruksi berurutan, perulangan, percabangan kondisi, dan melacak bug/error.",
      },
      {
        stage: "Tahap 2",
        title: "Python Dasar, Roblox Studio & AI Sehari-hari",
        description: "Mengenal perintah output/komentar Python, skrip dasar, web builder, dan contoh penerapan AI.",
      },
      {
        stage: "Selanjutnya Ngapain?",
        title: "Jaga Etika Siber & Lanjut ke Game / Quiz",
        description: "Biasakan keamanan data pribadi dan anti-plagiarisme, lalu coba tantangan di Game Pembelajaran atau Quiz.",
      },
    ],
  },
];

const visitorWeeklyData = [
  { day: "Sen", count: 142, height: "65%" },
  { day: "Sel", count: 198, height: "85%" },
  { day: "Rab", count: 230, height: "95%" },
  { day: "Kam", count: 185, height: "75%" },
  { day: "Jum", count: 210, height: "90%" },
  { day: "Sab", count: 120, height: "50%" },
  { day: "Ming", count: 95, height: "40%" },
];

const calendarDays = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  active: [3, 5, 8, 9, 12, 14, 15, 16, 19, 21, 22, 25, 26, 28].includes(i + 1),
  intensity: (i % 3) + 1,
}));

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"peta" | "jalur" | "kisi" | "media" | "analisis">("peta");
  const [categoryFilter, setCategoryFilter] = useState<
    "Semua" | "Pelajaran Sekolah" | "Pelajaran Teknologi"
  >("Semua");
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [selectedMapId, setSelectedMapId] = useState<string | null>(null);
  
  // STATE MENU DRAWER MOBILE
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSearch(searchInput.trim());
  };

  const filteredMaps = learningMaps.filter((item) => {
    const matchesCategory = categoryFilter === "Semua" || item.category === categoryFilter;
    const q = appliedSearch.toLowerCase();
    if (!q) return matchesCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.codeName.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.nextSteps.some(
        (step) =>
          step.title.toLowerCase().includes(q) || step.description.toLowerCase().includes(q)
      );
    return matchesCategory && matchesQuery;
  });

  const selectedMap =
    learningMaps.find((item) => item.id === selectedMapId) || null;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* HEADER KHUSUS MOBILE (TAMPIL HANYA DI HP) */}
      <header className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Gemas Edutech Logo"
            className="w-8 h-8 object-contain rounded-lg"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <span className="text-base font-black text-slate-900 tracking-tight">
            Gemas<span className="text-emerald-600">Edutech</span>
          </span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* OVERLAY BACKGROUND MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* SIDEBAR NAVIGATION (RESPONSIF DESKTOP & MOBILE DRAWER) */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 md:z-auto h-screen w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* BRANDING LOGO DESKTOP */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <Link href="/dashboard" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Gemas Edutech Logo"
                className="w-11 h-11 object-contain rounded-xl drop-shadow-sm"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-black text-slate-900 tracking-tight leading-none">
                  Gemas<span className="text-emerald-600">Edutech</span>
                </span>
                <span className="text-[9px] font-extrabold text-slate-400 tracking-wider uppercase mt-1">
                  Generasi Emas
                </span>
              </div>
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">
                Konten Pembelajaran
              </p>
              <nav className="space-y-1">
                <button
                  onClick={() => { setActiveTab("peta"); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all ${
                    activeTab === "peta"
                      ? "bg-sky-50 text-sky-700 border border-sky-200 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Globe size={18} /> Peta Belajar
                </button>

                <button
                  onClick={() => { setActiveTab("jalur"); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all ${
                    activeTab === "jalur"
                      ? "bg-sky-50 text-sky-700 border border-sky-200 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Compass size={18} /> Jalur Belajar
                </button>

                <Link
                  href="/dashboard/generator-modul"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all text-slate-600 hover:bg-slate-50"
                >
                  <Sparkles size={18} className="text-red-600" /> Generator Modul
                </Link>

                <button
                  onClick={() => { setActiveTab("kisi"); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all ${
                    activeTab === "kisi"
                      ? "bg-sky-50 text-sky-700 border border-sky-200 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <FileText size={18} /> Kisi-Kisi Ujian
                </button>

                <Link
                  href="/dashboard/contoh-soal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all text-slate-600 hover:bg-slate-50"
                >
                  <BookOpen size={18} /> Contoh Soal
                </Link>

                <Link
                  href="/dashboard/quiz"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all text-slate-600 hover:bg-slate-50"
                >
                  <CheckSquare size={18} /> Quiz
                </Link>

                <Link
                  href="/dashboard/game"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all text-slate-600 hover:bg-slate-50"
                >
                  <Gamepad2 size={18} className="text-emerald-600" /> Game Pembelajaran
                </Link>

                <button
                  onClick={() => { setActiveTab("media"); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all ${
                    activeTab === "media"
                      ? "bg-sky-50 text-sky-700 border border-sky-200 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <PlayCircle size={18} /> Media
                </button>

                <button
                  onClick={() => { setActiveTab("analisis"); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition-all ${
                    activeTab === "analisis"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <BarChart3 size={18} className="text-emerald-600" /> Analisis Pengunjung
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* PROFIL GURU PANEL */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-3 mt-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-600 to-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
            A
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-slate-800 truncate">Educator</p>
            <p className="text-[10px] text-slate-400 truncate">Adhi Surya Putra, S.Kom.</p>
          </div>
        </div>
      </aside>

      {/* AREA KONTEN UTAMA */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
        {/* 1. TAB: PETA BELAJAR */}
        {activeTab === "peta" && (
          <div className="max-w-5xl space-y-6">
            <div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900">Peta Belajar</h1>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Peta topik pembelajaran yang saling terhubung untuk melihat alur materi dan langkah berikutnya setelah menyelesaikan suatu topik.
              </p>
            </div>

            {/* FORM PENCARIAN RESPONSIF */}
            <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-2.5 bg-white border border-slate-300 rounded-xl px-4 py-2.5 flex-1 shadow-sm focus-within:border-sky-600">
                <Search size={16} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Cari Peta Belajar (contoh: Informatika, Python, Koding)..."
                  className="bg-transparent text-xs w-full focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all shrink-0"
              >
                <Search size={15} /> Cari
              </button>
            </form>

            {/* FILTER KATEGORI RESPONSIF */}
            <div className="flex flex-wrap gap-2">
              {(["Semua", "Pelajaran Sekolah", "Pelajaran Teknologi"] as const).map((cat) => {
                const active = categoryFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                      active
                        ? "bg-sky-50 text-sky-700 border-sky-500 shadow-sm"
                        : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* KARTU PETA BELAJAR (GRID RESPONSIF 1 KOLOM DI HP, 3 KOLOM DI LAPTOP) */}
            {filteredMaps.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMaps.map((item, idx) => {
                  const isCardSelected = selectedMap?.id === item.id;
                  const cardTint =
                    idx % 3 === 0
                      ? "bg-sky-50/70 border-sky-200 hover:border-sky-400"
                      : idx % 3 === 1
                      ? "bg-emerald-50/70 border-emerald-200 hover:border-emerald-400"
                      : "bg-red-50/50 border-red-200 hover:border-red-300";

                  const badgeTint =
                    item.category === "Pelajaran Sekolah"
                      ? "bg-sky-100 text-sky-800"
                      : "bg-emerald-100 text-emerald-800";

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedMapId(item.id)}
                      className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${cardTint} ${
                        isCardSelected ? "ring-2 ring-sky-600 shadow-md" : "shadow-sm"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold text-slate-800">
                            {item.codeName}
                          </span>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${badgeTint}`}>
                            {item.category}
                          </span>
                        </div>
                        <h2 className="text-sm font-black text-slate-900 leading-snug">
                          {item.title}
                        </h2>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/70 text-[11px] font-bold text-sky-700">
                        <span>Lihat Silabus &amp; Alur</span>
                        <ArrowRight size={14} />
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs text-slate-500">
                Peta belajar tidak ditemukan untuk kata kunci tersebut.
              </div>
            )}

            {/* DETAIL SILABUS (RESPONSIF) */}
            {selectedMap && (
              <div className="bg-white p-5 md:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <BookMarked size={16} className="text-emerald-600" />
                      <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider">
                        Silabus &amp; Alur Selanjutnya
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mt-1">
                      {selectedMap.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedMapId(null)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded-xl self-start sm:self-auto"
                  >
                    Tutup Silabus
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedMap.nextSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-2xl border space-y-2 ${
                        sIdx === selectedMap.nextSteps.length - 1
                          ? "bg-emerald-50/70 border-emerald-200"
                          : "bg-slate-50 border-slate-200/80"
                      }`}
                    >
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200 text-sky-700">
                        {step.stage}
                      </span>
                      <h4 className="text-xs font-extrabold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  <Link
                    href="/dashboard/contoh-soal"
                    className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    Latihan Contoh Soal
                  </Link>
                  <Link
                    href="/dashboard/quiz"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    Kerjakan Quiz
                  </Link>
                  <Link
                    href="/dashboard/game"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    Main Game Pembelajaran
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. TAB: JALUR BELAJAR */}
        {activeTab === "jalur" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                Jenjang SMP
              </span>
              <h3 className="font-bold text-slate-900 text-base">Informatika &amp; Koding/AI Kelas 7–9</h3>
              <p className="text-xs text-slate-500">
                Mencakup Berpikir Komputasional, Perangkat Keras/Lunak, Blok Visual (Blockly/Scratch), Python Dasar, dan Keamanan Digital.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[10px] font-bold bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200">
                Jenjang SMA
              </span>
              <h3 className="font-bold text-slate-900 text-base">Informatika Kelas 10–12</h3>
              <p className="text-xs text-slate-500">
                Mencakup Evaluasi Informasi, Struktur Data &amp; Strategi Algoritma, Pengolahan Data, Web Builder, serta Mikrokontroler.
              </p>
            </div>
          </div>
        )}

        {/* 3. TAB: KISI-KISI UJIAN */}
        {activeTab === "kisi" && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Tingkatan</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Tingkatan</option>
                  <option>SMP</option>
                  <option>SMA</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Kelas</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Kelas</option>
                  <option>Kelas 7</option>
                  <option>Kelas 8</option>
                  <option>Kelas 9</option>
                  <option>Kelas 10</option>
                  <option>Kelas 11</option>
                  <option>Kelas 12</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Jenis Ujian</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>ASAS Semester Ganjil</option>
                  <option>ASAS Semester Genap</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Mata Pelajaran</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Informatika</option>
                  <option>Koding &amp; AI</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Kisi-Kisi ASAS Ganjil Kelas 9 SMP", questions: "30 PG + 5 Essay" },
                { title: "Kisi-Kisi ASAS Ganjil Kelas 8 SMP", questions: "30 PG + 5 Essay" },
                { title: "Kisi-Kisi ASAS Ganjil Kelas 10 SMA", questions: "30 PG + 5 Essay" },
              ].map((item, idx) => (
                <div key={idx} className="bg-emerald-50/60 border border-emerald-200/80 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                      Informatika
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.questions}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-emerald-100">
                    <span className="text-[11px] font-semibold text-slate-500">Adhi Surya Putra, S.Kom</span>
                    <button className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1">
                      <Download size={14} /> Unduh DOCX
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. TAB: MEDIA */}
        {activeTab === "media" && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <PlayCircle size={48} className="mx-auto text-sky-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base">Media &amp; Modul Tutorial Video</h3>
            <p className="text-xs text-slate-500 mt-1">Video rekaman praktikum lab komputer SMP &amp; SMA.</p>
          </div>
        )}

        {/* 5. TAB: ANALISIS PENGUNJUNG */}
        {activeTab === "analisis" && (
          <div className="max-w-5xl space-y-6">
            <div>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Statistik Portal Real-Time
              </span>
              <h1 className="text-2xl font-black text-slate-900 mt-2">
                Analisis Pengunjung &amp; Aktivitas Belajar
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Pantau trafik pengunjung harian, aktivitas pengerjaan kuis, dan tingkat partisipasi siswa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-slate-400 uppercase">Total Pengunjung</p>
                  <h3 className="text-xl font-black text-slate-900">1,170 Sesi</h3>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <TrendingUp size={12} /> +18.4% minggu ini
                  </span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckSquare size={24} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-slate-400 uppercase">Quiz Diselesaikan</p>
                  <h3 className="text-xl font-black text-slate-900">482 Selesai</h3>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <TrendingUp size={12} /> +12.1% minggu ini
                  </span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-slate-400 uppercase">Rata-Rata Durasi</p>
                  <h3 className="text-xl font-black text-slate-900">14 Menit</h3>
                  <span className="text-[10px] font-bold text-slate-400 mt-0.5 block">
                    Stabil per pengguna
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">Tren Trafik Pengunjung Minggu Ini</h3>
                    <p className="text-xs text-slate-400">Total partisipasi harian di Gemas Edutech</p>
                  </div>
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-xl">7 Hari Terakhir</span>
                </div>

                <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-slate-100">
                  {visitorWeeklyData.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-extrabold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.count}
                      </span>
                      <div
                        style={{ height: item.height }}
                        className="w-full bg-gradient-to-t from-sky-600 to-emerald-500 rounded-t-xl group-hover:from-sky-700 group-hover:to-emerald-600 transition-all shadow-sm"
                      />
                      <span className="text-[10px] font-bold text-slate-500">{item.day}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-1">
                  <span>Puncak Trafik: <strong>Rabu (230 Pengunjung)</strong></span>
                  <span className="text-emerald-600 font-bold">Aktif &amp; Lancar</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={18} className="text-emerald-600" />
                    <h3 className="text-sm font-extrabold text-slate-900">Kalender Log Aktivitas Belajar</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500">November 2026</span>
                </div>

                <p className="text-xs text-slate-500">
                  Warna hijau menandakan hari dengan aktivitas kuis &amp; pembelajaran tertinggi.
                </p>

                <div className="grid grid-cols-7 gap-2 pt-1">
                  {calendarDays.map((d) => {
                    let dayStyle = "bg-slate-100 text-slate-400";
                    if (d.active) {
                      if (d.intensity === 1) dayStyle = "bg-emerald-100 text-emerald-800 font-bold border border-emerald-200";
                      if (d.intensity === 2) dayStyle = "bg-emerald-400 text-white font-bold shadow-sm";
                      if (d.intensity === 3) dayStyle = "bg-emerald-600 text-white font-black shadow-sm";
                    }

                    return (
                      <div
                        key={d.day}
                        className={`h-9 rounded-xl flex items-center justify-center text-xs transition-transform hover:scale-105 cursor-pointer ${dayStyle}`}
                        title={`Tanggal ${d.day} November - Status: ${d.active ? "Aktif" : "Tidak ada event"}`}
                      >
                        {d.day}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-100">
                  <span>Rendah</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-200"></span>
                    <span className="w-3 h-3 rounded-md bg-emerald-400"></span>
                    <span className="w-3 h-3 rounded-md bg-emerald-600"></span>
                  </div>
                  <span>Sangat Tinggi</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}