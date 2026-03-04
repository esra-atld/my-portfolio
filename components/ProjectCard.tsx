type Props = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, tech, href, repo }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Project Image/Header */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-pink-100 to-pink-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-pink-500/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-pink-500 opacity-30">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H8a1 1 0 000 2h4a1 1 0 100-2H8.771z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" 
                style={{backgroundColor: '#ff0a54'}}>
            {title.toLowerCase().includes('mobil') || title.toLowerCase().includes('app') ? 'Mobile App' : 'Web App'}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
            Teknolojiler
          </h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span
                key={t}
                className="px-3 py-1 text-sm font-medium rounded-full text-white"
                style={{
                  backgroundColor: 
                    index % 5 === 0 ? '#ff0a54' :
                    index % 5 === 1 ? '#8b575c' :
                    index % 5 === 2 ? '#ff477e' :
                    index % 5 === 3 ? '#ff85a1' : '#f6bdd1',
                  color: index % 5 === 4 ? '#333' : 'white'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Canlı Demo
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-3 px-4 rounded-lg font-medium hover:border-pink-500 hover:text-pink-600 transition-colors duration-200"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}