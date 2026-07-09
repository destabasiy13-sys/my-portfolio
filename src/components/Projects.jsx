const GITHUB_URL = 'https://github.com/destabasiy13-sys';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Projects</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="/images/news-dashboard.png"
                className="card-img-top"
                alt="Personal News Dashboard screenshot"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Personal News Dashboard</h5>
                <p className="card-text">
                  A full-stack news aggregator with session-based auth, a
                  scheduled job that caches headlines from 5 sources via a
                  third-party API, search/filter/pagination, save-for-later,
                  and a public stats page.
                </p>
                <div className="mb-3">
                  <span className="badge bg-secondary me-1">React</span>
                  <span className="badge bg-secondary me-1">Node.js</span>
                  <span className="badge bg-secondary me-1">Express</span>
                  <span className="badge bg-secondary me-1">MySQL</span>
                </div>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  View Code on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 d-flex align-items-center justify-content-center text-center text-muted"
              style={{ borderStyle: 'dashed' }}
            >
              <div className="card-body">
                <p className="mb-0">More projects coming soon</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card h-100 d-flex align-items-center justify-content-center text-center text-muted"
              style={{ borderStyle: 'dashed' }}
            >
              <div className="card-body">
                <p className="mb-0">More projects coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
