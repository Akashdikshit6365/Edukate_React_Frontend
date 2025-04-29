import React from 'react';

const Topbar = () => {
  const styles = {
    topbar: {
      backgroundColor: '#1F2732',
      color: '#A3B1C2',
      fontSize: '14px',
      padding: '8px 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    link: {
      color: '#A3B1C2',
      marginLeft: '15px',
      transition: 'color 0.3s ease, transform 0.3s ease',
      textDecoration: 'none',
      fontSize: '18px', // Larger font size for better visibility
    },
    linkHover: {
      color: '#0D6EFD',
      transform: 'scale(1.1)', // Slight grow on hover
    },
    separator: {
      margin: '0 8px',
      opacity: 0.6,
    },
    icon: {
      fontSize: '20px', // Slightly larger icons for better visibility
    }
  };

  return (
    <div style={styles.topbar}>
      <div style={styles.leftSection}>
        <small><i className="fa fa-phone-alt" style={styles.icon}></i> +012 345 6789</small>
        <small style={styles.separator}>|</small>
        <small><i className="fa fa-envelope" style={styles.icon}></i> info@example.com</small>
      </div>
      <div style={styles.rightSection}>
        <a href="/" style={styles.link} className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" style={styles.link} className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" style={styles.link} className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="/" style={styles.link} className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" style={styles.link} className="social-icon">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
