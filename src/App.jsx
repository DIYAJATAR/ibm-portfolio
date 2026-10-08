import "./App.css";

function App() {
  return (
    <div className="site">
      <nav>
        <strong>DIYA JATAR</strong>
        <div>
          <a href="#about">About</a>
          <a href="#opensource">Open Source</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="about">
          <p className="eyebrow">SOFTWARE ENGINEER · PUNE, INDIA</p>
          <h1>Building reliable software<br />with Java, Python & AI.</h1>

          <p className="intro">
            I'm Diya Jatar, an entry-level Software Engineer focused on
            backend systems, REST APIs, distributed systems, AI/ML and
            open-source development.
          </p>

          <div className="buttons">
            <a className="primary" href="#opensource">View IBM Work</a>
            <a className="secondary" href="https://github.com/DIYAJATAR" target="_blank">
              GitHub ↗
            </a>
          </div>

          <div className="job">
            <span>IBM Software Engineer</span>
            <strong>Job ID 132895</strong>
          </div>
        </section>

        <section>
          <div className="section-title">
            <span>01</span>
            <h2>Why IBM</h2>
          </div>

          <div className="card large">
            <p>
              I'm interested in IBM because of its work across software
              engineering, systems, cloud, AI and open source. My current
              technical focus includes Java, Python, Spring Boot, PostgreSQL,
              Redis, REST APIs, testing and AI-enabled applications.
            </p>
          </div>
        </section>

        <section id="opensource">
          <div className="section-title">
            <span>02</span>
            <h2>IBM Open Source</h2>
          </div>

          <div className="grid">
            <article className="card">
              <span className="tag">PR #60 · DOCUMENTATION</span>
              <h3>IBM Cloud Key Protect Java SDK</h3>
              <p>
                Updated the Create Key documentation example to use the
                current <code>keyCreateBody</code> builder method instead of
                the outdated example.
              </p>
              <a href="https://github.com/IBM/keyprotect-java-client/pull/60"
                 target="_blank">
                View Pull Request ↗
              </a>
            </article>

            <article className="card">
              <span className="tag">ISSUE #24 · IN PROGRESS</span>
              <h3>IBM JTOpen</h3>
              <p>
                Investigating and preparing a source-level cleanup for
                obsolete JDBC40 conditional blocks related to preprocessing
                warnings.
              </p>
              <a href="https://github.com/IBM/JTOpen/issues/24"
                 target="_blank">
                View Issue ↗
              </a>
            </article>
          </div>
        </section>

        <section id="projects">
          <div className="section-title">
            <span>03</span>
            <h2>Selected Projects</h2>
          </div>

          <div className="projects">
            <article className="project">
              <span>01</span>
              <h3>AI Payment Intelligence</h3>
              <p>
                Payment operations platform combining Java backend services,
                AI analysis, PostgreSQL, data processing and operational
                intelligence.
              </p>
              <a href="https://github.com/DIYAJATAR/ai-payment-intelligence-smart-operations"
                 target="_blank">
                GitHub ↗
              </a>
            </article>

            <article className="project">
              <span>02</span>
              <h3>Payment Orchestration & Reconciliation</h3>
              <p>
                Spring Boot payment architecture with provider routing,
                idempotency, retries, failover, Redis and reconciliation.
              </p>
              <a href="https://github.com/DIYAJATAR/payment-orchestration-and-reconciliation"
                 target="_blank">
                GitHub ↗
              </a>
            </article>

            <article className="project">
              <span>03</span>
              <h3>Real-Time Order Processing</h3>
              <p>
                Backend-focused order and inventory processing project
                designed around reliable API workflows and data consistency.
              </p>
              <a href="https://github.com/DIYAJATAR/realtime-order-processing-inventory"
                 target="_blank">
                GitHub ↗
              </a>
            </article>
          </div>
        </section>

        <section>
          <div className="section-title">
            <span>04</span>
            <h2>Technical Stack</h2>
          </div>

          <div className="skills">
            {[
              "Java 21",
              "Python",
              "Spring Boot",
              "REST APIs",
              "PostgreSQL",
              "Redis",
              "JPA",
              "JUnit",
              "React",
              "Git & GitHub",
              "Docker",
              "AI / ML",
              "Jupyter",
              "Microservices",
              "API Testing",
              "Linux"
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section>
          <div className="section-title">
            <span>05</span>
            <h2>AI Learning</h2>
          </div>

          <div className="card certificate">
            <div>
              <span className="tag">CERTIFICATION</span>
              <h3>CS50's Introduction to Artificial Intelligence with Python</h3>
              <p>Harvard University · CS50</p>
            </div>
            <span className="arrow">↗</span>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Ready to build useful software.</h2>

          <div className="buttons">
            <a className="primary" href="mailto:diyajatar2003@gmail.com">
              Email Me
            </a>
            <a className="secondary"
               href="https://www.linkedin.com/in/diyajatar/"
               target="_blank">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Diya Jatar</span>
        <a href="https://github.com/DIYAJATAR" target="_blank">GitHub ↗</a>
      </footer>
    </div>
  );
}

export default App;