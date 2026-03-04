// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <section className="font-sans min-h-screen bg-white">
      {/* Ana container - header yazısı ile aynı sol boşluk */}
      <div className="pt-24 pl-6 sm:pl-10 pr-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Sol Taraf */}
          <div>
            {/* HERO: Foto ve isim */}
            <div className="flex items-center gap-6 sm:gap-10 mb-8">
              <Image
                src="/esra.jpg"
                alt="Esra ATLADI"
                width={192}
                height={192}
                className="rounded-full object-cover border-4 border-pink-300 shadow-[0_0_0_8px_rgba(242,179,196,0.15)] flex-shrink-0"
                priority
              />
              <div className="text-left">
                <h1 className="text-2xl sm:text-3xl font-bold">Esra ATLADI</h1>
                <p className="mt-2 text-sm sm:text-base text-black/70 dark:text-white/70">
                  Front-end Geliştirici • Next.js • UI/UX
                </p>
              </div>
            </div>

            {/* Hakkımda - Fotoğrafın altında */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hakkımda</h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Merhaba, ben <strong className="text-gray-900 dark:text-white">Esra Atladı</strong>. 
                Selçuk Üniversitesi <strong className="text-gray-900 dark:text-white">Bilgisayar Mühendisliği</strong> öğrencisiyim 
                ve aynı zamanda <strong className="text-gray-900 dark:text-white">uçak aviyonik teknisyeniyim</strong>. 
                <strong className="text-gray-900 dark:text-white"> Web</strong> ve <strong className="text-gray-900 dark:text-white">mobil</strong> geliştirme 
                üzerine projeler üretiyor, arayüz tasarımlarımı <strong className="text-gray-900 dark:text-white">Figma</strong> ve <strong className="text-gray-900 dark:text-white">Canva</strong> ile 
                güçlendiriyorum. Kullanıcı odaklı ve ölçeklenebilir çözümler üretmeyi seviyorum.
              </p>
            </div>
          </div>

          {/* Sağ Taraf - Beceriler */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Beceriler</h2>
            
            {/* Frontend */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff0a54'}}>React</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#8b575c'}}>Next.js</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff477e'}}>TypeScript</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff85a1'}}>HTML5</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-gray-800" style={{backgroundColor: '#f6bdd1'}}>CSS3</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff0a54'}}>Tailwind</span>
              </div>
            </div>

            {/* Mobil */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Mobil</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff477e'}}>React Native</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#8b575c'}}>Flutter</span>
              </div>
            </div>

            {/* Tasarım */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Tasarım</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff85a1'}}>Figma</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-gray-800" style={{backgroundColor: '#f6bdd1'}}>Canva</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff0a54'}}>UI/UX</span>
              </div>
            </div>

            {/* Diğer */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Diğer</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#8b575c'}}>Git</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff477e'}}>Node.js</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#ff85a1'}}>Aviyonik</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Ayırıcı Bar - Header renginde */}
      <div className="w-full py-8 mb-16" style={{backgroundColor: '#f6bdd1'}}>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Deneyimler Bölümü */}
      <div className="pl-6 sm:pl-10 pr-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">Deneyimler</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-pink-300 to-pink-200"></div>
            
            {/* Experience Items */}
            <div className="space-y-8">
              
              {/* Deneyim 1 */}
              <div className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-pink-300 rounded-full shadow-lg flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                </div>
                
                {/* Content Card */}
                <div className="ml-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Proje Asistanı</h3>
                      <p className="text-pink-600 font-medium mb-1">Divizyon</p>
                      <p className="text-gray-500 text-sm mb-3">Konya, Türkiye</p>
                      <ul className="text-gray-600 text-sm leading-relaxed mb-3 space-y-1">
                        <li>• Proje yönetimi ve koordinasyon süreçlerinde aktif rol alıyorum</li>
                        <li>• Takım içi iletişimi destekleyerek proje süreçlerini yönetiyorum</li>
                        <li>• Proje dokümantasyonu ve raporlama işlemlerini gerçekleştiriyorum</li>
                        <li>• Yazılım geliştirme süreçlerinde teknik destek sağlıyorum</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff0a54'}}>Proje Yönetimi</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#8b575c'}}>Koordinasyon</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff477e'}}>Dokümantasyon</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff85a1'}}>Teknik Destek</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap">
                      Nisan 2025 - Günümüz
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyim 2 */}
              <div className="relative flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-pink-300 rounded-full shadow-lg flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Başkan Yardımcısı & Sosyal Medya Başkanı</h3>
                      <p className="text-pink-600 font-medium mb-1">HSD Selçuk Topluluğu</p>
                      <p className="text-gray-500 text-sm mb-3">Selçuk Üniversitesi, Konya</p>
                      <ul className="text-gray-600 text-sm leading-relaxed mb-3 space-y-1">
                        <li>• Öğrenci topluluğunda liderlik ve yönetim deneyimi kazandım</li>
                        <li>• Sosyal medya stratejileri geliştirerek topluluk görünürlüğünü artırdım</li>
                        <li>• Etkinlik organizasyonu ve koordinasyon süreçlerini yönettim</li>
                        <li>• Takım çalışması ve iletişim becerilerimi geliştirdim</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff0a54'}}>Liderlik</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#8b575c'}}>Sosyal Medya</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff477e'}}>Etkinlik Yönetimi</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff85a1'}}>İletişim</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap">
                      2024 - 2025
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyim 3 - İkinci Erasmus */}
              <div className="relative flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-pink-300 rounded-full shadow-lg flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Erasmus+ Öğrenci Değişim Programı</h3>
                      <p className="text-pink-600 font-medium mb-1">İkinci Erasmus Deneyimi</p>
                      <ul className="text-gray-600 text-sm leading-relaxed mb-3 space-y-1">
                        <li>• İkinci Erasmus deneyimim ile uluslararası eğitim fırsatı yakaladım</li>
                        <li>• Farklı kültürlerden öğrencilerle çalışma ve iletişim deneyimi kazandım</li>
                        <li>• Yabancı dil becerilerimi geliştirdim ve global perspektif edindim</li>
                        <li>• Uluslararası projelerde yer alarak takım çalışması deneyimi edindim</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff0a54'}}>Uluslararası</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#8b575c'}}>Kültürlerarası</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff477e'}}>Yabancı Dil</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff85a1'}}>Adaptasyon</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap">
                      2024
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyim 4 - İlk Erasmus */}
              <div className="relative flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-pink-300 rounded-full shadow-lg flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Erasmus+ Öğrenci Değişim Programı</h3>
                      <p className="text-pink-600 font-medium mb-1">İlk Erasmus Deneyimi</p>
                      <ul className="text-gray-600 text-sm leading-relaxed mb-3 space-y-1">
                        <li>• İlk Erasmus deneyimim ile yurtdışı eğitim fırsatı yakaladım</li>
                        <li>• Farklı eğitim sistemlerini deneyimleme ve adaptasyon becerisi kazandım</li>
                        <li>• Uluslararası öğrenci topluluğunda aktif rol aldım</li>
                        <li>• Kültürlerarası iletişim ve problem çözme yeteneklerimi geliştirdim</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff0a54'}}>Adaptasyon</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#8b575c'}}>Problem Çözme</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff477e'}}>İletişim</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff85a1'}}>Liderlik</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyim 5 - Freelance */}
              <div className="relative flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-pink-300 rounded-full shadow-lg flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Freelance Web Developer</h3>
                      <p className="text-pink-600 font-medium mb-1">Kişisel Projeler</p>
                      <p className="text-gray-500 text-sm mb-3">Konya, Türkiye</p>
                      <ul className="text-gray-600 text-sm leading-relaxed mb-3 space-y-1">
                        <li>• React ve Node.js kullanarak kişisel projeler geliştiriyorum</li>
                        <li>• Modern web teknolojileri ile responsive uygulamalar oluşturuyorum</li>
                        <li>• Git ve GitHub kullanarak versiyon kontrolü yapıyorum</li>
                        <li>• Öğrendiğim teknolojileri pratik projelerde uyguluyorum</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff0a54'}}>React</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#8b575c'}}>Node.js</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff477e'}}>Git</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff85a1'}}>Responsive</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap">
                      2023 - Günümüz
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyim 6 - YAZ STAJI (GÜNCELLENDİ) */}
              <div className="relative flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-pink-300 rounded-full shadow-lg flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Stajyer Developer</h3>
                      <p className="text-pink-600 font-medium mb-1">SAN TSG</p>
                      <p className="text-gray-500 text-sm mb-3">Antalya, Türkiye</p>
                      <ul className="text-gray-600 text-sm leading-relaxed mb-3 space-y-1">
                        <li>• Web projesi geliştirme süreçlerinde Scrum Master rolü üstlendim</li>
                        <li>• Product Owner olarak ürün vizyonunu belirleme ve önceliklendirme yaptım</li>
                        <li>• Frontend Developer olarak modern web teknolojileri ile arayüz geliştirdim</li>
                        <li>• Agile metodolojisi ile takım koordinasyonu ve sprint yönetimi gerçekleştirdim</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff0a54'}}>Scrum Master</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#8b575c'}}>Product Owner</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff477e'}}>Frontend</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff85a1'}}>Agile</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap">
                      Yaz 2025
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyim 7 - Eğitim */}
              <div className="relative flex items-start">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-pink-300 rounded-full shadow-lg flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Bilgisayar Mühendisliği</h3>
                      <p className="text-pink-600 font-medium mb-1">Selçuk Üniversitesi</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Yazılım geliştirme, veri yapıları, algoritma analizi ve web teknolojileri konularında kapsamlı eğitim alıyorum. 
                        Modern web teknolojileri ve yazılım geliştirme süreçleri konularında kendimi geliştiriyorum.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff477e'}}>Algoritma</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#8b575c'}}>Veri Yapıları</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff85a1'}}>Web Teknolojileri</span>
                        <span className="px-2 py-1 text-xs rounded-full text-white" style={{backgroundColor: '#ff0a54'}}>Yazılım</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap">
                      Devam Ediyor
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Ayırıcı Bar - Header renginde */}
      <div className="w-full py-8 mb-16" style={{backgroundColor: '#f6bdd1'}}>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Diller Bölümü */}
      <div className="pl-6 sm:pl-10 pr-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">Diller</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Türkçe */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">TR</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Türkçe</h3>
                </div>
                <span className="px-3 py-1 text-sm font-medium text-white rounded-full" style={{backgroundColor: '#ff0a54'}}>
                  Ana Dil
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Ana dilim. Yazılı ve sözlü iletişimde tam yetkinlik.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-2 rounded-full w-full"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Başlangıç</span>
                <span>Ana Dil</span>
              </div>
            </div>

            {/* İngilizce */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">EN</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">İngilizce</h3>
                </div>
                <span className="px-3 py-1 text-sm font-medium text-white rounded-full" style={{backgroundColor: '#8b575c'}}>
                  İleri Seviye
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Yazılım geliştirme, teknik dokümantasyon ve profesyonel iletişimde yetkin.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-2 rounded-full w-4/5"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Başlangıç</span>
                <span>Ana Dil</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}