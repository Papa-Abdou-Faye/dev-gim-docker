export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col overflow-hidden">

      <header className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-5 border-b border-gray-100">
        <img src="/logo.jpg" alt="GIM UEMOA" className="h-10 object-contain" />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gim-blue transition-colors">Accueil</a>
          <a href="#" className="hover:text-gim-blue transition-colors">Nos services</a>
          <a href="#" className="hover:text-gim-blue transition-colors">Actualités</a>
          <a href="#" className="hover:text-gim-blue transition-colors">À propos</a>
        </nav>
        <button className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-all"
          style={{ backgroundColor: '#003087' }}>
          Espace membre
        </button>
      </header>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-0 grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          <div className="flex flex-col">

            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-bold mb-3 animate-fade-in"
              style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
              MODE 01 — DÉVELOPPEMENT
            </div>

            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold mb-6 animate-fade-in"
              style={{ backgroundColor: '#FFF8DC', color: '#8B6800', border: '1px solid #F5B800' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: '#F5B800' }} />
              Groupement Interbancaire Monétique de l'UEMOA
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-5 animate-slide-up"
              style={{ color: '#003087', animationDelay: '80ms' }}>
              Développez en{' '}
              <span style={{ color: '#F5B800' }}>local</span>{' '}
              sans friction
            </h1>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-lg animate-slide-up"
              style={{ animationDelay: '160ms' }}>
              Un seul conteneur, hot-reload activé via volume bind-mount.
              L'environnement est reproductible et isolé — fini le "ça marche
              sur ma machine".
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 animate-slide-up" style={{ animationDelay: '240ms' }}>
              {[
                { value: '1', label: 'conteneur' },
                { value: '~50MB', label: 'image alpine' },
                { value: 'Hot', label: 'reload actif' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl lg:text-3xl font-extrabold" style={{ color: '#003087' }}>{value}</span>
                  <span className="text-xs text-gray-400 font-medium mt-0.5">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '320ms' }}>
              <button className="px-7 py-3.5 rounded-lg text-white font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
                style={{ backgroundColor: '#003087', boxShadow: '0 8px 24px rgba(0,48,135,0.25)' }}>
                Lancer l'environnement →
              </button>
              <button className="px-7 py-3.5 rounded-lg font-semibold text-sm border hover:bg-gray-50 transition-all"
                style={{ color: '#003087', borderColor: '#003087' }}>
                Voir le Dockerfile
              </button>
            </div>
          </div>

          <div className="relative flex items-end justify-center lg:justify-end animate-slide-right" style={{ animationDelay: '100ms' }}>
            <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ backgroundColor: '#EEF3FF' }} />
            <div className="absolute top-8 right-12 w-16 h-16 rounded-full opacity-30 pointer-events-none" style={{ backgroundColor: '#F5B800' }} />
            <div className="absolute bottom-16 left-8 w-8 h-8 rounded-full opacity-40 pointer-events-none" style={{ backgroundColor: '#F5B800' }} />
            <img src="/image.png" alt="Carte GIM UEMOA" className="relative z-10 w-full max-w-sm lg:max-w-md object-contain"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,48,135,0.15))' }} />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-10 px-8 py-4 text-white text-xs font-medium"
        style={{ backgroundColor: '#003087' }}>
        {['Dockerfile simple', 'Node.js 20 Alpine', 'Volume bind-mount', 'Port 3000 exposé'].map((item) => (
          <span key={item} className="flex items-center gap-2 opacity-90">
            <span style={{ color: '#F5B800' }}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
