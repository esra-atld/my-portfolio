import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Spor Mobil Uygulaması",
    description: "React Native ile geliştirilmiş kapsamlı spor takip uygulaması. Kullanıcıların şehirdeki spor programlarını takip etmesi ve sosyal özellikler içerir.",
    tech: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"],
    href: "#",
    repo: "#",
  },
  {
    title: "Otel Rezervasyon Websitesi",
    description: "Modern ve kullanıcı dostu otel rezervasyon platformu. Oda arama, filtreleme, rezervasyon yapma, ödeme entegrasyonu ve admin paneli özellikleri.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Express"],
    href: "#",
    repo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header Space - Ana sayfadaki gibi */}
      <div className="pt-24 pb-16">
        
        {/* Page Title */}
        <div className="pl-6 sm:pl-10 pr-8 mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Projelerim
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Modern web ve mobil teknolojileri kullanarak geliştirdiğim projeler
          </p>
        </div>

        {/* Projects Grid */}
        <div className="pl-6 sm:pl-10 pr-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {projects.map(p => <ProjectCard key={p.title} {...p} />)}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pl-6 sm:pl-10 pr-8 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Birlikte Çalışalım
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Yeni projeler için iş birliği yapmak veya mevcut projelerim hakkında konuşmak istiyorsanız benimle iletişime geçin.
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
