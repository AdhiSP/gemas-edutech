"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Clock, Layers } from "lucide-react";

interface FacilityItem {
  id: number;
  name: string;
}

const facilityList: FacilityItem[] = [
  { id: 1, name: "Semester 1 & 2" },
  { id: 2, name: "Capaian Pembelajaran" },
  { id: 3, name: "Tujuan Pembelajaran" },
  { id: 4, name: "Alur Tujuan Pembelajaran" },
  { id: 5, name: "ATP" },
  { id: 6, name: "KKTP" },
  { id: 7, name: "LKPD" },
  { id: 8, name: "PROTA" },
  { id: 9, name: "RPS" },
  { id: 10, name: "Assessment" },
  { id: 11, name: "Aplikasi Raport" },
  { id: 12, name: "Alokasi Waktu" },
  { id: 13, name: "Daftar Nilai" },
  { id: 14, name: "Daftar Hadir" },
  { id: 15, name: "Jurnal Harian" },
  { id: 16, name: "Cover" },
  { id: 17, name: "Nilai Raport" },
  { id: 18, name: "KALDIK" },
  { id: 19, name: "Laporan Wali Kelas / PPT" },
  { id: 20, name: "Analisis Penilaian" },
  { id: 21, name: "Jurnal Mengajar" },
  { id: 22, name: "Kisi-Kisi & Soal" },
];

export default function GeneratorModulPage() {
  const [selectedFacility, setSelectedFacility] = useState<number>(1);
  const [mapel, setMapel] = useState("Informatika");
  const [kelas, setKelas] = useState("Kelas 7 SMP");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER BRANDING GEMAS EDUTECH */}
        <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Fitur Administrasi Guru AI
              </span>
              <h1 className="text-xl font-black text-slate-900 mt-1">
                Generator Modul Ajar &amp; Perangkat Pembelajaran
              </h1>
            </div>
          </div>
        </div>

        {/* CONTROLS DROPDOWN SELECTION */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-[11px] font-extrabold text-slate-400 block mb-1.5 uppercase tracking-wider">
              Mata Pelajaran:
            </label>
            <select
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs font-bold text-slate-700 focus:outline-none focus:border-sky-500 transition-all cursor-pointer"
            >
              <option value="Informatika">Informatika</option>
              <option value="Koding & AI">Koding &amp; AI</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-extrabold text-slate-400 block mb-1.5 uppercase tracking-wider">
              Tingkat Kelas:
            </label>
            <select
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs font-bold text-slate-700 focus:outline-none focus:border-sky-500 transition-all cursor-pointer"
            >
              <option value="Kelas 7 SMP">Kelas 7 SMP</option>
              <option value="Kelas 8 SMP">Kelas 8 SMP</option>
              <option value="Kelas 9 SMP">Kelas 9 SMP</option>
              <option value="Kelas 10 SMA">Kelas 10 SMA</option>
              <option value="Kelas 11 SMA">Kelas 11 SMA</option>
              <option value="Kelas 12 SMA">Kelas 12 SMA</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-extrabold text-slate-400 block mb-1.5 uppercase tracking-wider">
              Pilih Dokumen Perangkat (Dropdown):
            </label>
            <select
              value={selectedFacility}
              onChange={(e) => setSelectedFacility(Number(e.target.value))}
              className="w-full bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-xs font-bold text-emerald-900 focus:outline-none focus:border-emerald-600 transition-all cursor-pointer"
            >
              {facilityList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id}. {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* CONTAINER REFERENSI (Sesuai Skema Warna Logo: Sky Blue, Leaf Green, Metallic Red) */}
        <div className="bg-gradient-to-br from-sky-50 via-emerald-50/40 to-blue-50/60 p-8 md:p-10 rounded-3xl border border-sky-200/80 shadow-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
              <span className="text-sky-600">Fasilitas</span> <span className="text-emerald-600">Modul</span> <span className="text-red-600">Ajar</span>
            </h2>
            <p className="text-xs md:text-sm font-medium text-slate-600">
              Semua perangkat ajar lengkap, praktis, dan siap pakai
            </p>
          </div>

          {/* GRID 22 ITEMS DENGAN AKSEN GEMAS EDUTECH */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilityList.map((item) => {
              const isSelected = selectedFacility === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedFacility(item.id)}
                  className={`flex items-center gap-3.5 p-4 rounded-2xl text-left transition-all duration-200 shadow-sm ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white ring-4 ring-sky-200 shadow-md scale-[1.02]"
                      : "bg-white/95 hover:bg-white text-slate-800 border border-slate-200/80 hover:border-sky-300 hover:shadow"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full text-xs font-black flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-emerald-500 text-white shadow"
                        : "bg-sky-500 text-white"
                    }`}
                  >
                    {item.id}
                  </span>
                  <span className="text-xs font-bold truncate leading-tight">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ACTION BUTTON BERWARNA RED METALLIC / RED ACCENT */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-red-200 hover:shadow-red-300 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles size={18} /> Generate Perangkat Ajar ({facilityList.find(f => f.id === selectedFacility)?.name})
            </button>
          </div>
        </div>

        {/* MODAL POP-UP COMING SOON */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-slate-200 space-y-6 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 bg-red-50 border border-red-100 text-red-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
                <Clock size={32} />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Fitur Dalam Pengembangan
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight pt-1">
                  COMING SOON
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fitur Generator AI untuk <strong>{facilityList.find(f => f.id === selectedFacility)?.name}</strong> ({mapel} - {kelas}) sedang dirancang dan akan segera hadir di portal Gemas Edutech!
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-2xl text-xs transition-all shadow-md"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}