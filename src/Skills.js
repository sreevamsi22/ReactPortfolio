import React from 'react';

function Skills() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Technical Skills</h2>
      <div style={styles.skillsGrid}>
        <div style={styles.skillBox}>
          <h3>Languages</h3>
          <p>Python, SQL, C++</p>
        </div>
        <div style={styles.skillBox}>
          <h3>IDE & Tools</h3>
          <p>Jupyter, Anaconda, Eclipse, PyCharm, Docker</p>
        </div>
        <div style={styles.skillBox}>
          <h3>MS Office</h3>
          <p>Word, Excel, PowerPoint</p>
        </div>
        <div style={styles.skillBox}>
          <h3>Operating Systems</h3>
          <p>Unix, Mac OS, Windows</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    color: '#222',
    marginBottom: '2rem',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  skillBox: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '1.2rem',
    width: '260px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default Skills;
