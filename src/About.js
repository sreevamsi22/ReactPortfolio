import React from 'react';

function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
To work in a professional industry that enables me to adapt to emerging trends and technologies, broadening my knowledge and achieving professional satisfaction and growth by effectively contributing to the organization's goals. As an energetic self-starter and perpetual learner, I am keen to explore and master new technologies.
      </p>

      <h3 style={styles.subheading}>Education</h3>
      <ul style={styles.list}>
        <li><strong>Master of Technology (Computer Science Engineering)</strong><br />Koneru Lakshmaiah University, 2024</li>
        <li><strong>Bachelor of Technology (Electronics & Communications)</strong><br />Pragati Engineering College, 2020</li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#f4f4f4',
    padding: '2rem',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '1.5rem',
    color: '#444',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
  },
  list: {
    fontSize: '1rem',
    color: '#333',
    marginTop: '1rem',
    lineHeight: '1.6',
  },
};

export default About;
