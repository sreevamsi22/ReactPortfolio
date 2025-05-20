import React from 'react';

function Experience() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>
      <div style={styles.card}>
        <h3>Cummins India Pvt Ltd (Intern – 9 months)</h3>
        <ul style={styles.list}>
          <li>Developed a Python tool that automated file translation, reducing manual workload for senior devs.</li>
          <li>Built a script to calculate timestamps & durations of APIs in the Guidanz app, improving performance tracking.</li>
          <li>Created a C++ tool to update databases from CSVs — enhanced data handling and updates.</li>
          <li>Used Visual Studio, Android Studio, Jupyter, and Docker to support multi-platform development.</li>
          <li>Fixed defects in the Guidanz project, improving user experience and reliability.</li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#f0f2f5',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    color: '#222',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  list: {
    paddingLeft: '1.2rem',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#444',
  },
};

export default Experience;
