import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Sree Vamsi Duvvuri</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
    fontSize: '0.9rem',
  },
};

export default Footer;
