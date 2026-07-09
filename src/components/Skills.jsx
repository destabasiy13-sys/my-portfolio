const SKILLS = [
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap',
  'Node.js', 'Express.js', 'MySQL', 'Express Session', 'Git',
];

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {SKILLS.map((skill) => (
            <span key={skill} className="badge bg-primary fs-6 fw-normal px-3 py-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
