// app/cv/page.tsx
"use client";

export default function CVPage() {
  const handleDownload = () => {
    // PDF indirme işlemi
    const link = document.createElement('a');
    link.href = '/EsraATLADICV.pdf'; // public klasöründeki PDF
    link.download = 'Esra_Atladi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="font-sans min-h-screen bg-white">
      <div className="pt-24 px-6 sm:px-10 pb-16">
        {/* Header - CV Başlığı ve İndir Butonu */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Özgeçmiş</h1>
          <button
            onClick={handleDownload}
            className="px-6 py-3 rounded-full text-white font-medium transition-all hover:opacity-90 flex items-center gap-2"
            style={{backgroundColor: '#ff0a54'}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            PDF İndir
          </button>
        </div>

        {/* CV İçeriği */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          
          {/* Kişisel Bilgiler */}
          <div className="mb-12 text-center border-b pb-8" style={{borderColor: '#f6bdd1'}}>
            <h2 className="text-4xl font-bold mb-2" style={{color: '#ff0a54'}}>Esra Atladı</h2>
            <p className="text-xl mb-4" style={{color: '#8b575c'}}>Bilgisayar Mühendisliği Öğrencisi</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <span>📞 0535 686 43 40</span>
              <span>✉️ esra.atladi4340@gmail.com</span>
            </div>
          </div>

          {/* Hakkımda */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: '#ff0a54'}}>
              <span className="w-2 h-8 rounded" style={{backgroundColor: '#ff0a54'}}></span>
              Hakkımda
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Selçuk Üniversitesi bilgisayar mühendisliği ikinci sınıf öğrencisiyim. Aynı zamanda uçak aviyonik teknisyeniyim. 
              Yazılımda web ve mobil frontend ile ilgileniyorum. Python, C, C++, Java ve HTML gibi dillerde temel seviyede 
              bilgim var. Şuan JavaScript ve React üzerinde çalışıyorum. Müzikle de yakından ilgileniyor, vokallik yapıyor, 
              keman ve gitar çalıyorum.
            </p>
          </div>

          {/* Eğitim */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: '#ff477e'}}>
              <span className="w-2 h-8 rounded" style={{backgroundColor: '#ff477e'}}></span>
              Eğitim
            </h3>
            <div className="space-y-4">
              <div className="pl-6 border-l-2" style={{borderColor: '#f6bdd1'}}>
                <h4 className="font-bold text-lg text-gray-900">Selçuk Üniversitesi</h4>
                <p className="text-gray-600">Bilgisayar Mühendisliği</p>
                <p className="text-gray-500 text-sm">2023 - 2027</p>
              </div>
              <div className="pl-6 border-l-2" style={{borderColor: '#f6bdd1'}}>
                <h4 className="font-bold text-lg text-gray-900">Aksu Uçak Bakım Teknolojisi MTAL</h4>
                <p className="text-gray-600">Uçak Bakım Teknisyenliği</p>
                <p className="text-gray-500 text-sm">2019 - 2023</p>
              </div>
            </div>
          </div>

          {/* İş Deneyimi */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: '#ff85a1'}}>
              <span className="w-2 h-8 rounded" style={{backgroundColor: '#ff85a1'}}></span>
              İş Deneyimi
            </h3>
            <div className="space-y-4">
              <div className="pl-6 border-l-2" style={{borderColor: '#f6bdd1'}}>
                <h4 className="font-bold text-lg text-gray-900">Başkan Yardımcılığı</h4>
                <p className="text-gray-600">HSD - Selçuk Üniversitesi</p>
                <p className="text-gray-500 text-sm">2025 - Devam Ediyor</p>
              </div>
              <div className="pl-6 border-l-2" style={{borderColor: '#f6bdd1'}}>
                <h4 className="font-bold text-lg text-gray-900">Proje Asistanlığı</h4>
                <p className="text-gray-600">Divizyon</p>
                <p className="text-gray-500 text-sm">2025 - Devam Ediyor</p>
              </div>
              {/* YENİ STAJ BİLGİSİ */}
              <div className="pl-6 border-l-2" style={{borderColor: '#f6bdd1'}}>
                <h4 className="font-bold text-lg text-gray-900">Yaz Stajı - Scrum Master & Product Owner & Frontend Developer</h4>
                <p className="text-gray-600">SAN TSG - Antalya</p>
                <p className="text-gray-500 text-sm">Yaz 2025</p>
                <p className="text-gray-600 text-sm mt-2">
                  Web projesi geliştirme süreçlerinde Scrum Master ve Product Owner rolleri ile Agile metodolojisi kullanarak 
                  takım yönetimi ve ürün geliştirme deneyimi kazandım. Aynı zamanda Frontend Developer olarak modern web 
                  teknolojileri ile arayüz geliştirme çalışmaları yürüttüm.
                </p>
              </div>
            </div>
          </div>

          {/* Sertifikalar */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: '#8b575c'}}>
              <span className="w-2 h-8 rounded" style={{backgroundColor: '#8b575c'}}></span>
              Sertifikalar
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📜</span>
                <div>
                  <p className="font-semibold text-gray-900">Uçak Bakım Teknisyenliği</p>
                  <p className="text-sm text-gray-600">MEB - 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="font-semibold text-gray-900">Teknoloji ve Yazılım Eğitimi</p>
                  <p className="text-sm text-gray-600">TECH/CAMP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐍</span>
                <div>
                  <p className="font-semibold text-gray-900">Python Kursu</p>
                  <p className="text-sm text-gray-600">TECH/CAMP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-semibold text-gray-900">HTML Kursu</p>
                  <p className="text-sm text-gray-600">TECH/CAMP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="font-semibold text-gray-900">CSS ve Bootstrap Kursu</p>
                  <p className="text-sm text-gray-600">TECH/CAMP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✈️</span>
                <div>
                  <p className="font-semibold text-gray-900">ERASMUS/ERASMUS+</p>
                  <p className="text-sm text-gray-600">Portekiz, Romanya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beceriler */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: '#ff0a54'}}>
              <span className="w-2 h-8 rounded" style={{backgroundColor: '#ff0a54'}}></span>
              Beceriler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">Teknik Beceriler</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Yazılım Geliştirme</li>
                  <li>• Scrum Master & Product Owner</li>
                  <li>• Frontend Development</li>
                  <li>• Analitik Düşünme</li>
                  <li>• Kriz Yönetimi</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">Sosyal Beceriler</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ekip Çalışması</li>
                  <li>• Agile Metodolojisi</li>
                  <li>• Proje Yönetimi</li>
                  <li>• Topluluk Karşısında Konuşma</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Diller */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: '#ff477e'}}>
              <span className="w-2 h-8 rounded" style={{backgroundColor: '#ff477e'}}></span>
              Diller
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{backgroundColor: '#ff85a1'}}>
                🇹🇷 Türkçe - Ana Dil
              </span>
              <span className="px-4 py-2 rounded-full text-white font-medium" style={{backgroundColor: '#ff477e'}}>
                🇬🇧 İngilizce
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}