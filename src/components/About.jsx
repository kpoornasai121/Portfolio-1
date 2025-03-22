export default function About() {
    return (
      <section id="about" style={{ padding: '60px 20px', backgroundColor: '#121212', color: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#bb86fc' }}>About Me</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
            Hi, I'm Poorna Sai, a passionate web developer with experience in building modern web applications using React, Next.js, and Node.js. I love solving problems and creating user-friendly interfaces.
          </p>
          {/* Add the button here */}
          <a
            href="https://drive.google.com/file/d/1zxGEAj2zyUHVCZEgLfv5EMOMNt3St85I/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              backgroundColor: '#bb86fc',
              color: '#121212',
              textDecoration: 'none',
              borderRadius: '5px',
              display: 'inline-block',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            View Resume
          </a>
        </div>
      </section>
    );
  }