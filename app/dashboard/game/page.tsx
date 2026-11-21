"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [targetCode] = useState('print("Gemas Edutech")');
  const [userCode, setUserCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleCheck = () => {
    if (userCode.trim() === targetCode) {
      setScore(score + 10);
      setFeedback("🎉 Hebat! Logika koding kamu 100% Benar!");
    } else {
      setFeedback("❌ Masih ada kesalahan penulisan sintaks. Periksa tanda petik atau kurung.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Arena Edukasi Interaktif
              </span>
              <h1 className="text-xl font-black text-slate-900 mt-1">Game Pembelajaran Koding</h1>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Skor Game Kamu</p>
            <p className="text-lg font-black text-emerald-600">{score} PTS</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="font-extrabold text-slate-900 text-sm">Level 1: Misi Mencetak Output Python</h2>
            <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Mudah</span>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-slate-600">
              Tuliskan kode Python sederhana untuk menampilkan kalimat: <strong>Gemas Edutech</strong>
            </p>
            <div className="p-4 bg-slate-900 rounded-2xl text-slate-100 font-mono text-xs space-y-2">
              <p className="text-slate-400">// Target Output yang diinginkan:</p>
              <p className="text-emerald-400 font-bold">{targetCode}</p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 block">Area Koding Kamu:</label>
            <textarea
              rows={3}
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              placeholder='Tulis kode kamu di sini, contoh: print("Gemas Edutech")'
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 font-mono text-xs focus:outline-none focus:border-emerald-600"
            />
          </div>

          {feedback && (
            <p className={`text-xs font-bold p-3 rounded-xl ${feedback.includes("100%") ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-200"}`}>
              {feedback}
            </p>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleCheck}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-200 transition-all"
            >
              <Play size={16} /> Jalankan Kode Saya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}