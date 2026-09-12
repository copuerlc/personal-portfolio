import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Github,
  Mail,
  Menu,
  X,
  ExternalLink,
  MessageCircle,
  Youtube,
  Instagram,
  Music2,
  Twitter,
} from "lucide-react";

import Icon from "./components/Icon";
import { profile } from "./data/profile";

const nav = [
  "Home",
  "What I Do",
  "About",
  "Interests",
  "Projects",
  "Skills",
  "Currently",
  "Contact",
];

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/*
  GitHub Pages image helper.

  If you use:
    image: "/axion_logo.png"

  it becomes:
    /personal-portfolio/axion_logo.png

  automatically when deployed to GitHub Pages.
*/
function getAssetPath(path) {
  if (!path) return "";

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${import.meta.env.BASE_URL}${cleanPath}`;
}

function Reveal({ children, className = "", style }) {
  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${profile.name} — Portfolio`;

    const meta = document.querySelector('meta[name="description"]');

    if (meta) {
      meta.content = profile.intro;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 550);

    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      const sections = nav
        .map((item) => document.getElementById(slug(item)))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
          current = section.id;
        }
      });

      setActive(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const socialItems = [
    ["github", "GitHub", Github],
    ["discord", "Discord", MessageCircle],
    ["youtube", "YouTube", Youtube],
    ["instagram", "Instagram", Instagram],
    ["tiktok", "TikTok", Music2],
    ["twitter", "Twitter / X", Twitter],
    ["website", "Website", GlobeIcon],
  ].filter(([key]) => profile.socials?.[key]);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-dot" />
        <span>Loading portfolio</span>
      </div>
    );
  }

  return (
    <>
      <div
        className="progress"
        style={{
          width: `${progress}%`,
        }}
      />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}
      <header className="nav-wrap">
        <nav className="nav container">
          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="Go home"
          >
            <span className="brand-mark">◆</span>
            {profile.name}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {nav.map((item) => {
              const id = slug(item);

              return (
                <button
                  key={id}
                  className={active === id ? "active" : ""}
                  onClick={() => go(id)}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero container">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              PERSONAL PORTFOLIO <span>✦</span> AVAILABLE FOR NEW IDEAS
            </p>

            <h1>
              Hey, I'm <span>{profile.name}</span>
              <br />
              {profile.role}.
            </h1>

            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => go("projects")}
              >
                View My Work <ArrowDown size={18} />
              </button>

              {profile.email && (
                <a
                  className="ghost-btn"
                  href={`mailto:${profile.email}`}
                >
                  Let's Talk <Mail size={17} />
                </a>
              )}
            </div>

            <div className="mini-socials">
              {socialItems.slice(0, 5).map(
                ([key, label, SocialIcon]) => (
                  <a
                    key={key}
                    href={profile.socials[key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <SocialIcon size={18} />
                  </a>
                )
              )}
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <div className="profile-orb">
              <div className="orb-ring ring-one" />
              <div className="orb-ring ring-two" />

              {profile.profileImage ? (
                <img
                  src={getAssetPath(profile.profileImage)}
                  alt={profile.name}
                  className="profile-image"
                />
              ) : (
                <div className="profile-placeholder">
                  <span>
                    {profile.name
                      .split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
              )}

              <div className="status-pill">
                <span className="status-dot" />
                Creating & learning
              </div>
            </div>
          </Reveal>
        </section>

        {/* WHAT I DO */}
        <Section
          id="what-i-do"
          eyebrow="WHAT I CREATE"
          title="What I Do"
          text="A few of the things I enjoy building and working on."
        >
          <div className="grid cards-grid">
            {profile.whatIDo.map((item, i) => (
              <InfoCard
                key={item.title}
                item={item}
                index={i}
              />
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section
          id="about"
          eyebrow="A LITTLE MORE"
          title="About Me"
        >
          <div className="about-layout">
            <Reveal>
              <div className="about-panel">
                <span className="quote-mark">“</span>

                <p>{profile.about}</p>
              </div>
            </Reveal>

            <div className="about-side">
              <Reveal>
                <div className="fact">
                  <span>WHAT DRIVES ME</span>

                  <strong>{profile.goals}</strong>
                </div>
              </Reveal>

              <Reveal>
                <div className="fact">
                  <span>MY APPROACH</span>

                  <strong>
                    Build it clean. Make it useful. Keep improving.
                  </strong>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* INTERESTS */}
        <Section
          id="interests"
          eyebrow="OUTSIDE THE CODE"
          title="Things I Like"
          text="The interests and hobbies that keep me inspired."
        >
          <div className="grid interest-grid">
            {profile.interests.map((item, i) => (
              <InfoCard
                key={item.title}
                item={item}
                index={i}
                compact
              />
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          eyebrow="SELECTED WORK"
          title="My Played Projects"
          text="Projects, experiments, and ideas I've played before."
        >
          <div className="projects-grid">
            {profile.projects.map((project, i) => {
              const imagePath = getAssetPath(project.image);

              return (
                <Reveal
                  key={project.name}
                  className="project-card"
                >
                  <div className="project-image">
                    {project.image ? (
                      <img
                        src={imagePath}
                        alt={`${project.name} logo`}
                        loading="lazy"
                        onError={(event) => {
                          console.error(
                            `Failed to load project image: ${imagePath}`
                          );

                          event.currentTarget.style.display = "none";

                          const parent =
                            event.currentTarget.parentElement;

                          if (parent) {
                            parent.classList.add(
                              "image-load-error"
                            );

                            const fallback =
                              document.createElement("div");

                            fallback.className =
                              "project-image-placeholder";

                            fallback.innerHTML = `
                              <span style="font-size: 13px; opacity: .65;">
                                IMAGE NOT FOUND
                              </span>
                              <span>
                                PROJECT ${String(i + 1).padStart(
                                  2,
                                  "0"
                                )}
                              </span>
                            `;

                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <div className="project-image-placeholder">
                        <Icon
                          name="Layers3"
                          size={38}
                        />

                        <span>
                          PROJECT{" "}
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <div className="tags">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project
                          <ExternalLink size={16} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          eyebrow="TOOLBOX"
          title="Skills & Technologies"
          text="Tools and technologies I use to turn ideas into projects."
        >
          <Reveal>
            <div className="skills-cloud">
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* CURRENTLY */}
        <Section
          id="currently"
          eyebrow="RIGHT NOW"
          title="Currently"
        >
          <div className="currently-grid">
            {profile.currently.map((item) => (
              <Reveal key={item.label}>
                <div className="current-card">
                  <div className="current-icon">
                    <Icon name={item.icon} />
                  </div>

                  <div>
                    <span>{item.label}</span>

                    <strong>{item.value}</strong>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="GET IN TOUCH"
          title="Let's Create Something"
          text="Have an idea, project, or just want to connect?"
        >
          <Reveal>
            <div className="contact-box">
              <div>
                <h3>Say hello 👋</h3>

                <p>
                  I'm always open to hearing about interesting ideas
                  and projects.
                </p>
              </div>

              <div className="contact-actions">
                {profile.email && (
                  <a
                    className="primary-btn"
                    href={`mailto:${profile.email}`}
                  >
                    Email Me <Mail size={17} />
                  </a>
                )}

                {profile.discord && (
                  <div className="discord-name">
                    Discord:{" "}
                    <strong>{profile.discord}</strong>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {socialItems.length > 0 && (
            <Reveal>
              <div className="social-section">
                {socialItems.map(
                  ([key, label, SocialIcon]) => (
                    <a
                      key={key}
                      href={profile.socials[key]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SocialIcon size={20} />

                      <span>{label}</span>

                      <ArrowUpRight size={16} />
                    </a>
                  )
                )}
              </div>
            </Reveal>
          )}
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with
          React.
        </span>

        <button onClick={() => go("home")}>
          Back to top <ArrowUp size={16} />
        </button>
      </footer>

      {progress > 15 && (
        <button
          className="floating-top"
          onClick={() => go("home")}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}

function GlobeIcon(props) {
  return <Icon name="Globe2" {...props} />;
}

function Section({
  id,
  eyebrow,
  title,
  text,
  children,
}) {
  return (
    <section
      id={id}
      className="section container"
    >
      <Reveal className="section-heading">
        <p className="eyebrow">
          {eyebrow} <span>✦</span>
        </p>

        <h2>{title}</h2>

        {text && <p>{text}</p>}
      </Reveal>

      {children}
    </section>
  );
}

function InfoCard({
  item,
  index,
  compact,
}) {
  return (
    <Reveal
      className={`info-card ${
        compact ? "compact" : ""
      }`}
      style={{
        "--i": index,
      }}
    >
      <div className="icon-box">
        <Icon
          name={item.icon}
          size={24}
        />
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>

      <span className="card-number">
        {String(index + 1).padStart(2, "0")}
      </span>
    </Reveal>
  );
}