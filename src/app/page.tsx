"use client";

import projects from "@/data/projects.json";

// SVG icons as components
function GitHubIcon() {
    return (
          <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        );
}

function ExternalLinkIcon() {
    return (
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 3.5h-3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-3" />
                <path d="M9.5 2.5h4v4" />
                <path d="M6.5 9.5l7-7" />
          </svg>
        );
}

type Project = {
    id: string;
    title: string;
    description: string;
    team: string[];
    tags: string[];
    repoUrl: string;
    demoUrl: string | null;
};

export default function Home() {
    return (
          <>
            {/* Header */}
                <header className="site-header">
                        <div className="container">
                                  <div className="header-inner">
                                              <a href="/" className="logo">
                                                            <div className="logo-icon">LISA</div>
                                              </a>
                                              <div className="header-links">
                                                            <a href="#projects" className="header-link">
                                                                            Projects
                                                            </a>
                                                            <a
                                                                              href="https://www.safeai.org.uk"
                                                                              className="header-link"
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                            >
                                                                            About LISA
                                                            </a>
                                                            <a
                                                                              href="https://github.com/lisa-ai-safety"
                                                                              className="header-link primary"
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                            >
                                                                            GitHub
                                                            </a>
                                              </div>
                                  </div>
                        </div>
                </header>
          
            {/* Hero */}
                <section className="hero">
                        <div className="container">
                                  <h1>
                                              Still think that generalists can&apos;t build? See how we&apos;re
                                              improving AI Safety Infrastructure &mdash; one project at a time.
                                  </h1>
                        </div>
                </section>
          
            {/* Stats */}
                <div className="container">
                        <div className="stats-bar">
                                  <div className="stat">
                                              <div className="stat-value">4</div>
                                              <div className="stat-label">Projects</div>
                                  </div>
                                  <div className="stat">
                                              <div className="stat-value">15</div>
                                              <div className="stat-label">Builders</div>
                                  </div>
                                  <div className="stat">
                                              <div className="stat-value">May 2026</div>
                                              <div className="stat-label">Cohort</div>
                                  </div>
                        </div>
                </div>
          
            {/* Project Grid */}
                <main className="container" id="projects">
                        <div className="project-grid">
                          {(projects as Project[]).map((project) => (
                        <article key={project.id} className="project-card">
                                      <h2 className="card-title">{project.title}</h2>
                        
                                      <p className="card-description">{project.description}</p>
                        
                                      <div className="card-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="tag">
                                              {tag}
                                            </span>
                                          ))}
                                      </div>
                        
                                      <div className="card-team">
                                                      <span className="team-count">
                                                        {project.team.length} builders
                                                      </span>
                                      </div>
                        
                                      <div className="card-links">
                                                      <a
                                                                          href={project.repoUrl}
                                                                          className="card-link repo"
                                                                          target="_blank"
                                                                          rel="noopener noreferrer"
                                                                        >
                                                                        <GitHubIcon />
                                                                        Repository
                                                      </a>
                                        {project.demoUrl && (
                                            <a
                                                                  href={project.demoUrl}
                                                                  className="card-link demo"
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                >
                                                                <ExternalLinkIcon />
                                                                Live Demo
                                            </a>
                                                      )}
                                      </div>
                        </article>
                      ))}
                        </div>
                </main>
          
            {/* Footer */}
                <footer className="site-footer">
                        <div className="container">
                                  <p className="footer-text">
                                              LISA AI Safety Studio &copy; {new Date().getFullYear()} &mdash; Built
                                              with care for a safer AI future. &nbsp;
                                              <a
                                                              href="https://github.com/lisa-ai-safety"
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                            >
                                                            GitHub
                                              </a>
                                  </p>
                        </div>
                </footer>
          </>>
        );
}</></svg>
