function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>🍲 Food for Foodiez</h3>
          <p>JavaScript-based food website UI</p>
          <a
            href="https://github.com/anukalra2005/foodiez"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>📝 Blog Website</h3>
          <p>React-based blog UI design</p>
          <a
            href="https://github.com/anukalra2005/blog-website"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>🌐 Personal Portfolio</h3>
          <p>This website – built using React & CSS</p>
          <a
            href="https://github.com/anukalra2005/portfolio"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
