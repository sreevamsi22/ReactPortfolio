import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.name}>Sree Vamsi Duvvuri</h1>
      <p style={styles.title}>Aspiring UI/UX Developer</p>

      <div style={styles.linkGroup}>
        <a href="mailto:sreevamsi22@gmail.com" style={styles.link}>sreevamsi22@gmail.com</a>
        <a href="https://www.linkedin.com/in/sree-vamsi-duvvuri/" target="_blank" rel="noreferrer" style={styles.link}>
          🔗 LinkedIn
        </a>
        <a href="https://github.com/sreevamsi22" target="_blank" rel="noreferrer" style={styles.link}>
           GitHub
        </a>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '2rem',
    color: 'white',
    textAlign: 'center',
  },
  name: {
    margin: 0,
    fontSize: '2.5rem',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  linkGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Header;
