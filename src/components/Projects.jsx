// To add a new project in the future, just add another object here -
// no need to write a new card by hand. The grid always shows at least
// MIN_CARDS total (filling the rest with "coming soon" placeholders),
// and placeholders shrink automatically as real projects are added.
const PROJECTS = [
  {
    title: 'Personal News Dashboard',
    description:
      'A full-stack news aggregator with session-based auth, a scheduled ' +
      'job that caches headlines from 5 sources via a third-party API, ' +
      'search/filter/pagination, save-for-later, and a public stats page.',
    image: '/images/news-dashboard.png',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/destabasiy13-sys/personal-news-dashboard',
    demoLink: 'https://news-dashboard-eight-eta.vercel.app',
  },
  {
    title: 'LifeCard — Digital Emergency Medical Card',
    description:
      'A digital emergency medical card: users fill out their medical profile ' +
      'once and get a unique public link and QR code that anyone can scan to ' +
      'view critical info instantly — no login required. Session-based auth, ' +
      'server-generated QR codes, and per-user data isolation in MySQL.',
    image: '/images/lifecard.png',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/destabasiy13-sys/Lifecard',
    demoLink: 'https://client-lovat-eta-13.vercel.app',
  },
];

const MIN_CARDS = 3;

function Projects() {
  const placeholderCount = Math.max(0, MIN_CARDS - PROJECTS.length);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Projects</h2>
        <div className="row g-4">
          {PROJECTS.map((project) => (
            <div className="col-md-4" key={project.title}>
              <div className="card h-100">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={`${project.title} screenshot`}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.tech.map((t) => (
                      <span key={t} className="badge bg-secondary me-1">{t}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary flex-fill"
                    >
                      View Code
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary flex-fill"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div className="col-md-4" key={`placeholder-${i}`}>
              <div
                className="card h-100 d-flex align-items-center justify-content-center text-center text-muted"
                style={{ borderStyle: 'dashed' }}
              >
                <div className="card-body">
                  <p className="mb-0">More projects coming soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
