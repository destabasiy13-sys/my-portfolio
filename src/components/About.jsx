function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="mb-4 text-center">About Me</h2>
        <p>
          I'm a junior full-stack developer who enjoys turning ideas into real,
          working products. Working primarily with React, Node.js, Express,
          and MySQL, I've built a range of full-stack applications: a news
          aggregator with scheduled third-party data ingestion and
          search/filtering, an emergency medical information system built
          around secure, token-based public sharing, and a data-visualization
          tool that aggregates and charts time-series activity data against
          personal goals.
        </p>
        <p>
          I like understanding how things work end to end — from database
          schema design to deployment and production configuration — not
          just getting them to run, and I'm always looking for the next
          problem worth solving.
        </p>
      </div>
    </section>
  );
}

export default About;
