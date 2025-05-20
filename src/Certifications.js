import React from 'react';

function Certifications() {
  const certs = [
    'Machine Learning with Python: Foundations (2024)',
    'Python Object-Oriented Programming (2023)',
    'Programming for Everybody (Python Basics)',
    'Azure AZ-900: Microsoft Certified – Azure Fundamentals (2022)',
    'Astronomy: Exploring Time and Space (2020)',
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Certifications</h2>
      <ul style={styles.list}>
        {certs.map((cert, index) => (
          <li key={index} style={styles.listItem}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    color: '#222',
    marginBottom: '1.5rem',
  },
  list: {
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1.1rem',
    color: '#444',
    lineHeight: '2',
    paddingLeft: '1.5rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
};

export default Certifications;
