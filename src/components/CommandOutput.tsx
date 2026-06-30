import type { CommandName } from "../lib/commands";
import {
  education,
  experience,
  focusAreas,
  profile,
  selectedWork,
  skills,
} from "../data";
import { commands } from "../lib/commands";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function FocusStrip() {
  return (
    <div className="focus-strip" aria-label="Engineering focus areas">
      {focusAreas.map((item) => (
        <div className="focus-item" key={item.title}>
          <span>{item.index}</span>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function HomeOutput() {
  return (
    <section className="output output-home">
      <div className="kicker"><span>●</span> SYSTEM ONLINE / SF BAY AREA</div>
      <h1>
        Sameer Khoja builds <em>search, voice, and AI</em> products at scale.
      </h1>
      <p className="lede">{profile.intro}</p>
      <FocusStrip />
      <p className="terminal-note">
        Type a command below or choose one from the command deck. Try <code>work</code> first.
      </p>
    </section>
  );
}

function AboutOutput() {
  return (
    <section className="output prose-output">
      <p className="section-index">01 / ABOUT</p>
      <h2>Product-minded engineering, from the interface to the platform.</h2>
      <p>
        I&apos;m a senior software engineer at YouTube working where ambitious product ideas
        meet complex systems. My recent work spans generative AI search, voice experiences
        on TV, content discovery, performance, and platform modernization.
      </p>
      <p>
        Before YouTube, I built enterprise workflow and identity systems at Google and
        onboarding experiences at LinkedIn. I&apos;m at my best leading unclear, cross-functional
        problems from an early prototype to a measurable launch.
      </p>
      <FocusStrip />
    </section>
  );
}

function WorkOutput() {
  return (
    <section className="output">
      <div className="output-heading">
        <div>
          <p className="section-index">02 / SELECTED WORK</p>
          <h2>Problems shipped, not side-project theater.</h2>
        </div>
        <span className="count-label">{selectedWork.length} case notes</span>
      </div>
      <div className="work-grid">
        {selectedWork.map((project) => (
          <article className="work-card" key={project.id}>
            <div className="work-card-top">
              <span>{project.id}</span>
              <span>{project.eyebrow}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="contribution">{project.contribution}</div>
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceOutput() {
  return (
    <section className="output">
      <p className="section-index">03 / EXPERIENCE</p>
      <h2>Career timeline</h2>
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={job.company}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-meta">
              <span>{job.period}</span>
              <span>{job.location}</span>
            </div>
            <h3>{job.role} <span>@ {job.company}</span></h3>
            <p>{job.summary}</p>
            <ul>
              {job.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsOutput() {
  return (
    <section className="output">
      <p className="section-index">04 / SKILLS</p>
      <h2>A toolkit shaped by shipped products.</h2>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <article className="skill-group" key={group.category}>
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationOutput() {
  return (
    <section className="output prose-output">
      <p className="section-index">05 / EDUCATION</p>
      <h2>{education.school}</h2>
      <p className="degree">{education.degree}</p>
      <div className="education-meta">
        <span>{education.period}</span>
        <span>{education.location}</span>
      </div>
    </section>
  );
}

function ContactOutput() {
  return (
    <section className="output contact-output">
      <p className="section-index">06 / CONTACT</p>
      <h2>Let&apos;s build something people actually use.</h2>
      <p>For the quickest response, email me. You can also find my work and experience below.</p>
      <div className="contact-links">
        <a href={`mailto:${profile.links.email}`}>
          <span>Email</span><strong>{profile.links.email}</strong>
        </a>
        <ExternalLink href={profile.links.github}>
          <span>GitHub</span><strong>@{profile.links.githubHandle}</strong>
        </ExternalLink>
        <ExternalLink href={profile.links.linkedin}>
          <span>LinkedIn</span><strong>/in/sameerkhoja</strong>
        </ExternalLink>
      </div>
    </section>
  );
}

function HelpOutput() {
  return (
    <section className="output">
      <p className="section-index">COMMAND INDEX</p>
      <h2>Available commands</h2>
      <div className="help-list">
        {commands.map((command) => (
          <div key={command.name}>
            <code>{command.name}</code>
            <span>{command.description}</span>
            <small>{command.aliases?.join(", ")}</small>
          </div>
        ))}
      </div>
      <p className="terminal-note">Use ↑ and ↓ for command history, Tab to autocomplete.</p>
    </section>
  );
}

export function CommandOutput({ command }: { command: CommandName }) {
  switch (command) {
    case "home": return <HomeOutput />;
    case "about": return <AboutOutput />;
    case "work": return <WorkOutput />;
    case "experience": return <ExperienceOutput />;
    case "skills": return <SkillsOutput />;
    case "education": return <EducationOutput />;
    case "contact": return <ContactOutput />;
    case "help": return <HelpOutput />;
    default: return null;
  }
}
