function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
      <a className="navbar-brand" href="#home">Basliel Gebre</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto">
          <a className="nav-link text-white" href="#about">About</a>
          <a className="nav-link text-white" href="#projects">Projects</a>
          <a className="nav-link text-white" href="#skills">Skills</a>
          <a className="nav-link text-white" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
