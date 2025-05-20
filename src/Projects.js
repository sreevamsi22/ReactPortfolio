import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Auto Sensible Car',
      description:
        'Arduino-based project using ultrasonic sensors to detect and avoid obstacles.',
      tools: 'Arduino UNO, HC-SR04, Arduino IDE',
    },
    {
      title: 'ML Algorithm Comparison',
      description:
        'Compared three ML models for predicting mobile prices. Random Forest gave the highest accuracy.',
      tools: 'Python, Jupyter, Kaggle',
    },
    {
      title: 'Shell History Sync Tool',
      description:
        'Built a containerized Flask API that syncs PowerShell command history across systems.',
      tools: 'Python, Flask, Docker',
      link: 'https://github.com/sreevamsi22/safedep_assignment',
    },
    {
      title: 'Log File Parser – Guidanz App',
      description:
        'Python tool that parses API logs, extracts timings, and writes into Excel for monitoring.',
      tools: 'Python, Excel Automation',
    },
    {
      title: 'Translation File Utility',
      description:
        'Automated syncing of STXT, XML, INI translation files with dev versions to streamline localization.',
      tools: 'Python, Custom Script Parsing',
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tools:</strong> {project.tools}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" style={styles.link}>
                GitHub Repo 🔗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '10px',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  link: {
    marginTop: '0.5rem',
    display: 'inline-block',
    color: '#0077cc',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Projects;
