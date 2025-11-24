function SedjatiWireframes() {
  const jadwalHariIni = [
  {
    nama: "Raffasya",
    waktu: "14.00–15.00",
    program: "Kursus Bahasa Arab",
    kelas: "Lantai 1-A",
    mentor: "Mrs. Sulthon",
    status: "Berlangsung",
  },
  {
    nama: "Meccadina",
    waktu: "14.00–15.00",
    program: "Bimbel Pelajaran",
    kelas: "Lantai 1-B",
    mentor: "Mrs. Mindarti",
    status: "Berlangsung",
  },
  {
    nama: "Hamizan",
    waktu: "14.00–15.00",
    program: "Bimbel pelajaran",
    kelas: "Lantai 1-C",
    mentor: "Kak Dimas",
    status: "Berlangsung",
  },
  {
    nama: "Dani",
    waktu: "14.00–15.00",
    program: "Sanggar Lukis",
    kelas: "Ruang Kreatif",
    mentor: "Kak Sari",
    status: "Menunggu",
  },
  {
    nama: "Akhtar",
    waktu: "14.00–15.00",
    program: "Sanggar Lukis",
    kelas: "Ruang Kreatif",
    mentor: "Kak Sari",
    status: "Menunggu",
  },
  ];
  const programs = [
  {
    title: 'Bimbel Pelajaran',
    desc: 'Pendampingan semua mata pelajaran SD. Fokus ke pemahaman konsep, PR, dan persiapan ujian.',
    tag: 'Gratis/Donasi',
    image: '/pictures/foto baca buku.jpg',
  },
  {
    title: 'Kelas Bahasa',
    desc: 'Belajar Bahasa Arab & Inggris dengan metode game, kartu kata, dan percakapan sederhana.',
    tag: 'Gratis/Donasi',
    image: '/pictures/foto belajar 1.jpg',
  },
  {
    title: 'Sempoa Matematika',
    desc: 'Melatih logika dan kecepatan berhitung dengan alat sempoa, cocok untuk kelas 1–6 SD.',
    tag: 'Gratis/Donasi',
    image: '/pictures/foto belajar 2.jpg',
  },
  {
    title: 'Sanggar Lukis',
    desc: 'Kelas seni untuk mengekspresikan kreativitas melalui gambar, warna, dan cerita.',
    tag: 'Gratis/Donasi',
    image: '/pictures/foto belajar 3.jpg',
  },
  ];
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Top Bar / Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
                src="/pictures/Logo BPI.png"
                alt="Logo Taman Belajar Sedjati"
                className="w-12 h-12 rounded-xl object-cover"
            />
            <span className="font-semibold tracking-wide">Bimbel Pados Ilmu</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="opacity-70 hover:opacity-100" href="#home">Beranda</a>
            <a className="opacity-70 hover:opacity-100" href="#program">Program</a>
            <a className="opacity-70 hover:opacity-100" href="#event">Event & Kalender</a>
            <a className="opacity-70 hover:opacity-100" href="#jadwal">Jadwal Harian</a>
            <a className="opacity-70 hover:opacity-100" href="#daftar">Pendaftaran</a>
            <a className="opacity-70 hover:opacity-100" href="#blog">Blog</a>
            <a className="opacity-70 hover:opacity-100" href="#tentang">Tentang</a>
          </nav>
          <button className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm">Daftar</button>
        </div>
      </header>

      {/* ---------- HOME PAGE WIREFRAME ---------- */}
      <main id="home" className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="h-6 w-40 bg-stone-200 rounded" />
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">Belajar, Berkembang, dan Berkarya di Desa Gajah</h1>
            <p className="text-stone-600 max-w-prose">Bimbel pados ilmu adalah bimbel pelajaran utama yang ditujukan untuk para murid agar dapat belajar lebih fokus dan mendapatkan pendampingan dari guru secara privat. Tombol utama mengarah ke pendaftaran & jadwal hari ini.</p>
            <div className="flex gap-3">
              <button className="px-5 py-3 rounded-xl bg-green-600 text-white">Daftar Sekarang</button>
              <button className="px-5 py-3 rounded-xl border border-stone-300">Lihat Jadwal Hari Ini</button>
            </div>
            <div className="flex items-center gap-4 text-xs text-stone-500">
              <div className="h-5 w-24 bg-stone-200 rounded" />
              <div className="h-5 w-24 bg-stone-200 rounded" />
              <div className="h-5 w-24 bg-stone-200 rounded" />
            </div>
          </div>
          <div className="aspect-video rounded-2xl border border-dashed border-stone-300 overflow-hidden">
              <img
                src="/pictures/1.jpg"
                alt="Hero Taman Belajar Sedjati"
                className="w-full h-full object-cover"
              />
            </div>
        </section>

        {/* KARTU PROGRAM */}
        <section id="program" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Program Unggulan</h2>
            <a className="text-sm text-green-700" href="#program-page">Lihat semua program →</a>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-2xl border border-stone-200 p-4 bg-white"
              >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-28 w-full object-cover rounded-xl mb-4"
                  />
                <h3 className="font-medium">{program.title}</h3>
                <p className="text-sm text-stone-600 line-clamp-3">
                  {program.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">
                    {program.tag}
                  </span>
                  <button className="text-sm text-green-700">
                    Detail →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EVENT & KALENDER RINGKAS */}
        <section id="event" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Event Minggu Ini</h2>
            <a className="text-sm text-green-700" href="#kalender">Lihat semua →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[1,2,3].map((i)=> (
              <div key={i} className="rounded-2xl border border-stone-200 p-4 bg-white">
                <div className="h-32 rounded-xl bg-stone-100 mb-4" />
                <div className="text-xs text-stone-500">Sabtu, 16.00</div>
                <h3 className="font-medium">persiapan ujian semester gasal</h3>
                <p className="text-sm text-stone-600">ujian semester gasal sudah didepan mata, mari kita persiapkan dengan belajar yang lebih serius dan rajin agar mendapatkan nilai yang sempurna</p>
                <div className="mt-3 flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-stone-100">Gratis</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-stone-100">Kuota 10 anak</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JADWAL HARI INI */}
        <section id="jadwal" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Jadwal Hari Ini</h2>
            <div className="flex gap-2">
              <div className="h-10 w-40 bg-white border border-stone-200 rounded-xl grid place-items-center text-xs">Filter Program</div>
              <div className="h-10 w-40 bg-white border border-stone-200 rounded-xl grid place-items-center text-xs">Filter Kelas/Usia</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full text-sm">
          <thead className="bg-stone-100 text-stone-600">
            <tr>
            <th className="text-left p-3">Nama</th>
            <th className="text-left p-3">Waktu</th>
            <th className="text-left p-3">Program</th>
            <th className="text-left p-3">Kelas/Ruang</th>
            <th className="text-left p-3">Mentor</th>
            <th className="text-left p-3">Status</th>
          </tr>
          </thead>
          <tbody className="bg-white">
            {jadwalHariIni.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{row.nama}</td>
                <td className="p-3">{row.waktu}</td>
                <td className="p-3">{row.program}</td>
                <td className="p-3">{row.kelas}</td>
                <td className="p-3">{row.mentor}</td>
                <td className="p-3">
                  <span
                    className="px-2 py-1 rounded-full text-xs bg-green-50 text-green-700"
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border">Langganan iCal</button>
            <button className="px-4 py-2 rounded-xl border">Kirim ke WhatsApp</button>
          </div>
        </section>

        {/* CTA */}
        <section id="daftar" className="rounded-3xl border border-stone-200 bg-white p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Coba Kelas Gratis Minggu Ini</h3>
            <p className="text-stone-600">Form pendaftaran ringkas untuk calon siswa atau peserta event.</p>
          </div>
          <div className="grid gap-3">
            <div className="h-11 rounded-xl border border-stone-300 bg-stone-50" />
            <div className="h-11 rounded-xl border border-stone-300 bg-stone-50" />
            <div className="h-11 rounded-xl border border-stone-300 bg-stone-50" />
            <button className="h-11 rounded-xl bg-green-600 text-white">Kirim</button>
          </div>
        </section>
      </main>

      {/* ---------- PROGRAM PAGE WIREFRAME ---------- */}
      <section id="program-page" className="bg-stone-100 py-14 mt-10 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {/* Header Program */}
          <div className="rounded-3xl bg-white border border-stone-200 p-6">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold">Coding Club</h2>
                <p className="text-stone-600">Ringkasan singkat benefit & tujuan program. Sertakan usia, prasyarat, dan highlight kurikulum.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 rounded-full bg-stone-100 text-xs">Usia: SD 4–6 / SMP–SMA</span>
                  <span className="px-2 py-1 rounded-full bg-stone-100 text-xs">Durasi: 6–8 pertemuan</span>
                  <span className="px-2 py-1 rounded-full bg-stone-100 text-xs">Gratis/Donasi</span>
                </div>
              </div>
              <div className="aspect-video rounded-xl border border-dashed grid place-items-center text-stone-400">Hero Program</div>
            </div>
          </div>

          {/* Kurikulum / Silabus singkat */}
          <div className="grid md:grid-cols-3 gap-6">
            {["Dasar Scratch","Game Edukasi","Showcase"].map((title,i)=> (
              <div key={i} className="rounded-2xl bg-white border border-stone-200 p-5">
                <div className="h-28 rounded-xl bg-stone-100 mb-4" />
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-stone-600">Deskripsi singkat 2–3 baris.</p>
              </div>
            ))}
          </div>

          {/* Jadwal Kelas Aktif */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Jadwal Kelas Aktif</h3>
              <div className="flex gap-2">
                <div className="h-10 w-40 bg-white border border-stone-200 rounded-xl grid place-items-center text-xs">Filter Level</div>
                <div className="h-10 w-40 bg-white border border-stone-200 rounded-xl grid place-items-center text-xs">Hari</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[1,2,3,4].map((i)=> (
                <div key={i} className="rounded-2xl bg-white border border-stone-200 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-stone-500">Minggu, 15.00–16.30</div>
                      <h4 className="font-medium">Level {i % 2 === 0 ? '2 – SMP–SMA' : '1 – SD 4–6'}</h4>
                      <p className="text-sm text-stone-600">Mentor: Kak A • Kuota: 20 • Ruang: Lab 1</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">Tersedia</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm">Daftar</button>
                    <button className="px-4 py-2 rounded-xl border text-sm">Tambah ke Kalender</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ & Form */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-stone-200 p-6">
              <h3 className="text-xl font-semibold mb-3">FAQ</h3>
              <ul className="space-y-3 text-sm text-stone-700">
                <li><span className="font-medium">Apakah perlu membawa laptop?</span> Bisa sharing 2–3 anak per perangkat.</li>
                <li><span className="font-medium">Apakah ada biaya?</span> Gratis/Donasi sesuai kemampuan.</li>
                <li><span className="font-medium">Bagaimana jika anak pemula?</span> Kurikulum dibuat bertahap.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-stone-200 p-6">
              <h3 className="text-xl font-semibold mb-3">Form Pendaftaran Cepat</h3>
              <div className="grid gap-3">
                <div className="h-11 rounded-xl border border-stone-300 bg-stone-50" />
                <div className="h-11 rounded-xl border border-stone-300 bg-stone-50" />
                <div className="h-11 rounded-xl border border-stone-300 bg-stone-50" />
                <button className="h-11 rounded-xl bg-green-600 text-white">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-stone-200 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="h-6 w-40 bg-stone-200 rounded mb-3" />
            <p className="text-stone-600">Desa Gajah Rt 02 / Rw 03, Kecamatan Baureno, Kabupaten Bojonegoro</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className="h-3 bg-stone-200 rounded" />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-10 rounded-xl bg-green-600/90" />
            <div className="h-10 rounded-xl bg-stone-200" />
          </div>
        </div>
      </footer>
    </div>
  );
}
