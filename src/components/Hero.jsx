function Hero() {
  return (
    <section id="home" className="d-flex flex-column justify-content-center text-center" style={{ minHeight: '100vh', paddingTop: '70px' }}>
      <div className="container">
        <h1 className="display-4 fw-bold">Basliel Gebre</h1>
        <p className="lead text-muted">Junior Full-Stack Developer</p>
        <p className="mb-4">
          Building real-world web applications with React, Node.js, Express, and MySQL.
        </p>
        <a href="#projects" className="btn btn-primary btn-lg me-2">View My Work</a>
        <a href="#contact" className="btn btn-outline-secondary btn-lg">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
