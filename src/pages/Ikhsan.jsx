import fotoProfil from '../foto-ikhsan.jpg'
import { Link } from 'react-router-dom'

function Ikhsan() {
  const dataDiri = {
    namaLengkap: "Muhammad Ikhsan Putra Abiasnyah",
    namaPanggilan: "Ikhsan",
    kelas: "T2F",
    jurusan: "Teknologi Informasi",
    universitas: "Universitas Brawijaya",
    domisili: "Malang, Jawa Timur",
    github: "https://github.com/mikhsanptra",
    instagram: "https://instagram.com/mikhsanptra",
    linkedin: "https://linkedin.com/in/mikhsanptra",
    email: "mikhsanptra@student.ub.ac.id",
    skills: ["ReactJS", "Tailwind CSS", "JavaScript", "UI/UX", "HTML", "CSS"],
    tentangDiri:
      "Halo, perkenalkan nama saya Muhammad Ikhsan Putra Abiasnyah. Saya adalah mahasiswa aktif di Universitas Brawijaya jurusan Teknologi Informasi. Saat ini saya sedang mendalami materi pemrograman web khususnya menggunakan ReactJS dan Tailwind CSS. Saya memiliki ketertarikan yang besar dalam bidang teknologi dan pengembangan aplikasi berbasis web. Di luar kegiatan akademik, saya senang mempelajari hal-hal baru terkait desain UI/UX dan logika pemrograman. Dengan mengikuti mata kuliah ini, saya berharap dapat meningkatkan kemampuan teknis saya agar siap bersaing di industri teknologi di masa depan. Saya percaya bahwa kolaborasi tim dan konsistensi belajar adalah kunci utama kesuksesan dalam dunia IT.",
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: dataDiri.github,
      display: "github.com/mikhsanptra",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: dataDiri.instagram,
      display: "@mikhsanptra",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: dataDiri.linkedin,
      display: "linkedin.com/in/mikhsanptra",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "Email",
      url: `mailto:${dataDiri.email}`,
      display: dataDiri.email,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">

        {/* Top Bar + Tombol Back */}
        <header className="relative z-10 border-b border-white/5">
          <div className="px-6 py-4 flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/[0.06] flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/[0.12] transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-sm font-medium hidden sm:inline">Kembali</span>
            </Link>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-500 font-mono">Online</span>
            </div>
          </div>
        </header>

        {/* Card Body */}
        <div className="p-8">

          {/* Header Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">Profil Mahasiswa</span>
          </div>

          {/* Foto Profil */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[3px]">
                <img
                  src={fotoProfil}
                  alt="Foto Profil Ikhsan"
                  className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900" />
            </div>
          </div>

          {/* Nama */}
          <h1 className="text-2xl font-bold text-orange-600 text-center mb-1">
            {dataDiri.namaPanggilan}
          </h1>
          <p className="text-emerald-400 text-sm text-center font-medium mb-6">
            Mahasiswa Aktif
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Kelas</p>
              <p className="text-sm text-white font-medium">{dataDiri.kelas}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Jurusan</p>
              <p className="text-sm text-white font-medium">{dataDiri.jurusan}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Universitas</p>
              <p className="text-sm text-white font-medium">{dataDiri.universitas}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Domisili</p>
              <p className="text-sm text-white font-medium">{dataDiri.domisili}</p>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="mb-6">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Media Sosial</h2>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.04] transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/15 transition-colors flex-shrink-0">
                    {social.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{social.name}</p>
                    <p className="text-sm text-emerald-400/80 group-hover:text-emerald-300 font-medium truncate transition-colors">
                      {social.display}
                    </p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {dataDiri.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/15 text-emerald-300 text-xs font-medium px-3 py-1.5 rounded-lg"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400/70" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-6" />

          {/* Tentang Diri */}
          <div>
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Tentang Diri</h2>
            <p className="text-sm text-slate-300 leading-relaxed text-justify">
              {dataDiri.tentangDiri}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-600">{dataDiri.universitas}</span>
            <span className="text-[10px] font-mono text-slate-600">2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ikhsan