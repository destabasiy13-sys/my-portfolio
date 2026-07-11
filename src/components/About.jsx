function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="mb-4 text-center">About Me</h2>
        <p>
          I'm a junior full-stack developer who builds complete, deployed
          products rather than local prototypes. Working primarily with
          React, Node.js, Express, and MySQL, I've shipped four full-stack
          applications: a news aggregator with scheduled third-party data
          ingestion and search/filtering, an emergency medical information
          system built around secure, token-based public sharing, a
          data-visualization tool that aggregates and charts time-series
          activity data against personal goals, and an e-commerce storefront
          with real payment processing, verified server-side rather than
          trusted from the client.
        </p>
        <p>
          I care about the full lifecycle of a feature — database schema
          design, authentication and security, and production deployment —
          not just getting code to run locally. Every project linked below is
          live and fully functional, not just a repository.
        </p>
        <p>
          I'm currently looking for an internship or entry-level remote role
          where I can keep building, learning, and contributing to real
          products.
        </p>
      </div>
    </section>
  );
}

export default About;
